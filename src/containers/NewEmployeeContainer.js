import {connect} from 'react-redux'
import NewEmployee from "../components/NewEmployee";
import employeesApi from '../API/EmployeesApi'

const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        newEmployees:state.newEmployees
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        createEmployee:(values)=>{
            employeesApi.addNewEmployee(values,dispatch)
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEmployee)