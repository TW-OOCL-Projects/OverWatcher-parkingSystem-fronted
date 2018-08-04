import {initEmployee,searchEmployeesByCondition,addEmployee} from "../actions";
import axios from "axios";
import {message} from "antd/lib/index";

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
    },
    addNewEmployee(values, dispatch){
        axios
            .post("http://localhost:9090/employees", {
                name:values.userName,
                roleList:[{name:values.role}],
                email:values.email,
                phone:values.phone
            })
            .then(res => {
                console.log(res);
                dispatch(addEmployee(values));
                this.updateServerData(dispatch, window.localStorage.token)
                message.success('员工新建成功！',2);

            })
            .catch(function(error) {
                console.log(error);
                message.success('员工新建失败！',2);
            });
    }
};

export default employeesApi;