import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from "yup"

const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
            password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .required("Required")
        }),
        onSubmit: (values) => {
            console.log("submitted!");
    // handle submission
        },
    });

<form className="register-form">
    <input
    id="email"
    name="email"
    type="email"
    placeholder="Your Email"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    />
    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
    <input
    id="password"
    name="password"
    type="password"
    placeholder="Your password"
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    />
    {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
    <input type="submit" value="Submit" />
</form>