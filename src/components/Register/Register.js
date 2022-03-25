import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registroEmailPasswordNombre } from "../../redux/actions/actionRegister";
import "../../styles/StyleRegister.css";
export const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      cargo: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        cargo: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 charaters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Password must match")
          .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        registroEmailPasswordNombre(
          values.firstName + " " + values.lastName,
          values.email,
          values.cargo,
          values.password,
        )
      );
      formik.resetForm();
    },
  });
  return (
    <div className="container mt-5">
      <h1 className=" font-weight-bold .display-4 text-center">Registro</h1>
      <form className="row g-3" onSubmit={formik.handleSubmit}>
        <div className="col-md-6">
          <input
            value={formik.values.firstName}
            onChange={formik.handleChange}
            placeholder="Nombre"
            label="Nombre"
            name="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}
          <input
            value={formik.values.lastName}
            onChange={formik.handleChange}
            label="Apellido"
            placeholder="Apellido"
            name="lastName"
            type="text"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
          ) : null}
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            label="Correo"
            name="email"
            placeholder="email"
            type="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="col-md-6">
          <input
            label="cargo"
            name="cargo"
            placeholder="Cargo"
            value={formik.values.cargo}
            onChange={formik.handleChange}
            type="text"
          />
          {formik.touched.cargo && formik.errors.cargo ? (
            <div className="error">{formik.errors.cargo}</div>
          ) : null}
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            label="Contraseña"
            placeholder="contraseña"
            name="password"
            type="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <input
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            label="Confirmar contraseña"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            type="password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        {/* <button className="btn btn-danger mt-3 ml-3" type="reset">
              Google
            </button> */}
        <button className="btn btn-dark mt-5" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};