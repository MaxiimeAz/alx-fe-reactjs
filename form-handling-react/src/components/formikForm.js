import React from "react";
import { useFormik, Field, ErrorMessage } from "formik"; // Import ErrorMessage from Formik
import * as Yup from "yup";

const FormikForm = () => {
  // Formik hook
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      alert("Registration Successful!");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Username</label>
        <Field
          type="text"
          name="username"
          {...formik.getFieldProps("username")}
        />
        <ErrorMessage name="username" component="p" style={{ color: "red" }} />
      </div>

      <div>
        <label>Email</label>
        <Field type="email" name="email" {...formik.getFieldProps("email")} />
        <ErrorMessage name="email" component="p" style={{ color: "red" }} />
      </div>

      <div>
        <label>Password</label>
        <Field
          type="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        <ErrorMessage name="password" component="p" style={{ color: "red" }} />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default FormikForm;
