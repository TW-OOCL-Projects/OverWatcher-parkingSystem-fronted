import {connect} from 'react-redux'
import NewParkingLot from "../components/NewParkingLot";
import parkingLotsApi from '../API/ParkingLotsApi'

const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        newParkingLots:state.newParkingLots
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        createEmployee:(values)=>{
            parkingLotsApi.addNewParkingLot(values,dispatch)
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewParkingLot)