import { model, Schema } from "mongoose";

const PaymentDetailsSchema = new Schema({
  razorpayDetails: {
    orderId: String,
    paymentId: String,
    signature: String,
  },
  success: Boolean,
});

const PaymentDetails = model('PatmentDetail', PaymentDetailsSchema);
export default PaymentDetails;