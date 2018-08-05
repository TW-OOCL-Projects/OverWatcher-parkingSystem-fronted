import {initOrderApi, searchOrdersByCondition,assignParkingboy,scramble} from "../actions";
import axios from "axios";


let url = `https://over-back.herokuapp.com`;
// let url = `http://localhost:9090`;
const ordersApi = {

    parkingBoys: [],
    updateServerData(dispatch, token) {
        axios.get(`${url}/orders`, {
            headers: {"Authorization": token}
        }).then((response) => {
            dispatch(initOrderApi(response.data));
        }).catch(function (error) {
            console.log(error);
        })
    },

    findOrdersByConditions(value, selected, dispatch) {
        axios.get(`${url}/orders/condition`, {
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
        axios.get(`${url}/employees/onWork`, {
            headers: {"Authorization": window.localStorage.token}
        }).then((response) => {
            dispatch(assignParkingboy(response.data));
        }).catch(function (error) {
            console.log(error);
        })
    },
    qiangdan(dispatch, orderId, boyId) {
        axios
            .put(
                `${url}/orders/${orderId}/parkingBoy/${boyId}`,
                {
                    headers: {"Authorization": window.localStorage.token},
                }
            )
            .then(response => {
                console.log(response);
                const order = response.data;
                dispatch(scramble(order));
                this.init(dispatch)
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    init(dispatch) {
        this.updateServerData(dispatch, window.localStorage.token)
    }
};

export default ordersApi;