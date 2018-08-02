import {initOrderApi} from "../actions";
import axios from "axios";

const ordersApi = {

    parkingBoys: [],
    updateServerData(dispatch, token) {
        axios.get(`http://localhost:9090/orders`, {
            headers: {"Authorization": token}
        }).then((response) => {
            console.log(response.data);
            dispatch(initOrderApi(response.data));

        })
            .catch(function (error) {
                console.log(error);
            })
    },
    init(dispatch) {
        this.updateServerData(dispatch, window.localStorage.token)
    }
};

export default ordersApi;