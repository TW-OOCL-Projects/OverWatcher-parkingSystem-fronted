import {connect} from 'react-redux'
import Employees from "../components/Employees";
import EmployeesApi from "../API/EmployeesApi"


const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        Employees:state.employees
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        selectedEmployeeByValue: (value,selected) => {
            EmployeesApi.findEmployeesByConditions(value,selected,dispatch);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees)