import {initOrderApi, searchOrdersByCondition,assignParkingboy,scramble} from "../actions";
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
    qiangdan(dispatch, orderId, boyId) {
        axios
            .put(
                `http://localhost:9090/orders/${orderId}/parkingBoy/${boyId}`,
                {
                    headers: {"Authorization": window.localStorage.token},
                }
            )
            .then(response => {
                console.log(
                    "点击一个订单进行抢单的请求结果\n----------------------"
                );
                console.log(response);
                const order = response.data;
                dispatch(scramble(order));
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