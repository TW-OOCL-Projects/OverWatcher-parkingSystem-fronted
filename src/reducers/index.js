export default  (state={employees:[],parkingLots:[],parkingBoys:[],parkingLotDetails:[]}, action) => {
    switch (action.type) {
        case 'INITEMPLOYEE': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.employees = [...action.employeesObject];
            return newState
        }
        case 'INITPARKINGLOT': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingLots = [...action.parkingLotsObject];
            return newState
        }
        case 'INITPARKINGBOY': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingBoys = [...action.parkingBoysObject];
            return newState
        }
        case 'INITPARKINGLOTDETAIL': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingLotDetails = [...action.parkingLotDetailsObject];
            return newState
        }
        default:
            return state
    }
}

