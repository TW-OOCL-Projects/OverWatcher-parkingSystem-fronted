import {initParkingLot} from "../actions";
import axios from "axios";

const parkingLotsApi = {

    parkingLots: [],
    updateServerData(dispatch, token) {
        axios.get(`http://localhost:9090/parkingLots`, {
            headers: {"Authorization": token}
        }).then((response) => {
            console.log(response.data);
            dispatch(initParkingLot(response.data));

        })
            .catch(function (error) {
                console.log(error);
            })
    },
    init(dispatch) {
        this.updateServerData(dispatch, window.localStorage.token)
    }
};

export default parkingLotsApi;