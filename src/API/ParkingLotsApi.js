import {initParkingLot, searchParkingLotsByCondition, alterParkinglotstatus, addParkingLot} from "../actions";
import axios from "axios";
import {message} from "antd/lib/index";

// let url = `https://over-back.herokuapp.com`;
let url = `http://localhost:9090`;
const parkingLotsApi = {

    parkingLots: [],
    updateServerData(dispatch, token) {
        axios.get(`${url}/parkingLots`, {
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


    findParkingLotsByConditions(value, selected, dispatch) {
        axios.get(`${url}/parkingLots/condition`, {
            headers: {"Authorization": window.localStorage.token},
            params: {
                condition: selected,
                value: value
            }
        }).then((response) => {
            dispatch(searchParkingLotsByCondition(response.data));
        }).catch(function (error) {
            console.log(error);
        })
    },

    updateParkinglotstatus(parkinglotId, parkinglotStatus, dispatch) {
        axios.put(`${url}/parkingLots/status`, {
            id: parkinglotId,
            status: parkinglotStatus,
            headers: {"Authorization": window.localStorage.token},
        }).then((response) => {
            dispatch(alterParkinglotstatus(parkinglotId, parkinglotStatus));
        }).catch(function (error) {
            console.log(error);
        })
    },
    addNewParkingLot(values, dispatch) {
        axios
            .post(`${url}/parkingLots`, {
                name: values.name,
                size: values.size,
                initSize: values.size,
                status: "开放"
            })
            .then(res => {
                console.log(res);
                dispatch(addParkingLot(values));
                this.init(dispatch);
                message.success('停车场新建成功！', 2);

            })
            .catch(function (error) {
                console.log(error);
                message.error('停车场新建失败！', 2);
            });
    }
};

export default parkingLotsApi;