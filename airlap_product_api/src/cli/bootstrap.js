import { Server } from "http";

import express from "express";
import cors from "cors";
import multer from "multer";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";

import { authenticate } from "../middlewares";
import urlpattern from "../routes";
import { MONGO_URI } from "../settings";

export function getRequestListener() {
  const application = express();
  application.use(cors());
  application.use(express.json());
  application.use(express.urlencoded({ extended: true }));
  application.use(helmet());
  application.use(morgan("combined"));
  application.use(authenticate);
  urlpattern.forEach((router, pattern) => {
    application.use(pattern, router);
  });

  return application;
}

export default async function bootstrap(port, host) {
  const requestListener = getRequestListener();

  const options = {};
  const server = new Server(options, requestListener);

  await mongoose.connect(MONGO_URI);
  server.listen(port, host, () => {
    console.info(server.address());
  });
}
