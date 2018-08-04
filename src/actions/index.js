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


export {initEmployee, initParkingLot,
    initParkingBoy, initParkingLotDetail,
    initOrderApi, searchOrdersByCondition,
    searchEmployeesByCondition,assignParkingboy,
    scramble,searchParkingLotsByCondition,
    searchParkingBoysByCondition
    };