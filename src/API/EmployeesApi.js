import {initEmployee,searchEmployeesByCondition} from "../actions";
import axios from "axios";


const employeesApi = {

    employees: [],
    updateServerData(dispatch, path, token) {
        console.log(path);
        axios.get(`http://localhost:9090/employees`, {
            headers: {"Authorization": token}
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
    init(dispatch) {
        this.updateServerData(dispatch, window.localStorage.token)
    },

    findEmployeesByConditions(value, selected, dispatch) {
        let url = "http://localhost:9090/employees";
        if (selected === "name") {
            url += "/" + selected + "?" + selected + "=" + value;
            console.log(url);
        } else if (selected === "email") {
            url += "/" + selected + "?" + selected + "=" + value;
            console.log(url);
        } else if (selected === "phone") {
            url += "/" + selected + "?" + selected + "=" + value;
            console.log(url);
        }
        else if (selected === "role") {
            url += "/" + selected + "?" + selected + "=" + value;
            console.log(url);
        }

        axios.get(url, {
            headers: {"Authorization": window.localStorage.token}
        }).then((response) => {
            //测试返回数据
            // console.log(response.data);
            dispatch(searchEmployeesByCondition(response.data));
        }).catch(function (error) {
            console.log(error);
        })
    }
};

export default employeesApi;