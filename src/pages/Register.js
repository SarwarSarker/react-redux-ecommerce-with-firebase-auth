import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "@firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as Yup from "yup";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { loginuser } from "../redux/features/userSlice";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialvalues = {
    username: "",
    email: "",
    password: "",
  };

  const validateSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <section className="absolute w-full h-full">
          <div className="absolute top-0 w-full h-full bg-gray-600"></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <Formik
                      initialValues={initialvalues}
                      validationSchema={validateSchema}
                      onSubmit={(value, formikBag) => {
                        const { email, password, username } = value;
                        const auth = getAuth();
                        createUserWithEmailAndPassword(
                          auth,
                          email,
                          password,
                          username
                        )
                          .then((userCredential) => {
                            const user = userCredential.user;
                            // Signed in
                            updateProfile(user, {
                              displayName: username,
                            }).then(() => {
                              dispatch(
                                loginuser({
                                  email: user.email,
                                  uid: user.uid,
                                  displayName: username,
                                })
                              );
                              history.push("/");
                            });
                          })
                          .catch((e) =>
                            formikBag.setFieldError("email", e.message)
                          );
                      }}
                    >
                      {(formik) => (
                        <Form onSubmit={formik.handleSubmit}>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Username
                            </label>
                            <Field
                              type="text"
                              name="username"
                              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                              placeholder="Username"
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className="text-red-600 font-bold"
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Email
                            </label>
                            <Field
                              type="text"
                              name="email"
                              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                              placeholder="Email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-600 font-bold"
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Password
                            </label>
                            <Field
                              type="password"
                              name="password"
                              placeholder="Password"
                              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-red-600"
                            />
                          </div>

                          <div className="text-center mt-6">
                            <button
                              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                              type="submit"
                              style={{ transition: "all .15s ease" }}
                            >
                              Sign In
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Register;
