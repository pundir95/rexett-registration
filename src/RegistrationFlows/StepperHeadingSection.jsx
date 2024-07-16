import React from "react";
import { useTranslation } from "react-i18next";
import { getActiveStepHeadingData } from "../helper/RegisterConstant";

const StepperHeadingSection = ({ activeStep, type }) => {
  console.log(activeStep,"activestep")
  console.log(type,"type")
  const { t } = useTranslation();
  let { heading, para } = getActiveStepHeadingData(activeStep , type);
  console.log(heading,"heading")
  console.log(para,"para")

  return (
    <div>
      <h2 className="resume-heading">{t(heading)}</h2>
      <p>{t(para)}</p>
    </div>
  );
};

export default StepperHeadingSection;
