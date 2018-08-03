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
        axios.get("http://localhost:9090/orders/condition", {
            headers: {"Authorization": window.localStorage.token},
            params:{
                condition:selected,
                value:value
            }
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