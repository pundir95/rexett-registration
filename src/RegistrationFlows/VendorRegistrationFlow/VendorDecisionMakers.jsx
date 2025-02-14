import React, { useEffect, useState } from "react";
// import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import StepperHeadingSection from "../StepperHeadingSection";
// import ClientStep1 from "../Client Registration flow/ClientStep1";
import { Form, useForm } from "react-hook-form";
// import RexettButton from "../../../components/atomic/RexettButton";
// import { Link } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
// import CommonProfilePictureSection from "../../../components/common/CommonProfilePictureSection";
// import {
//   getActiveStepHeadingData,
//   getVendorActiveStepFields,
//   VENDOR_STEP_2_FIELDS,
// } from "../registrationConstant";
import { Button, Col, Row } from "react-bootstrap";
import {  getVendorActiveStepFields } from "../../helper/RegisterConstant";
import StepperHeadingSection from "../StepperHeadingSection";

const VendorDecisionMakers = ({
  activeStep,
  type,
  activeStepFields,
  setError,
  clearErrors,
  setValue,
  previewImage,
  setImageFile,
  errors,
  control,
  watch,
  register,
  getActiveStepText,
  smallLoader,
  setPreviewImage,
  imageFile
} ) => {


  const onSubmit = (values) => {
    console.log(values, "values");
  };

  // const newStepHeading = getActiveStepHeadingData(activeStep, type);
  const fields = getVendorActiveStepFields(activeStep );
  console.log(fields,"fields")


  return (
    <>
      <section>
        <div>
          <Row>
            <Col md={12}>
              <StepperHeadingSection activeStep={activeStep} type={type} />
              <p className="font-12 fw-medium">* includes a required field</p>
              <div>
              <Row className="w-100">
                {fields?.map(
                  (
                    {
                      label,
                      fieldName,
                      type,
                      rules,
                      placeholder,
                      columnWidth,
                      isRequired,
                      isPasswordSection,
                      isAutocomplete,
                      options,
                      isLocation,
                      defaultOption,
                    },
                    index
                  ) => (
                
                    <>
                      {/* // <Col  md={columnWidth} > */}
                        <Form.Group className="mb-3">
                          <Form.Label className="font-14 fw-medium">
                            {label}
                            {isRequired && (
                              <span className="text-danger">*</span>
                            )}
                          </Form.Label>
                          <Form.Control
                            type={type}
                            placeholder={placeholder}
                            name={fieldName}
                            className="common-field font-14"
                          />
                          {/* {errors[field?.fieldName] && (
                                  <span className="text-danger">{errors[field?.fieldName]?.message}</span>
                                )} */}
                        </Form.Group>
                      {/* // </Col> */}
                      </>
                
                  )
                )}
                    </Row>
                <div className="">
                  <Button variant="transparent" className="position-btn">
                    + Add another member
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default VendorDecisionMakers;
