import {connect} from 'react-redux'
import Employees from "../components/Employees";
import {init} from "../actions";

const mapStateToProps = (state, ownProps) =>{
    console.log(state.employees)
    return {
        value: state[ownProps.index],
        Employees:state.employees
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)