const initEmployee = (employeesObject) => {
    return { type: 'INITEMPLOYEE', employeesObject}
};
const initParkingLot = (parkingLotsObject) => {
    return { type: 'INITPARKINGLOT', parkingLotsObject}
};
const initParkingBoy = (parkingBoysObject) => {
    return { type: 'INITPARKINGBOY', parkingBoysObject}
};

const initParkingLotDetail = (parkingLotDetailsObject) => {
    return { type: 'INITPARKINGLOTDETAIL', parkingLotDetailsObject}
};

export {initEmployee,initParkingLot,initParkingBoy,initParkingLotDetail};