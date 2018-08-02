import {initEmployee} from "../actions";
import axios from "axios";
const employeesApi = {

    employees: [],
    updateServerData(dispatch, path,token) {
        console.log(path)
        // axios.get(`http://localhost:9090/employees`,{
        //     headers:token
        // }).then((response) => {
        //     console.log(response)
        //     this.employees = response.data.map(serviceData => {
        //         const {id, name, email, phone, roleList} = serviceData;
        //         return {id, name, email, phone, role: roleList[0]};
        //     });
        //     console.log(this.employees)
        //
        //     dispatch(initEmployee(this.employees));
        //
        // })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        axios.get(`http://localhost:9090/employees`)
            .then((response) => {
                console.log(response)
                this.employees = response.data.map(serviceData => {
                    const {id, name, email,phone,roleList} = serviceData;
                    return {id, name, email,phone,role:roleList[0]};
                });
                console.log(this.employees)

                dispatch(initEmployee(this.employees));

            })
            .catch(function (error) {
                console.log(error);
            })
    },
    init(dispatch, path) {
        console.log(dispatch)
        this.updateServerData(dispatch, path)
    }
}

export default employeesApi;