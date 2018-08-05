import {connect} from 'react-redux'
import ParkingBoys from "../components/Parkingboys";
import ParkingBoysApi from "../API/ParkingBoysApi"
import EmployeesApi from "../API/EmployeesApi";

const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        parkingBoys:state.parkingBoys,
        parkingLots:state.parkingLots
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        selectedParkingBoysByValue:(value, selected)=>{
            ParkingBoysApi.findParkingBoysByConditions(value,selected,dispatch);
        },
        showLeft:()=>{
            ParkingBoysApi.requestUndistributedParkingLots(dispatch);
        },
        frozenOrUnfrozen:(userId,aliveStatus,finish)=>{
            EmployeesApi.frozenOrUnfrozen(userId,aliveStatus,finish,dispatch)
        },
        confirm:(userId,user,finish)=>{
            EmployeesApi.editEmploy(userId,user,finish,dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ParkingBoys)