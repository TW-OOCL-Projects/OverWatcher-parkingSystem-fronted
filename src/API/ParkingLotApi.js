import {initEmployee} from "../actions";

const axios = require('axios');
const parkingLotApi = {

    employees: [],
    updateServerData(dispatch, oprationType) {
        axios.get('http://localhost:9090/employees')
            .then((response) => {
                console.log(response)
                this.employees = response.data.map(serviceData => {
                    const {id, name, email,phone,roleList} = serviceData;
                    return {id, name, email,phone,role:roleList[0]};
                });
                console.log(this.employees)
                switch (oprationType) {
                    case "INIT":
                        dispatch(initEmployee(this.employees));
                        break;
                    default:
                        return null
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    init(dispatch, oprationType) {
        console.log(dispatch)
        this.updateServerData(dispatch, oprationType)
    }
}

export default parkingLotApi;