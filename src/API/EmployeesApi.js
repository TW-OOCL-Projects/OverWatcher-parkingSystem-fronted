import {initEmployee,searchEmployeesByCondition} from "../actions";
import axios from "axios";

let url = `http://localhost:9090/employees`;
const employeesApi = {

    employees: [],
    init(dispatch) {
        axios.get(url, {
            headers: {"Authorization": window.localStorage.token}
        }).then((response) => {
            // console.log(response);
            this.employees = response.data.map(serviceData => {
                const {id, name, email, phone, roleList} = serviceData;
                return {id, name, email, phone, role: roleList[0]};
            });
            dispatch(initEmployee(this.employees));
        }).catch(function (error) {
            console.log(error);
        });
    },

    findEmployeesByConditions(value, selected, dispatch) {
        let url1 = "http://localhost:9090/employees";
        if (selected === "name") {
            url1 += "/" + selected + "?" + selected + "=" + value;
            console.log(url1);
        } else if (selected === "email") {
            url1 += "/" + selected + "?" + selected + "=" + value;
            console.log(url1);
        } else if (selected === "phone") {
            url1 += "/" + selected + "?" + selected + "=" + value;
            console.log(url1);
        }
        else if (selected === "role") {
            url1 += "/" + selected + "?" + selected + "=" + value;
            console.log(url1);
        }

        axios.get(url1, {
            headers: {"Authorization": window.localStorage.token}
        }).then((response) => {
            //测试返回数据
            this.employees = response.data.map(serviceData => {
                const {id, name, email, phone, roleList} = serviceData;
                return {id, name, email, phone, role: roleList[0]};
            });
            dispatch(searchEmployeesByCondition(this.employees));
        }).catch(function (error) {
            console.log(error);
        })
    }
};

export default employeesApi;