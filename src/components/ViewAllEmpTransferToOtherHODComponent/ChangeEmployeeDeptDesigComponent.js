import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyParameterService from "../../services/KeyParameterService";
import Cookies from 'js-cookie';
import EmployeeKppsService from "../../services/EmployeeKppsService";
import EmployeeService from "../../services/EmployeeService";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import DepartmentService from "../../services/MasterService/DepartmentService";
import DesignationService from "../../services/MasterService/DesignationService";
export default function ChangeEmployeeDeptDesigComponent() {

    const navigate = useNavigate();

    const [empId, setEmpId] = useState('');
    const [empEId, setEmpEId] = useState('');
    const [empName, setEmpName] = useState('');
    const [roleId, setRoleId] = useState('');
    const [roleName, setRoleName] = useState('');
    const [deptId, setDeptId] = useState('');
    const [deptName, setDeptName] = useState('');
    const [desigId, setDesigId] = useState('');
    const [desigName, setDesigName] = useState('');


    const [departments, setDepartments] = useState([])
    const [designations, setDesignations] = useState([])

    useEffect(() => {

        EmployeeService.searchEmployeeById(Cookies.get('empIdForKpp')).then((res) => {
            setEmpId(res.data.empId)
            setEmpEId(res.data.empEId)
            setEmpName(res.data.empFirstName + ' ' + res.data.empMiddleName + ' ' + res.data.empLastName)
            setRoleName(res.data.roleName)
            setDeptName(res.data.deptName)
            setDesigName(res.data.desigName)
        });

        DepartmentService.ddAllDepartmentExceptGM().then((res1) => {
            setDepartments(res1.data);
            setDeptId(res1.data?.[0]?.deptId)
            let deptId = res1.data?.[0]?.deptId;
            DesignationService.ddDesignationDetailsForKpp(deptId).then((res2) => {
                setDesignations(res2.data);
                setDesigId(res2.data?.[0]?.desigId)

            });
        });

    }, []);




    const handleDeptIdChange = (value) => {

        setDeptId(value)
        let deptId = value;
        DesignationService.ddDesignationDetailsForKpp(deptId).then((res2) => {
            setDesignations(res2.data);
            setDesigId(res2.data?.[0]?.desigId)

        });
    }

    const handleDesigIdChange = (value) => {
        setDesigId(value)
    }

    const updateEmployeeDeptOrDesignation = (e) => {

        e.preventDefault()
        let employeeId = Cookies.get('empId')


        let employeeUpdateDeptDesigRequest = { empId, empEId,deptId, desigId, employeeId };

        if (window.confirm("Do you want to update Employee Department or Designation?")) {
        EmployeeService.updateEmployeeDeptOrDesignation(employeeUpdateDeptDesigRequest).then(res => {

            EmployeeService.searchEmployeeById(Cookies.get('empIdForKpp')).then((res) => {
                setEmpId(res.data.empId)
                setEmpEId(res.data.empEId)
                setEmpName(res.data.empFirstName + ' ' + res.data.empMiddleName + ' ' + res.data.empLastName)
                setRoleName(res.data.roleName)
                setDeptName(res.data.deptName)
                setDesigName(res.data.desigName)
            });
       

        }

        );
    } else {
        // User clicked Cancel
        console.log("User canceled the action.");
    }


    }

    return (
        <div className="row container-fluid">

            <div className="row">
                <div className="col-md-12">

                </div>
            </div>

            <div className="row" >
                <form className="form-horizontal">
                    <div className="col-md-10">

                        <div className="form-group">
                            <label className="control-label col-sm-2"  >Name :</label>
                            <div className="col-sm-5">
                                {empName}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2"  >Employee Id :</label>
                            <div className="col-sm-5">
                                {empEId}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2"  >Role :</label>
                            <div className="col-sm-5">
                                {roleName}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2"  >Department :</label>
                            <div className="col-sm-5">
                                {deptName}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2"  >Designation:</label>
                            <div className="col-sm-5">
                                {desigName}
                            </div>
                        </div>

                        <div className="form-group">
                            <h3>Change Employee Department | Designation</h3>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="deptId">Select Department:</label>
                            <div className="col-sm-2">
                                <div className="form-group">
                                    <select className="form-control" id="deptId" onChange={(e) => handleDeptIdChange(e.target.value)}>

                                        {
                                            departments.map(
                                                department =>
                                                    <option key={department.deptId} value={department.deptId}>{department.deptName}</option>
                                            )
                                        };

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="desigId">Select Designation:</label>
                            <div className="col-sm-2">
                                <div className="form-group">
                                    <select className="form-control" id="desigId" onChange={(e) => handleDesigIdChange(e.target.value)}>

                                        {
                                            designations.map(
                                                designation =>
                                                    <option key={designation.desigId} value={designation.desigId}>{designation.desigName}</option>
                                            )
                                        };

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="row">
                                <button type="submit" className="btn btn-success col-sm-offset-6" onClick={(e) => updateEmployeeDeptOrDesignation(e)}> Submit</button>
                                <button type="submit" className="btn btn-info col-sm-offset-1" onClick={() => navigate(`/changeemployeedeptdesig`, { replace: true })} > Back</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}