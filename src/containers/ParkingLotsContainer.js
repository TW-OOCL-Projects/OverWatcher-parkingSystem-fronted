import {connect} from 'react-redux'
import Parkinglots from "../components/Parkinglots";
import ParkingLotsApi from "../API/ParkingLotsApi";


const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        Parkinglots:state.parkingLots
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        selectedParkingLotsByValue:(value,selected)=>{
            ParkingLotsApi.findParkingLotsByConditions(value,selected,dispatch);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Parkinglots)
