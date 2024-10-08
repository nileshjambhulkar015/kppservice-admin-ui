import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import KeyParameterComponent from './components/KeyParameterComponent/KeyParameterComponent';

import EmployeeComponent from './components/EmployeeComponent/EmployeeComponent';

import DesignationComponent from './components/MasterComponent/DesignationComponent/DesignationComponent';

import Cookies from 'js-cookie';
import AddNewEmployeeComponent from './components/AddNewEmployeeComponent/AddNewEmployeeComponent';
import AllEmployeesKppComponent from "./components/AllEmployeesKppComponent/AllEmployeesKppComponent";
import AllHodKppStatusComponent from './components/AllHodKppStatusComponent/AllHodKppStatusComponent';
import AssignEmployeeKppComponent from './components/AssignEmployeeKppComponent/AssignEmployeeKppComponent';
import SingleEmployeeCumulativeComponent from "./components/CumulativeKppComponent/SingleEmployeeCumulativeComponent/SingleEmployeeCumulativeComponent";
import SingleHODCumulativeComponent from "./components/CumulativeKppComponent/SingleHODCumulativeComponent/SingleHODCumulativeComponent";
import ViewAllEmployeeCumulativeComponent from "./components/CumulativeKppComponent/ViewAllEmployeeCumulativeComponent/ViewAllEmployeeCumulativeComponent";
import ViewAllHODCumulativeComponent from "./components/CumulativeKppComponent/ViewAllHODCumulativeComponent/ViewAllHODCumulativeComponent";
import EmplyeeUpdateKppRatingsComponent from './components/EmplyeeUpdateKppRatingsComponent/EmplyeeUpdateKppRatingsComponent';
import HODUpdateKppRatingsComponent from './components/HODUpdateKppRatingsComponent/HODUpdateKppRatingsComponent';
import CompanyMasterComponent from './components/MasterComponent/CompanyMasterComponent/CompanyMasterComponent';
import DepartmentComponent from './components/MasterComponent/DepartmentComponent/DepartmentComponent';
import EmployeeTypeComponent from "./components/MasterComponent/EmployeeTypeComponent/EmployeeTypeComponent";
import RegionComponent from "./components/MasterComponent/RegionComponent/RegionComponent";
import RoleComponent from "./components/MasterComponent/RoloComponent/RoleComponent";
import SiteComponent from "./components/MasterComponent/SiteComponent/SiteComponent";
import UoMComponent from "./components/MasterComponent/UoMComponent/UoMComponent";
import ShowEmployeeForKppComponent from './components/ShowEmployeeForKppComponent/ShowEmployeeForKppComponent';
import ViewAllEmpTransferToOtherHODComponent from "./components/ViewAllEmpTransferToOtherHODComponent/ViewAllEmpTransferToOtherHODComponent";
import ComplaintTypeComponent from "./components/MasterComponent/ComplaintTypeComponent/ComplaintTypeComponent";
import OthersPendingComplaintComponent from './components/ComplaintManagementComponent/OthersPendingComplaintComponent';
import OthersResolveComplaintComponent from './components/ComplaintManagementComponent/OthersResolveComplaintComponent';
import OthersInProgressComplaintComponent from './components/ComplaintManagementComponent/OthersInProgressComplaintComponent';
import MeetingMasterComponent from "./components/MeetingMasterComponent/MeetingMasterComponent";


