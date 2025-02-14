import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import StepperHeadingSection from "../StepperHeadingSection";
import UploadFile from "../DeveloperRegistrationFlow/UploadFile";
import PasswordSection from "../../atomic/PasswordSection";
import CommonProfilePictureSection from "../../atomic/CommonProfilePictureSection";
import { useTranslation } from "react-i18next";
import CommonInput from "../../atomic/CommonInput";
import CommonAutocomplete from "../../atomic/CommonAutocomplete";
import LocationSection from "../../atomic/LocationSection";

const GOOGLE_MAP_API_KEY =  import.meta.env.VITE_REACT_APP_GOOGLE_MAP_API;

const ClientStep1 = ({
  isVendorStep1 = false,
  control,
  errors,
  companyTypeOptions=null,
  activeStep,
  type,
  stepFields,
  setError,
  clearErrors,
  watch,
  setValue,
  register,
  previewImage,
  setPreviewImage,
  setImageFile,
  imageFile,
  isProfileSectionRequired,
}) => {
  const { t } = useTranslation();
  // field name service offerenings  
  console.log(activeStep,"activeStep")
  console.log(type,"type")
  return (
    <>
      <Row>
        <Col md={12}>
          <StepperHeadingSection activeStep={activeStep} type = {type}/>
          <p className="font-12 fw-medium">* includes a required field</p>
          <div className="d-flex align-items-start gap-3">
            {isProfileSectionRequired && (
              <CommonProfilePictureSection
                register={register}
                setValue={setValue}
                clearErrors={clearErrors}
                setImageFile={setImageFile}
                setPreviewImage={setPreviewImage}
                previewImage={previewImage}
                setError={setError}
                imageFile={imageFile}
                fieldName={isVendorStep1 ? "company_logo" :"profile_picture"}
                errors={errors}
              />
            )}
            <Row className="w-100">
              {stepFields?.map(({label,
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
                  defaultOption
                }) =>
                  isPasswordSection ? (
                    <PasswordSection
                      control={control}
                      errors={errors}
                      setError={setError}
                      invalidFieldRequired={true}
                      clearErrors={clearErrors}
                      watch={watch}
                      isColSixRequired={true}
                    />
                  ) : isLocation ? (
                    <LocationSection
                      control={control}
                      errors={errors}
                      watch={watch}
                      setValue={setValue}
                      setError={setError}
                      invalidFieldRequired={true}
                      clearErrors={clearErrors}
                      isTimeZoneRequired={true}
                      isRegistrationStep={true}
                      isVendorStep1={true}
                    />
                  ) : (
                    <Col md={columnWidth}>
                      {isAutocomplete && (
                        <CommonAutocomplete
                          label={t(`${label}`) + `${isRequired && " *"}`}
                          name={fieldName}
                          control={control}
                          rules={{ ...rules }}
                          invalidFieldRequired={true}
                          error={errors?.[fieldName]}
                          apiKey={GOOGLE_MAP_API_KEY}
                          onPlaceSelected={(place) => {
                            setValue(fieldName, place.formatted_address);
                          }}
                          onChange={(e) => {
                            setValue(fieldName, e.target.value);
                          }}
                          options={{
                            types: ["establishment", "geocode"],
                          }}
                        />
                      )}
                      {!isAutocomplete && (
                        <div className="mb-3">
                          {isPasswordSection && (
                            <PasswordSection
                              control={control}
                              errors={errors}
                              setError={setError}
                              clearErrors={clearErrors}
                              watch={watch}
                              isColSixRequired={true}
                            />
                          )}

                          {!isPasswordSection && type!=="upload" ? (
                            <CommonInput
                              label={t(`${label}`) + `${isRequired && " *"}`}
                              name={fieldName}
                              control={control}
                              invalidFieldRequired={true}
                              rules={{ ...rules }}
                              error={errors?.[fieldName]}
                              type={type}
                              options={companyTypeOptions ? companyTypeOptions:options}//get options
                              defaultOption={defaultOption}
                              placeholder={placeholder}
                            />
                          ): <UploadFile 
                          label={label}
                          placeholder={placeholder}
                          />}

                        </div>
                      )}
                    
                    </Col>
                  )
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ClientStep1;
