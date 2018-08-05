import {initDashBoardsParkingLot} from "../actions";
import axios from "axios";

// let url = `https://over-back.herokuapp.com`;
let url = `http://localhost:9090`;
const DashBoardsApi = {

    parkingLots: [],
    updateServerData(dispatch, token) {
        axios.get(`${url}/parkingLots/statistical`, {
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