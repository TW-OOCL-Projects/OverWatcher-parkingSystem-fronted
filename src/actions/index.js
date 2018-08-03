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

export {initEmployee, initParkingLot, initParkingBoy, initParkingLotDetail, initOrderApi, searchOrdersByCondition};