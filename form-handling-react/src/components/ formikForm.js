import React from "react";
import { useFormik } from "formik";
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
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
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
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          {...formik.getFieldProps("username")}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          autoFocus
        />
        {formik.touched.username && formik.errors.username && (
          <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.username}</p>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          {...formik.getFieldProps("email")}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        {formik.touched.email && formik.errors.email && (
          <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.email}</p>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          {...formik.getFieldProps("password")}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        {formik.touched.password && formik.errors.password && (
          <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Register
      </button>
    </form>
  );
};

export default FormikForm;
