import axios from "axios";
import Cookies from 'js-cookie';
import { BASE_URL_API, LOGIN_UI_BASE_URL } from "./URLConstants";

const BASE_URL = BASE_URL_API + "/complaint";


class OthersPendingComplaintService {

    //at page load call all the departments load all departments
    getEmployeeCompaintsDetailsByPaging() {
        if (null != Cookies.get('empId')) {
            return axios.get(BASE_URL_API + `/complaint/complaint-search?compStatus=Pending&statusCd=A&page=0&size=1200&sort=empCompId asc`)
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }
    }

    // search department by its name
    getDepartmentDetailsByDeptNamePaging(deptName) {
        if (null != Cookies.get('empId')) {
            return axios.get(BASE_URL_API + `/department/search?deptName=${deptName}&statusCd=A&page=0&size=20&sort=dept.dept_name`)
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }

    }

    //search complaint by complaint id
    getEmployeeCompaintsByComplaintId(empCompIdSearch) {
        if (null != Cookies.get('empId')) {
            return axios.get(BASE_URL_API + `/complaint/complaint-search?compStatus=Pending&compId=${empCompIdSearch}&statusCd=A&page=0&size=1200&sort=empCompId asc`)
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }
    }


    //when click on view button of UI
    getComplaintById(empCompId) {
        if (null != Cookies.get('empId')) {
            return axios.get(BASE_URL + `/by-emp-comp-id?empCompId=${empCompId}`)
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }

    }

    updateComplaintDetails(complaintdata) {
        if (null != Cookies.get('empId')) {
            return axios.put(BASE_URL + "/emp-assign-complaint-him", complaintdata)
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }

    }

    //advance search of employee
    advanceSearchComplaintDetails(advSearchComplaints) {
        if (null != Cookies.get('empId')) {
            return axios.post(BASE_URL_API + "/complaint/complaint-adv-search?page=0&size=200", advSearchComplaints)
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }

    }

    //for advance search department
    getAllDepartmentDetails() {
        if (null != Cookies.get('empId')) {
            return axios.get(BASE_URL_API + "/department")
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }
    }
}


export default new OthersPendingComplaintService();