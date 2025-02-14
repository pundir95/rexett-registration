  export const WORKPLACE_TYPES_OPTIONS = [
    {
      value: "hybrid",
      label: "Hybrid",
    },
    {
      value: "remote",
      label: "Remote",
    },
    {
      value: "on-site",
      label: "On Site",
    },
  ];
  export const JOB_TYPES_OPTIONS = [
    {
      value: "full-time",
      label: "Full Time",
    },
    {
      value: "part-time",
      label: "Part Time",
    },
    {
      value: "contract",
      label: "Contract",
    },
  ];
  export const MODAL_INFORMATION={
    1:{
      heading:"Setting Up Your First Job post",
      paragraph:"We are really excited that you want to set up a new job with us. Our team is dedicated to providing you with the best possible experience as you embark on this new journey. We are committed to supporting you every step of the way and ensuring that your transition is smooth and successful. Welcome aboard, and we look forward to achieving great things together!"
    },
    4:{
       heading:"Thank you for applying",
       paragraph:<span>Welcome to the Rexett Community! <br/>  A Rexett Team  Will Reach Out to You Shortly for the Next Steps!</span>
    }
  }
  
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  
  export const SIDEBAR_ITEMS = {
    client: [
      { stepNumber: 1, label: "personal" },
      { stepNumber: 2, label: "jobInfo" },
      { stepNumber: 3, label: "jobDescription" },
      { stepNumber: 4, label: "screeningInfo" },
    ],
    vendor: [
      { stepNumber: 1, label: "personal" },
      { stepNumber: 2, label: "decisionMakersInfo" },
      { stepNumber: 3, label: "companyInfo" },
      { stepNumber: 4, label: "areaOfExpertise" },
    ],
    developer: [
      { stepNumber: 1, label: "heading" },
      { stepNumber: 2, label: "workHistory" },
      { stepNumber: 3, label: "education" },
      { stepNumber: 4, label: "skillsInfo" },
      { stepNumber: 5, label: "summary" },
      { stepNumber: 6, label: "projects" },
      { stepNumber: 7, label: "finalize" },
    ],
  };
  
  export const CLIENT_STEPPER_HEADINGS = {
    1: { heading: "clientStep1Heading", para: "clientStep1Para" },
    2: { heading: "clientStep2Heading", para: "clientStep2Para" },
    3: { heading: "clientStep3Heading", para: "clientStep3Para" },
    4: { heading: "clientStep4Heading", para: "clientStep4Para" },
    5: { heading: "clientStep5Heading", para: "clientStep5Para" },
    6: { heading: "clientStep6Heading", para: "clientStep6Para" },
    7: { heading: "clientStep7Heading", para: "clientStep7Para" },
  };
  
  export const VENDOR_STEPPER_HEADINGS = {
    1: { heading: "vendorStep1Heading", para: "vendorStep1Para" },
    2: { heading: "vendorStep2Heading", para: "vendorStep2Para" },
    3: { heading: "vendorStep3Heading", para: "vendorStep3Para" },
    4: { heading: "vendorStep4Heading", para: "vendorStep4Para" },
  };
  
  export const DEVELOPER_STEPPER_HEADINGS = {
    1: { heading: "developerStep1Heading", para: "developerStep1Para" },
    2: { heading: "developerStep2Heading", para: "developerStep2Para" },
    3: { heading: "developerStep3Heading", para: "developerStep3Para" },
    4: { heading: "developerStep4Heading", para: "developerStep4Para" },
  };
  






  export const getActiveStepHeadingData = (activeStep ,type ) => {
    if (type == 'client') {
      return CLIENT_STEPPER_HEADINGS[activeStep] ||{ heading: '' }; 
    } 
    else if (type == 'vendor') {
      console.log("type-vendor")
      return VENDOR_STEPPER_HEADINGS[activeStep] || { heading: '' }; 
    } else {
      return DEVELOPER_STEPPER_HEADINGS[activeStep] || { heading: '' }; 
      
    }
  
    
  }
  
  // export const getActiveStepVendorHeadingData = (activeStep) =>
  //   VENDOR_STEPPER_HEADINGS[activeStep] || null;
  
  const CLIENT_STEP_1_FIELDS = {
    indivisual: [
      {
        label: "firstName",
        fieldName: "first_name",
        type: "text",
        placeholder: "e.g. John",
        rules: { required: "First name is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "surname",
        fieldName: "last_name",
        type: "text",
        placeholder: "e.g. Doe",
        rules: { required: "Surname is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "phoneNumber",
        fieldName: "phone_number",
        type: "phone",
        placeholder: "e.g. +91 1234567890",
        rules: { required: "Phone number is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "email",
        fieldName: "email",
        type: "email",
        placeholder: "e.g. johndoe123@gmail.com",
        rules: {
          required: "Email is required",
          pattern: {
            value: EMAIL_REGEX,
            message: "Invalid Email",
          },
        },
        columnWidth: 6,
        isRequired: true,
      },
      {
        isPasswordSection: true,
      },
      {
        label: "taxId",
        fieldName: "company_tax_id",
        type: "text",
        placeholder: "Enter Tax ID",
        rules: { required: "Phone number is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "yearlyRevenue",
        fieldName: "yearly_revenue",
        type: "text",
        placeholder: "Enter yearly revenue",
        rules: { required: "Yearly revenue is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "address",
        fieldName: "company_address",
        type: "select",
        placeholder: "e.g. Street 1341,New area,CA,USA",
        rules: { required: "Address is required" },
        columnWidth: 12,
        isRequired: true,
        isAutocomplete: true,
      },
      {
        isLocation: true,
      },
    ],
    company: [
      {
        label: "companyName",
        fieldName: "company_name",
        type: "text",
        placeholder: "e.g. Google",
        rules: { required: "Company name is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "taxId",
        fieldName: "company_tax_id",
        type: "text",
        placeholder: "Enter Tax ID",
        rules: { required: "Tax ID is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "establishmentYear",
        fieldName: "establishment_year",
        type: "date",
        isMaxRequired: true,
        // placeholder: "Enter Tax ID",
        rules: { required: "Tax ID is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "websiteUrl",
        fieldName: "website_url",
        type: "text",
        placeholder: "e.g. www.xyztechnology.com",
        rules: { required: "Tax ID is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "yearlyRevenueInUsd",
        fieldName: "yearly_revenue",
        type: "text",
        placeholder: "e.g. 15,000",
        rules: { required: "Yearly revenue is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "employeesStrength",
        fieldName: "employee_strength",
        type: "text",
        placeholder: "e.g. 100",
        rules: { required: "Employees strength is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "phoneNumber",
        fieldName: "phone_number",
        type: "phone",
        placeholder: "e.g. +91 1234567890",
        rules: { required: "Phone number is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "email",
        fieldName: "email",
        type: "email",
        placeholder: "e.g. johndoe123@gmail.com",
        rules: {
          required: "Email is required",
          pattern: {
            value: EMAIL_REGEX,
            message: "Invalid Email",
          },
        },
        columnWidth: 6,
        isRequired: true,
      },
      {
        isPasswordSection: true,
      },
      {
        label: "address",
        fieldName: "address",
        type: "select",
        placeholder: "e.g. Street 1341,New area,CA,USA",
        rules: { required: "Address is required" },
        columnWidth: 12,
        isRequired: true,
        isAutocomplete: true,
      },
      {
        isLocation: true,
      },
    ],
  };
  const CLIENT_STEP_2_FIELDS = [
    {
      label: "jobTitle",
      type: "text",
      fieldName: "job_title",
      isRequired: true,
      columnWidth: 6,
      rules: { required: "Job title is Required" },
      placeholder: "Enter job title",
    },
    {
      label: "workplaceType",
      type: "normal-select",
      fieldName: "workplace_type",
      isRequired: true,
      columnWidth: 6,
      rules: { required: "Workplace type is Required" },
      placeholder: "Select Workplace",
      options: WORKPLACE_TYPES_OPTIONS,
      defaultOption: "Select workplace",
    },
    {
      label: "jobLocation",
      fieldName: "job_location",
      type: "select",
      placeholder: "e.g. Street 1341,New area,CA,USA",
      rules: { required: "Job location is required" },
      columnWidth: 6,
      isRequired: true,
      isAutocomplete: true,
    },
    {
      label: "jobType",
      type: "normal-select",
      fieldName: "job_type",
      isRequired: true,
      columnWidth: 6,
      rules: { required: "Job type is Required" },
      placeholder: "Select Job type",
      options: JOB_TYPES_OPTIONS,
      defaultOption: "Select job type",
    },
    {
      label: "availablePositions",
      type: "text",
      fieldName: "available_positions",
      isRequired: true,
      columnWidth: 6,
      rules: { required: "Number of positions available are Required" },
      placeholder: "e.g 10",
    },
  ];
  const CLIENT_ACTIVE_STEP_FIELDS = {
    1: CLIENT_STEP_1_FIELDS,
    2: CLIENT_STEP_2_FIELDS,
  };
  
  export const getActiveStepFields = (activeStep, registrationType) => {
    if (activeStep === 1) {
      return CLIENT_ACTIVE_STEP_FIELDS[activeStep][registrationType] || null;
    } else {
      return CLIENT_ACTIVE_STEP_FIELDS[activeStep] || null;
    }
  };
  
  export const DEFAULT_SCREENING_DATA = [
    {
      optionId: 1,
      label: "Work Experience",
      title: "",  
      question_type: "",
      question: "How many years of experience do you currently have?",
      isRecommended: true,
    },
    {
      optionId: 2,
      label: "Education",
      question_type: "Degree",
      title: "",
      ideal_answer: "Yes",
      question: "Have you completed the following level of education: [Degree]",
      isRecommended: true,
    },
    {
      optionId: 3,
      label: "Language",
      title: "",
      question_type: "language",
      question: "What is your level of proficiency in [Language]?",
      isRecommended: true,
    },
  ];
  const VENDOR_STEP_1_FIELDS = [
    {
      label: "companyName",
      fieldName: "company_name",
      type: "text",
      placeholder: "e.g. Microsoft",
      rules: { required: "Company name is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "typeOfCompany",
      fieldName: "type_of_company",
      type: "normal-select",
      // placeholder: "",
      rules: { required: "Type of company is required" },
      columnWidth: 6,
      isRequired: true,
      defaultOption: "Select company type",
    },
    {
      label: "taxId",
      fieldName: "tax_id",
      type: "text",
      placeholder: "Enter Tax ID",
      rules: { required: "Tax ID is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "cinNumber",
      fieldName: "cin",
      type: "text",
      placeholder: "Enter CIN Number",
      rules: { required: "CIN number is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "establishmentYear",
      fieldName: "establishment_year",
      type: "date",
      isMaxRequired: true,
      rules: { required: "Establishment year is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "websiteUrl",
      fieldName: "website",
      type: "text",
      placeholder: "e.g. www.xyztechnology.com",
      rules: { required: "Website URL is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "yearlyRevenueInUsd",
      fieldName: "yearly_revenue",
      type: "text",
      placeholder: "e.g. 15,000",
      rules: { required: "Yearly revenue is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "employeeStrength",
      fieldName: "total_employees", // need to change this field according to the API
      type: "text",
      placeholder: "e.g. 100",
      rules: { required: "Employees strength is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "phoneNumber",
      fieldName: "phone_number",
      type: "phone",
      rules: { required: "Phone number is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      isPasswordSection: true,
    },
    {
      label: "email",
      fieldName: "email",
      type: "email",
      placeholder: "e.g. johndoe123@gmail.com",
      rules: {
        required: "Email is required",
        pattern: {
          value: EMAIL_REGEX,
          message: "Invalid Email",
        },
      },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "address",
      fieldName: "company_address",
      type: "select",
      placeholder: "e.g. Street 1341,New area,CA,USA",
      rules: { required: "Address is required" },
      columnWidth: 12,
      isRequired: true,
      isAutocomplete: true,
    },
    {
      isLocation: true,
    },
  ];
   const VENDOR_STEP_2_FIELDS = [
    {
      label: "Name",
      fieldName: "name",
      type: "text",
      placeholder: "e.g. John",
      rules: { required: "Name is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Position",
      fieldName: "position",
      type: "text",
      placeholder: "e.g. Microsoft",
      rules: { required: "Position is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Phone Number",
      fieldName: "phone_number",
      type: "phone",
      placeholder: "e.g. +918979003975",
      rules: { required: "Phone number is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Email",
      fieldName: "email",
      type: "email",
      placeholder: "e.g. johndoe123@gmail.com",
      rules: {
        required: "Email is required",
        pattern: {
          value: EMAIL_REGEX,
          message: "Invalid Email",
        },
      },
      columnWidth: 6,
      isRequired: true,
    },
  ];
  const VENDOR_STEP_4_FIELDS = [
    {
      label: "areaOfSpecialization",
      fieldName: "area_of_specialization",
      type: "normal-select",
      // placeholder: "",
      rules: { required: "Type of specialization is required" },
      columnWidth: 12,
      isRequired: true,
      defaultOption: "Select Specialization type",
    },
  
    {
      label: "serviceOffering",
      fieldName: "service_offering",
      type: "normal-select",
      // placeholder: "",
      rules: { required: "Service offering is required" },
      columnWidth: 12,
      isRequired: true,
      defaultOption: "Select",
    },
  
    {
      label: "Your Turnaround time to close Contract Positions",
      fieldName: "Your_Turnaround_time_to_close_Contract_Positions",
      type: "text",
      placeholder: "e.g. 8 hours",
      rules: { required: "This field is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Your Turnaround time to close Permanent Positions",
      fieldName: "Your_Turnaround_time_to_close_Permanent_Positions",
      type: "text",
      placeholder: "e.g. 24 hours",
      rules: { required: "This field is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Please share your success Stories with atleast 2 of your exiting IT customers and their Contact details for reference check ",
      fieldName: "Please_share_your_success_Stories_with_atleast_2_of_your_exiting_IT_customers_and_their_Contact_details_for_reference_check ",
      type: "text",
      placeholder: "e.g. Desc",
      rules: { required: "This field is required" },
      columnWidth: 6,
      isRequired: true,
    },
  ]
  const VENDOR_STEP_3_FIELDS=[
    {
      label: "Estbl. Year",
      fieldName: "estiblashment_year",
      type: "text",
      placeholder: "e.g. 8 hours",
      rules: { required: "Establishment is required" },
      columnWidth: 12,
      isRequired: true,
    },
    {
  
    label: "Type of Establishment",
    fieldName: "type_estiblashment_year",
      type: "normal-select",
    rules: { required: "Type of Establishment is required" },
    columnWidth: 12,
    isRequired: true,
  },
    {
      label: "Total Employees in Company",
      fieldName: "Total_Employees_in_Company",
      type: "text",
      placeholder: "e.g. 8 hours",
      rules: { required: "This field is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Total nos. of IT Recruiters ",
      fieldName: "Total_nos._of_IT_Recruiters ",
      type: "text",
      placeholder: "e.g. 8 hours",
      rules: { required: "This field is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Yearly Revenues",
      fieldName: "Yearly_Revenues",
      type: "text",
      placeholder: "e.g. 8 hours",
      rules: { required: "This field is required" },
      columnWidth: 6,
      isRequired: true,
    },
    
  ]
  const VENDOR_STEP_FIELDS = {
    1: VENDOR_STEP_1_FIELDS,
    2: VENDOR_STEP_2_FIELDS,
    3: VENDOR_STEP_3_FIELDS,
    4: VENDOR_STEP_4_FIELDS,
  };
  
  export const getVendorActiveStepFields = (activeStep ) =>{
    return VENDOR_STEP_FIELDS[activeStep] || null;
  }
  
   
  
  
  const DEVELOPER_STEP_1_FIELDS = [
      {
        label: "firstName",
        fieldName: "first_name",
        type: "text",
        placeholder: "e.g. John",
        rules: { required: "First name is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "surname",
        fieldName: "last_name",
        type: "text",
        placeholder: "e.g. Doe",
        rules: { required: "Surname is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "Profession",
        fieldName: "profession",
        type: "text",
        placeholder: "e.g. Software Engineer",
        rules: { required: "Profession is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "Language Proficiency",
        fieldName: "language_proficiency",
        type: "normal-select",
        // rules: { required: "Profession is required" },
        columnWidth: 6,
        isRequired: false,
        defaultOption: "Select",
      },
      {
        label: "phoneNumber",
        fieldName: "phone_number",
        type: "phone",
        placeholder: "e.g. +91 1234567890",
        rules: { required: "Phone number is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "email",
        fieldName: "email",
        type: "email",
        placeholder: "e.g. johndoe123@gmail.com",
        rules: {
          required: "Email is required",
          pattern: {
            value: EMAIL_REGEX,
            message: "Invalid Email",
          },
        },
        columnWidth: 6,
        isRequired: true,
      },
      {
        isLocation: true,
      },
      {
        label: "Resume",
        fieldName: "upload_resume",
        type: "upload",
        placeholder: "Upload Resume",
        rules: { required: "Resume Required" },
        columnWidth: 12,
        isRequired: true,
      },
      {
        label: "Intro Video",
        fieldName: "intro_video",
        type: "upload",
        placeholder: "Upload Intro Video",
        rules: { required: "Intro Video is required" },
        columnWidth: 12,
        isRequired: true,
      },
      {
        label: "LinkedIn",
        fieldName: "linked_in",
        type: "text",
        placeholder: "e.g. www.linkedin.com/profile/12345",
        rules: { required: "Linked in is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "Github",
        fieldName: "git_hub", 
        type: "text",
        placeholder: "e.g. www.github.com/profile/12345",
        rules: { required: "GitHub in is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "Github",
        fieldName: "git_hub", 
        type: "text",
        placeholder: "e.g. www.github.com/profile/12345",
        rules: { required: "GitHub in is required" },
        columnWidth: 2,
        isRequired: true,
      },
      {
        label: "Github",
        fieldName: "git_hub", 
        type: "text",
        placeholder: "e.g. www.github.com/profile/12345",
        rules: { required: "GitHub in is required" },
        columnWidth: 2,
        isRequired: true,
      },
      {
        label: "Github",
        fieldName: "git_hub", 
        type: "text",
        placeholder: "e.g. www.github.com/profile/12345",
        rules: { required: "GitHub in is required" },
        columnWidth: 2,
        isRequired: true,
      },
      
    ]
  
    const NESTED_DEVELOPER_STEP_1_FIELDS = [
      {
        label: "Job Title",
        fieldName: "job_title",
        type: "text",
        placeholder: "e.g. Web Developer",
        rules: { required: "Web developer is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "surname",
        fieldName: "last_name",
        type: "text",
        placeholder: "e.g. Doe",
        rules: { required: "Surname is required" },
        columnWidth: 6,
        isRequired: true,
      },
      {
        label: "Profession",
        fieldName: "profession",
        type: "text",
        placeholder: "e.g. Software Engineer",
        rules: { required: "Profession is required" },
        columnWidth: 6,
        isRequired: true,
      }
    ]
  
  
  
  
    
  
  
  
  
  const DEVELOPER_STEP_FIELDS = {
    1: DEVELOPER_STEP_1_FIELDS,
  };
  
  const NESTED_DEVELOPER_STEP_FIELDS={
    1:NESTED_DEVELOPER_STEP_1_FIELDS
  }
  
  export const getDeveloperActiveStepFields = (activeStep,nestedActiveStep) =>{
    if(nestedActiveStep>0){
      return NESTED_DEVELOPER_STEP_FIELDS[activeStep] || null;
    }else{
     return DEVELOPER_STEP_FIELDS[activeStep] || null;
    }
  }
    import React from 'react'
    
    const RegistrationConstant = () => {
      return (
        <div>registrationConstant</div>
      )
    }
    
    export default RegistrationConstant
    
  
  
  