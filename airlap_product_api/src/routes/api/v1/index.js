import { Router } from "express";

import accounts from "./accounts";
import product from "./product";
import payment from "./payment";
const urlpatterns = new Map([
  ["/payment", payment],
  ["/accounts", accounts],
  ["/product", product],
]);

// eslint-disable-next-line new-cap
const v1 = Router();
urlpatterns.forEach((router, prefix) => {
  v1.use(prefix, router);
});

export default v1;
