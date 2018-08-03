import {initDashBoardsParkingLot} from "../actions";
import axios from "axios";

const DashBoardsApi = {

    parkingLots: [],
    updateServerData(dispatch, token) {
        axios.get(`http://localhost:9090/parkingLots/statistical`, {
            headers: {"Authorization": token}
        }).then((response) => {
            console.log(response.data);
            dispatch(initDashBoardsParkingLot(response.data));

        })
            .catch(function (error) {
                console.log(error);
            })
    },
    init(dispatch) {
        this.updateServerData(dispatch, window.localStorage.token)
    }
};

export default DashBoardsApi;