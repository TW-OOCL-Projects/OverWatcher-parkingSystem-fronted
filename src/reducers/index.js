export default  (state={employees:[],parkingLots:[],DashBoardsparkingLots:[],parkingBoys:[],orders:[],boys:[],newEmployees:[],newParkingLots:[],ownParkingLots:[],}, action) => {
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
        case 'ADD_PARKINGLOT': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.newParkingLots = [...action.newParkingLotObject];
            return newState
        }
        case 'UPDATE_PARKINGLOT': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingLots.forEach(parkingLot=>{
                if(parkingLot.id === action.id)
                    parkingLot.status=action.status
                });
            return newState
        }
        case 'FROZEN_OR_ACTIVED': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.employees.forEach(employee=>{
                    if(employee.id == action.id)
                        employee.alive=action.aliveStatus
                }
            )
            newState.parkingBoys.forEach(boy=>{
                    if(boy.id == action.id)
                        boy.alive=action.aliveStatus
                }
            )
            return newState
        }
        case 'CHANGE_PARKINGLOT_UNDISTRIBUTED': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingLots = [...action.undistributedParkingLots];
            console.log("reducer--------------\n");
            return newState
        }
        case 'SELECT_PARKINGLOT_UNDISTRIBUTED': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.undistributedParkingLots = [...action.undistributedParkingLots];
            console.log("reducer--------------\n");
            return newState
        }

        case 'EDIT_EMPLOYEE': {
            let newState = JSON.parse(JSON.stringify(state));
            console.log("=== 前端渲染前 ===")
            console.log(action.employee)
            const newEmployees=newState.employees.map(e=>{
                    if(e.id == action.employee.id){
                        action.employee.role=action.employee.roleList[0]
                        console.log("=== 前端渲染后 ===")

                        return action.employee

                    }else {
                        return e;
                    }

                }
            )
            newState.employees=newEmployees.map(employee=>{
                switch (employee.role) {
                    case "employee":employee.role="员工";break;
                    case "manager":employee.role="经理";break;
                    case "admin":employee.role="管理员";break;
                }
                return employee
            })
            console.log(newState)
            return newState
        }
        default:
            return state
    }
}

