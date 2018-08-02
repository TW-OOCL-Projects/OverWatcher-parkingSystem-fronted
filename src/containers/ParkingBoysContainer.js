import {connect} from 'react-redux'
import ParkingBoys from "../components/Parkingboys";

const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        parkingBoys:state.parkingBoys
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(ParkingBoys)