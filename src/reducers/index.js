export default  (state={employees:[]}, action) => {
    console.log(action)
    switch (action.type) {
        case 'INIT': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.employees = [...action.employeesObject];
            console.log(newState.employees)
            return newState
        }
        default:
            return state
    }
}