function App() {
 
  const removeCookies = () => {
    Cookies.remove('empId');
    Cookies.remove('roleId');
    Cookies.remove('roleName');
    Cookies.remove('deptId');
    Cookies.remove('deptName');
    Cookies.remove('desigId');
    Cookies.remove('desigName');
    Cookies.remove('empEId');
    Cookies.remove('empFirstName');
    Cookies.remove('empMiddleName');
    Cookies.remove('empLastName');
  }
  return (

    <BrowserRouter>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="http://localhost:3008" onClick={() => removeCookies()}>FutureBizops</a>
          </div>
          <ul className="nav navbar-nav">

          <li><Link to="/keyparemeter">Key Indicator Master</Link></li>
                 
            
         

            <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">KPP Rating Master
            <span className="caret"></span></a>
            <ul className="dropdown-menu">           
            <li><Link to="/allHodKppStatus">HOD KPP</Link></li>
            <li><Link to="/allEmployeeKppStatus">Employee KPP</Link></li>        
            </ul>
          </li>

          <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Employee Master
          <span className="caret"></span></a>
          <ul className="dropdown-menu">           
          <li><Link to="/employee">Employee Master</Link></li>
          <li><Link to="/showEmployeeForKpp">Assign Employee Kpp</Link></li>
          <li><Link to="/transferemployeetohod">Transfer Employee to Other HOD</Link></li>        
          </ul>
        </li>

          
          <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Cumulative Master
          <span className="caret"></span></a>
          <ul className="dropdown-menu">
          <li><Link to="/viewHODCumulativeKpp">View HOD Cumulative Kpp</Link></li>
          <li><Link to="/viewEmployeeCumulativeKpp">View Employee Cumulative Kpp</Link></li>    
          
          </ul>
        </li>

        <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Complaint Management
          <span className="caret"></span></a>
        <ul className="dropdown-menu">
          
          <li><Link to="/othersPendingComplaint">Other's Pending Complaint</Link></li>
          <li><Link to="/othersInProgressComplaint">Other's In Progress Complaint</Link></li>
          <li><Link to="/othersResolveComplaint">Other's Resolve Complaint</Link></li>
        </ul>
      </li>
      <li><Link to="/meetingMaster">Meeting Master</Link></li>
          
        <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Master Records
        <span className="caret"></span></a>
        <ul className="dropdown-menu">
        <li><Link to="/role">Role Master</Link></li>
        <li><Link to="/department">Department Master</Link></li>
        <li><Link to="/designation">Designation Master</Link></li>
        <li><Link to="/uomMaster">UoM Master</Link></li>
        <li><Link to="/empTypeMaster">Employee Type Master</Link></li>
        <li><Link to="/complaintTypeMaster">Complaint Type Master</Link></li>
        <li><Link to="/regionMaster">Region Master</Link></li>
        <li><Link to="/siteMaster">Sites Master</Link></li>
        <li><Link to="/companyMaster">Company Master</Link></li>

    
        </ul>
      </li>
     
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Welcome: {Cookies.get('empEId')}</a></li>
            <li> <a href="http://localhost:3008" onClick={() => removeCookies()} >Logout </a></li>
          </ul>
        </div>
      </nav>
      <Routes>
      <Route exact path="/" element={<RoleComponent />}></Route>
   
        <Route exact path="/newEmployee" element={<AddNewEmployeeComponent />}></Route>
        <Route exact path="/role" element={<RoleComponent />}></Route>
        <Route exact path="/department" element={<DepartmentComponent />}></Route>
        <Route exact path="/designation" element={<DesignationComponent />}></Route>
        <Route exact path="/regionMaster" element={<RegionComponent />}></Route>
        <Route exact path="/siteMaster" element={<SiteComponent />}></Route>
        <Route exact path="/companyMaster" element={<CompanyMasterComponent />}></Route>
        <Route exact path="/uomMaster" element={<UoMComponent />}></Route>
        <Route exact path="/empTypeMaster" element={<EmployeeTypeComponent />}></Route>
        <Route exact path="/complaintTypeMaster" element={<ComplaintTypeComponent />}></Route>
        <Route exact path="/keyparemeter" element={<KeyParameterComponent />} ></Route>
        <Route exact path="/employee" element={<EmployeeComponent />}></Route>
        <Route exact path="/showEmployeeForKpp" element={<ShowEmployeeForKppComponent / >}></Route>
      
        <Route exact path="/allHodKppStatus" element={<AllHodKppStatusComponent />}></Route>
        <Route exact path="/addHodKppRating" element={<HODUpdateKppRatingsComponent />}></Route>
        
        <Route exact path="/allEmployeeKppStatus" element={<AllEmployeesKppComponent />}></Route>
        <Route exact path="/addEmployeeKppRating" element={<EmplyeeUpdateKppRatingsComponent />}></Route>
        <Route exact path="/viewEmployeeCumulativeKpp" element={<ViewAllEmployeeCumulativeComponent />}></Route>
        

        <Route exact path="/assignEmployeeKpp" element={<AssignEmployeeKppComponent />}></Route>
        <Route exact path="/viewSingleEmployeeRatings" element={<SingleEmployeeCumulativeComponent />}></Route>
        <Route exact path="/viewSingleHODRatings" element={<SingleHODCumulativeComponent />}></Route>
        <Route exact path="/transferemployeetohod" element={<ViewAllEmpTransferToOtherHODComponent />}></Route>
        <Route exact path="/viewHODCumulativeKpp" element={<ViewAllHODCumulativeComponent />}></Route>
        
        <Route exact path="/othersPendingComplaint" element={<OthersPendingComplaintComponent />}></Route>
        <Route exact path="/othersInProgressComplaint" element={<OthersInProgressComplaintComponent />}></Route>
        <Route exact path="/othersResolveComplaint" element={<OthersResolveComplaintComponent />}></Route>

        <Route exact path="/meetingMaster" element={<MeetingMasterComponent />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
