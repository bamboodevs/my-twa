import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Pool.css";

const relativesValidationSchema = Yup.object({
  activePool: Yup.string()
    .oneOf(
      ["Pool1", "Pool2", "Pool3", "Pool4"],
      "یکی از گزینه‌های موجود را انتخاب کنید"
    )
    .required("This Field is Required!"),
  xGCode: Yup.string()
    .matches(/^\d{9}$/, "Your relatives xGCode must be a 9-digit number")
    .required("This Field is Required!"),
});

const relativesInitialValues = {
  activePool: "",
  xGCode: "",
};

const relativesOnSubmit = (values) => {
  console.log("Relatives Form data", values);
};

const RelativesForm = () => {
  return (
    <div>
      <h6>Add Relatives</h6>
      <Formik
        initialValues={relativesInitialValues}
        validationSchema={relativesValidationSchema}
        onSubmit={relativesOnSubmit}>
        {(formik) => (
          <Form>
            <div className="form-group">
              <label htmlFor="activePool">Your activity pools</label>
              <Field
                as="select"
                id="activePool"
                className="form-control"
                name="activePool">
                <option value="">--Select--</option>
                <option value="Pool1">Pool1</option>
                <option value="Pool2">Pool2</option>
                <option value="Pool3">Pool3</option>
                <option value="Pool4">Pool4</option>
              </Field>
              <ErrorMessage
                className="text-danger"
                name="activePool"
                component="div"
              />
            </div>

            <div className="form-group">
              <label htmlFor="xGCode">Your relatives xGCode</label>
              <div className="input-group">
                <Field
                  type="text"
                  id="xGCode"
                  className="form-control"
                  name="xGCode"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    style={{ borderRadius: "0 .4rem .4rem 0" }}>
                    check
                  </button>
                </div>
              </div>
              <ErrorMessage
                className="text-danger"
                name="xGCode"
                component="div"
              />
            </div>

            <div className="form-group d-flex justify-content-center">
              <button
                type="submit"
                className="col-12 btn btn-sm btn-success my-2">
                Invite
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RelativesForm;
