import {initParkingBoy} from "../actions";
import axios from "axios";

const parkingBoysApi = {

    parkingBoys: [],
    updateServerData(dispatch, token) {
        axios.get(`http://localhost:9090/parkingBoys`, {
            headers: {"Authorization": token}
        }).then((response) => {
            console.log(response.data);
            dispatch(initParkingBoy(response.data));

        })
            .catch(function (error) {
                console.log(error);
            })
    },
    init(dispatch) {
        this.updateServerData(dispatch, window.localStorage.token)
    }
};

export default parkingBoysApi;