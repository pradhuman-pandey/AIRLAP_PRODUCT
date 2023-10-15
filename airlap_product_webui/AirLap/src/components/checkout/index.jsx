import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../providers";
import axios from "../../services/axios";
import "./Checkout.css";

async function displayRazorpay() {

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const res = await loadScript(
    'https://checkout.razorpay.com/v1/checkout.js'
  );

  if (!res) {
    alert('Razorpay SDK failed to load. Are you online?');
    return;
  }

  const result = await axios.post('http://localhost:8000/api/v1/payment/orders');

  if (!result) {
    alert('Server error. Are you online?');
    return;
  }

  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: 'rzp_test_18nVQ5zeW7BiRx', // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: 'Pradhuman Corp.',
    description: 'Test Transaction',
    order_id: order_id,
    handler: async function (response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await axios.post('http://localhost:8000/api/v1/payment/success', data);

      alert(result.data.msg);
    },
    prefill: {
      name: 'Pradhuman Pandey',
      email: 'pradhumanpandeycpp@gmail.com',
      contact: '8979443050',
    },
    notes: {
      address: 'Example Corporate Office',
    },
    theme: {
      color: '#61dafb',
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

const Checkout = () => {
  const { cart, orders, addItemToOrderList, clearCart } =
    useContext(GlobalContext);
  const { discount, extraFees, tax } = { discount: 20, extraFees: 99, tax: 5 };
  const subTotal = Math.floor(cart?.reduce((sum, curr) => sum + curr.price, 0));
  const total = Math.floor(subTotal + 99 + 5 - (subTotal + 99 + 5) * 0.2);
  const [isOrdered, setIsOrdered] = useState(false);
  
  const handlePay = async () => {
    try {
      addItemToOrderList({
        orderId: orders.length + 1,
        buyerId: 1,
        items: [...cart],
        price: total,
        address: "7 Rusk Court",
        deliveryDate: "11/28/2022",
        isDelivered: false,
      });
       await displayRazorpay();
      clearCart();
      setIsOrdered(true);
    } catch (error) {
      console.error("Payment and order submission error:", error);
    }
  };
  return (
    <div className="checkout-container">
      {isOrdered ? (
        <h3>
          Yay! 🚀 Order placed successfully. <Link to="/">Shop more!</Link>
        </h3>
      ) : (
        <>
          <div>
            <div className="custom-row">
              <h4>Order Review</h4>
              <span>{cart?.length} items in cart</span>
            </div>
            <div className="custom-row">
              <h4>Coupons</h4>
              <span>Not Available</span>
            </div>
            <div className="custom-row">
              <h4>Checkout Summary</h4>
              <div className="checkout-summary">
                <span>Subtotal</span>
                <span>${subTotal}</span>
              </div>
              <div className="checkout-summary">
                <span>Discount</span>
                <span>{discount}%</span>
              </div>
              <div className="checkout-summary">
                <span>Extra Fee</span>
                <span>${extraFees}</span>
              </div>
              <div className="checkout-summary">
                <span>Tax</span>
                <span>${tax}</span>
              </div>
            </div>
            <div className="custom-row">
              <h4>Total</h4>
              <span>${total}</span>
            </div>
          </div>
          <button className="item-btn" onClick={handlePay}>
            Pay ${total}
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
