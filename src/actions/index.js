const initEmployee = (employeesObject) => {
    return {type: 'INITEMPLOYEE', employeesObject}
};
const initParkingLot = (parkingLotsObject) => {
    return {type: 'INITPARKINGLOT', parkingLotsObject}
};
const initParkingBoy = (parkingBoysObject) => {
    return {type: 'INITPARKINGBOY', parkingBoysObject}
};

const initParkingLotDetail = (parkingLotDetailsObject) => {
    return {type: 'INITPARKINGLOTDETAIL', parkingLotDetailsObject}
};

const initOrderApi = (orderObject) => {
    return {type: 'INITORDER', orderObject}
};

const searchOrdersByCondition = (orderObject) => {
    return {type: 'SELECT_ORDERS_BY_CONDITION', orderObject}
};

const searchEmployeesByCondition = (employeesObject) => {
    return {type: 'SELECT_EMPLOYEES_BY_CONDITION', employeesObject}
};

const searchParkingLotsByCondition = (parkingLotsObject) => {
    return {type: 'SELECT_PARKINGLOTS_BY_CONDITION', parkingLotsObject}
};

const assignParkingboy = (boysObject) => {
    return {type: 'ASSIGN', boysObject}
};
const scramble=(orderObject)=>{
    return {type:'SCRAMBLE',orderObject}
};

const searchParkingBoysByCondition=(parkingBoysObject)=>{
    return {type:'SELECT_PARKINGBOYS_BY_CONDITION',parkingBoysObject}
};

const initDashBoardsParkingLot = (DashBoardsparkingLotsObject) => {
    return {type: 'INITDASHBOARDSPARKINGBOY', DashBoardsparkingLotsObject}
};
const addEmployee=(newEmployeeObject)=>{
    return{type:'ADD_EMPLOYEE',newEmployeeObject}
};
const alterParkinglotstatus=(id,status)=>{
    return{type:'UPDATE_PARKINGLOT',id,status}
};
export {initEmployee, initParkingLot, initParkingBoy, initParkingLotDetail,
    initOrderApi, searchOrdersByCondition,searchEmployeesByCondition,
    initDashBoardsParkingLot,searchParkingLotsByCondition,
    assignParkingboy,
    scramble,
    searchParkingBoysByCondition,
    addEmployee,alterParkinglotstatus
};

