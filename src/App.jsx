import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientRegistrationStepper from './RegistrationFlows/ClientRegistrationFlow/ClientRegistrationStepper';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import VendorRegistrationStepper from './RegistrationFlows/VendorRegistrationFlow/VendorRegistrationStepper';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
// import 'react-calendar/dist/Calendar.css'; 
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Example routes for client registration */}
          {/* <Route path="/client-personal" element={<ClientPersonal />} /> */}
          {/* <Route path="/job-info" element={<JobInfo />} /> */}
          {/* <Route path="/job-description" element={<JobDescription />} /> */}
          {/* <Route path="/screening-info" element={<ScreeningInfo />} /> */}
          {/* <Route path="/client-register" element={<ClientStep1 />} /> */}
          {/* <Route path="/client-individual" element={<ClientIndividual />} /> */}

          {/* Example routes for vendor registration */}
          {/* <Route path="/vendor-personal" element={<VendorPersonal />} /> */}
          {/* <Route path="/desicion-makers" element={<DecisionMakers />} /> */}
          {/* <Route path="/company-info" element={<CompanyInfo />} /> */}
          {/* <Route path="/area-expertise" element={<AreaExpertise />} /> */}

          {/* Route for ClientRegistrationStepper */}
          <Route path="/" element={<ClientRegistrationStepper/>} />
          <Route path="/vendor-registration" element={<VendorRegistrationStepper/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
