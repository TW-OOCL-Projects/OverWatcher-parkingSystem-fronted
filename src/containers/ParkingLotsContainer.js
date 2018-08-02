import {connect} from 'react-redux'
import Parkinglots from "../components/Parkinglots";


const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        Parkinglots:state.parkingLots
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(Parkinglots)