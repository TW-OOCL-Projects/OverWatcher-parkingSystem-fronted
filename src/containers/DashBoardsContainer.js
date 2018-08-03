import {connect} from 'react-redux'
import DashBoard from "../components/Dashboards"


const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        DashBoardsparkingLots:state.DashBoardsparkingLots
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)