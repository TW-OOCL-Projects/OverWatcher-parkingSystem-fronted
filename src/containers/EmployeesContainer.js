import {connect} from 'react-redux'
import Employees from "../components/Employees";
import EmployeesApi from "../API/EmployeesApi"


const mapStateToProps = (state, ownProps) => {
    return {
        Employees: state.employees
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectedEmployeeByValue: (value,selected) => {
            EmployeesApi.findEmployeesByConditions(value,selected,dispatch);
        },
        frozenOrUnfrozen:(userId,aliveStatus,finish)=>{
            EmployeesApi.frozenOrUnfrozen(userId,aliveStatus,finish,dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees)