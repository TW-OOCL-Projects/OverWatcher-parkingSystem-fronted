import {initParkingLot, searchParkingLotsByCondition} from "../actions";
import axios from "axios";
let url = `http://localhost:9090/parkingLots`;
const parkingLotsApi = {

    parkingLots: [],
    updateServerData(dispatch, token) {
        axios.get(url, {
            headers: {"Authorization": token}
        }).then((response) => {
            console.log(response.data);
            dispatch(initParkingLot(response.data));

        }).catch(function (error) {
            console.log(error);
        })
    },
    init(dispatch) {
        this.updateServerData(dispatch, window.localStorage.token)
    },


    findParkingLotsByConditions(value,selected,dispatch){
        axios.get(url+"/condition", {
            headers: {"Authorization": window.localStorage.token},
            params:{
                condition:selected,
                value:value
            }
        }).then((response) => {
            dispatch(searchParkingLotsByCondition(response.data));
        }).catch(function (error) {
            console.log(error);
        })
    }
};

export default parkingLotsApi;