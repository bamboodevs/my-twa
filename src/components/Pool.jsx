import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Pool.css";
import RelativesForm from "./RelativesForm"; // ایمپورت کامپوننت جدید

// طرح اعتبار سنجی با استفاده از Yup
const validationSchema = Yup.object({
  poolName: Yup.string()
    .matches(/^[A-Za-z]/, "The desired name must start with the letters a-z")
    .min(6, "The selected name must be at least 6 characters long")
    .required("This Field is Required!"),
  arBotLev: Yup.string()
    .oneOf(["1", "2", "3", "4"], "یکی از ۴ گزینه را انتخاب کنید")
    .required("This Field is Required!"),
});

const initialValues = {
  poolName: "",
  arBotLev: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const FormComponent = () => {
  return (
    <div>
      <h6>Creare Your Pool</h6>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <div className="form-group">
              <label htmlFor="poolName">PoolName</label>
              <Field
                type="text"
                id="poolName"
                className="form-control form-text text-muted"
                name="poolName"
              />
              <ErrorMessage
                className="text-danger"
                name="poolName"
                component="div"
              />
            </div>

            <div className="form-group ">
              <label htmlFor="arBotLev">ArBot Lev</label>
              <Field
                as="select"
                id="arBotLev"
                className="form-control"
                name="arBotLev">
                <option value="">--Select--</option>
                <option value="1">Lev1(0-5.999 TON / PPD:0.85%)</option>
                <option value="2">Lev2(6-14.999 TON / PPD:0.95%)</option>
                <option value="3">Lev3(15-29.999 TON / PPD:1.2%)</option>
                <option value="4">Lev4(+30.000 TON / PPD:1.5%)</option>
              </Field>
              <ErrorMessage
                className="text-danger"
                name="arBotLev"
                component="div"
              />
            </div>

            <div className="form-group d-flex justify-content-center">
              <button
                type="submit"
                className="col-12 btn btn-sm btn-success my-2">
                Create Pool
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

function Pool() {
  const rows = Array.from({ length: 10 }, (v, k) => k + 1);

  return (
    <div className="contentStyle">
      <div className="poolOverlay">
        <div className="coming-soon-text">Coming Soon!</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap align-items-center justify-content-between pools-frame">
            <div className="col-12 you-invited mb-2">
              <strong>
                You are invited to the "Zambie" pool by Shirin. The entrance fee
                to the pool is 5 ton coins. Do you want to join?
              </strong>
              <br />
              <div className="btns d-flex alig-items-center justify-content-center">
                <span className="btn btn-sm btn-success mx-2">Confirm</span>
                <span className="btn btn-sm btn-danger mx-2">Dismiss</span>
              </div>
            </div>
            <div className="col-12 pool-stages">
              <h6>ArBot Plans</h6>
              <ul>
                <li>
                  <strong>Level 1</strong> <br /> Cost : 0 - 5.999 TON - PPD :
                  0.85%
                </li>
                <li>
                  <strong>Level 2</strong> <br /> Cost : 6 - 14.999 TON - PPD :
                  0.95%
                </li>
                <li>
                  <strong>Level 3</strong> <br /> Cost : 15 - 29.999 TON - PPD :
                  1.2%
                </li>
                <li>
                  <strong> Level 4</strong> <br /> Cost : +30 TON - PPD : 1.5%
                </li>
              </ul>
            </div>
            <div className="col-12 create-your-pool mb-3">
              {FormComponent()}
            </div>
            <div className="col-12 add-relatives mb-3">{RelativesForm()}</div>
            <div className="col-12 your-active-pool">
              <div>
                <h6>Your Active Pools</h6>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Pool Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((num) => (
                      <tr key={num}>
                        <th scope="row">{num}</th>
                        <td>{`pool${num}`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pool;
