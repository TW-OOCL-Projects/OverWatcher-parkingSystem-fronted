import {initEmployee, searchEmployeesByCondition, addEmployee, changeAliveAction} from "../actions";
import axios from "axios";
import {message} from "antd/lib/index";

let url = `http://localhost:9090/employees`;
const employeesApi = {

    employees: [],
    init(dispatch) {
        axios.get(url, {
            headers: {"Authorization": window.localStorage.token}
        }).then((response) => {
            console.log("==== 获取所有员工列表 ====");
            console.log(response);
            this.employees = response.data.map(serviceData => {
                const {id, name, email, phone, roleList, alive} = serviceData;
                return {id, name, email, phone, role: roleList[0], alive};
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
    addNewEmployee(values, dispatch) {

        axios
            .post("http://localhost:9090/employees", {
                // headers: {"Authorization": window.localStorage.token},
                name: values.userName,
                roleList: [{name: values.role}],
                email: values.email,
                phone: values.phone
            })
            .then(res => {
                console.log(res);
                dispatch(addEmployee(values));
                this.init(dispatch);
                message.success('员工新建成功！',2);
                setTimeout(()=>{
                    alert("登录用户名与密码已自动生成，请及时把以下信息通知给该新建员工："+
                        "\n\n登录用户名："+res.data.userName+
                        "\n\n登录密码："+res.data.password);
                },2000)
            })
            .catch(function (error) {
                console.log(error);
                message.error('员工新建失败！', 2);
            });
    },
    frozenOrUnfrozen(userId, aliveStatus, finish, dispatch) {
        axios({
            method: 'put',
            url: 'http://localhost:9090/employees',
            data: {
                id: userId,
                alive: aliveStatus
            },
            headers: {"Authorization": window.localStorage.token, "Content-Type": "application/json"},
        }).then(respones => {
            console.log("冻结或激活用户\n-----------------");
            console.log(respones);
            finish()
            dispatch(changeAliveAction(userId, aliveStatus))

        })
            .catch(function (error) {
                console.log(error);
                // message.error('员工新建失败！', 2);
            });
    }
};

export default employeesApi;