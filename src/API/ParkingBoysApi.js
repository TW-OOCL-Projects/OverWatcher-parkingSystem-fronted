import {initParkingBoy,searchParkingBoysByCondition} from "../actions";
import axios from "axios";

let url = `http://localhost:9090/parkingBoys`;
const parkingBoysApi = {

    parkingBoys: [],
    updateServerData(dispatch, token) {
        axios.get(url, {
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
    },
    findParkingBoysByConditions(value,selected,dispatch){
        axios.get(url+"/condition", {
            headers: {"Authorization": window.localStorage.token},
            params:{
                condition:selected,
                value:value
            }
        }).then((response) => {
            dispatch(searchParkingBoysByCondition(response.data));
        }).catch(function (error) {
            console.log(error);
        })
    }
};

export default parkingBoysApi;