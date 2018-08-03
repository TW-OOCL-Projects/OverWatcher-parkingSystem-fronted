import {initOrderApi, searchOrdersByCondition,assignParkingboy} from "../actions";
import axios from "axios";

const ordersApi = {

    parkingBoys: [],
    updateServerData(dispatch, token) {
        axios.get(`http://localhost:9090/orders`, {
            headers: {"Authorization": token}
        }).then((response) => {
            dispatch(initOrderApi(response.data));
        }).catch(function (error) {
            console.log(error);
        })
    },

    findOrdersByConditions(value, selected, dispatch) {

        let url = "http://localhost:9090/orders";
        if (selected === "status") {
            url += "/" + selected + "?" + selected + "=" + value;
            console.log(url);
        } else if (selected === "type") {
            url += "/" + selected + "?" + selected + "=" + value;
            console.log(url);
        } else if (selected === "id") {
            url += "/" + value;
            console.log(url);
        }
        // else if(selected === "carId"){
        //     url += "?" + selected + "=" + value;
        // }

        axios.get(url, {
            headers: {"Authorization": window.localStorage.token}
        }).then((response) => {
            console.log(response.data);
            dispatch(searchOrdersByCondition(response.data));
        }).catch(function (error) {
            console.log(error);
        })
    },
    assigned(id,dispatch) {
        axios.get(`http://localhost:9090/employees/onWork`, {
            headers: {"Authorization": window.localStorage.token}
        }).then((response) => {
            dispatch(assignParkingboy(response.data));
        }).catch(function (error) {
            console.log(error);
        })
    },
    init(dispatch) {
        this.updateServerData(dispatch, window.localStorage.token)
    }
};

export default ordersApi;