export default  (state={employees:[],parkingLots:[],DashBoardsparkingLots:[],parkingBoys:[],parkingLotDetails:[],orders:[],boys:[],newEmployees:[]}, action) => {
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
        case 'INITORDER': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.orders = [...action.orderObject];
            return newState
        }
        case 'SELECT_ORDERS_BY_CONDITION': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.orders = [...action.orderObject];
            return newState
        }
        case 'ASSIGN': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.boys = [...action.boysObject];
            return newState
        }
        case 'SELECT_EMPLOYEES_BY_CONDITION': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.employees = [...action.employeesObject];
            return newState
        }

        case 'SCRAMBLE': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.orders.forEach(order=>{
                if(order.id===action.orderObject.id){
                    order.status=action.orderObject.status
                }
            });
            return newState
        }
        case 'SELECT_PARKINGLOTS_BY_CONDITION': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingLots = [...action.parkingLotsObject];
            return newState
        }
        case 'SELECT_PARKINGBOYS_BY_CONDITION': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingBoys = [...action.parkingBoysObject];
            return newState
        }
        case 'INITDASHBOARDSPARKINGBOY': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.DashBoardsparkingLots = [...action.DashBoardsparkingLotsObject];
            return newState
        }
        case 'ADD_EMPLOYEE': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.newEmployees = [...action.newEmployeeObject];
            return newState
        }
        case 'UPDATE_PARKINGLOT': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingLots.forEach(parkingLot=>{
                if(parkingLot.id == action.id)
                    parkingLot.status=action.status
                }
            )
            return newState
        }
        default:
            return state
    }
}

