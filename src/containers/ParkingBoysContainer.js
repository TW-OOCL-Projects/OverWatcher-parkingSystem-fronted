import {connect} from 'react-redux'
import ParkingBoys from "../components/Parkingboys";
import ParkingBoysApi from "../API/ParkingBoysApi"

const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        parkingBoys:state.parkingBoys
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        selectedParkingBoysByValue:(value, selected)=>{
            ParkingBoysApi.findParkingBoysByConditions(value,selected,dispatch);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ParkingBoys)