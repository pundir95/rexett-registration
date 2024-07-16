import ClientRegistrationStepper from "./RegistrationFlows/ClientRegistrationFlow/ClientRegistrationStepper";
import VendorRegistrationStepper from "./RegistrationFlows/VendorRegistrationFlow/VendorRegistrationStepper";

export const route=[
    // {
    //     path: "/developer-registration",
    //     element: <DeveloperRegistrationStepper />,
    // },
    {
        path: "/",
        element: <ClientRegistrationStepper />,
        // element: <ClientStep1 />,
        public: true,
      },
      {
        path: "/vendor-registration",
        element: <VendorRegistrationStepper />,
        public: true,
      },
]