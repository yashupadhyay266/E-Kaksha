const asyncHandler = require("express-async-handler");
const InstructorPayment = require("../models/InstructorPayment");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const { response } = require("express");

// const razorpay = new Razorpay({
//   key_id: "rzp_test_tOsI14GHZSP3U8",
//   key_secret: "oytgKKbuxFUlZdx4qr4tzG4j",
// });
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });
const razorpay = new Razorpay({
  key_id: "rzp_live_qphFT30hy0aZcU",
  key_secret: "YW728HfFj3D5R5tun3P2HJYp",
});
/*
LIST OF CONTROLLERS
1. paymentsToInstructors
2. perform a payment
3. Pay using razorpay
*/

// 1. Get all  paytments to Instructors -
const paymentsToInstructors = asyncHandler(async (req, res) => {
  const instructorPayments = await InstructorPayment.find({}).populate(
    "instructorId",
    "name email"
  );
  res.status(200).json({
    success: true,
    data: instructorPayments,
  });
});

const performPayment = asyncHandler(async (req, res) => {
  const {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    instructorId,
    amount,
  } = req.body;
  const payment = new InstructorPayment({
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    instructorId,
    amount: amount,
  });
  await payment.save();
  return res.status(200).json({
    success: true,
    data: payment,
  });
});

// Payment gateway using Razorpay
const payUsingRazorpayy = async (req, res) => {
  const { count, id } = req.body;
  console.log(count);
  const payment_capture = 1;
  const amount = count;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    // console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  paymentsToInstructors,
  performPayment,
  payUsingRazorpayy,
};
