import {
    initParkingBoy,
    searchParkingBoysByCondition,
    undistributedParkingLotsAction,
    changeParkingLotOwner
} from "../actions";
import axios from "axios";

// let url = `https://over-back.herokuapp.com`;
let url = `http://localhost:9090`;
const parkingBoysApi = {

    parkingBoys: [],
    updateServerData(dispatch, token) {
        axios.get(`${url}/parkingBoys`, {
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
    findParkingBoysByConditions(value, selected, dispatch) {
        axios.get(url + "/parkingBoys/condition", {
            headers: {"Authorization": window.localStorage.token},
            params: {
                condition: selected,
                value: value
            }
        }).then((response) => {
            dispatch(searchParkingBoysByCondition(response.data));
        }).catch(function (error) {
            console.log(error);
        })
    },
    requestUndistributedParkingLots(dispatch) {
        axios.get(`${url}/parkingLots/nonOwner`, {
            headers: {"Authorization": window.localStorage.token},
        }).then((response) => {
            console.log("未分配的停车场\n-------------------")
            console.log(response)
            const undistributedParkingLots = response.data
            dispatch(undistributedParkingLotsAction(undistributedParkingLots));
        }).catch(function (error) {
            console.log(error);
        })
    },
    changeParkingLotsOwner(dispatch, direction, moveId, userId) {
        console.log(direction + "-------" + moveId + "-------" + userId + "-------")

        axios({
            method: 'put',
            url:  `${url}/employees/changeParkingLotOwner`,
            data: {
                direction: direction,
                parkingLotId: moveId,
                userId: userId
            },
            headers: {"Authorization": window.localStorage.token, "Content-Type": "application/json"},
        }).then((response) => {
            console.log("========= b ==============");
            console.log(response);
            dispatch(changeParkingLotOwner(response.data));
        }).catch(function (error) {
            console.log(error);
        });
    }
};

export default parkingBoysApi;