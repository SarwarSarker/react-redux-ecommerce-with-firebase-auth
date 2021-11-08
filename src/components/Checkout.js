import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { clearCart } from "../redux/features/cartSlice";
import { db } from "./firebase";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();

  const initialvalues = {
    username: "",
    email: "",
    address: "",
  };

  const validateSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().email().required("Email is Required"),
    address: Yup.string().required("Address is required"),
  });

  return (
    <>
      <div className="container flex flex-col lg:flex-row justify-between my-6 w-11/12">
        <div className="w-full lg:w-2/5">
          <h3 className="bg-blue-700 px-12 py-4 rounded-md text-white text-center">
            Continue to basket
          </h3>
          <div>
            <div className="mt-3 space-y-2">
              {cart.cartItems.map((cartItem) => (
                <h5 key={cartItem.id} className="flex justify-between">
                  <span>
                    {cartItem.title.substring(0, 18)} x {cartItem.cartQuantity}
                  </span>
                  <span> ${cartItem.price * cartItem.cartQuantity}</span>
                </h5>
              ))}
            </div>
            <div className="mt-4 border-t border-b">
              <h5 className="flex justify-between font-bold text-lg py-4">
                <span>Total -</span>
                <span> ${cart.cartTotalAmount}</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 pl-0 lg:pl-8 mt-5 lg:mt-0 mb-8">
          <h3 className="uppercase text-xl font-bold">Add a new Details</h3>
          <Formik
            initialValues={initialvalues}
            validationSchema={validateSchema}
            onSubmit={async (values, { resetForm }) => {
              await addDoc(collection(db, "checkout"), {
                name: values.username,
                email: values.email,
                address: values.address,
                timestamp: serverTimestamp(),
              });
              history.push("/");
              toast.success(
                "Your Order is Completed. Please wait for Admin Confirmation !!",
                {
                  position: "bottom-left",
                }
              );
              resetForm();
              dispatch(clearCart());
            }}
          >
            {(formik) => (
              <Form onSubmit={formik.handleSubmit}>
                <div className="py-5 space-y-6 text-gray-700">
                  <div>
                    <label>Full Name :</label>

                    <Field
                      type="text"
                      name="username"
                      className="border bg-gray-200 px-4 py-3 w-full rounded-md focus:outline-none mt-2"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-600 font-bold"
                    />
                  </div>
                  <div>
                    <label>Email Address :</label>

                    <Field
                      type="text"
                      name="email"
                      className="border bg-gray-200 px-4 py-3 w-full rounded-md focus:outline-none mt-2"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 font-bold"
                    />
                  </div>
                  <div>
                    <label>Address :</label>

                    <Field
                      as="textarea"
                      name="address"
                      className="border bg-gray-200 px-4 py-3 w-full rounded-md focus:outline-none mt-2"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-600 font-bold"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-700 px-12 py-4 rounded-md text-white text-center"
                    // onClick={() => }
                  >
                    Deliver To This Address
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Checkout;
