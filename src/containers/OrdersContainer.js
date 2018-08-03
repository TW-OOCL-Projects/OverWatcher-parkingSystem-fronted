import {connect} from 'react-redux'
import Orders from "../components/Orders";
import Parkingboys from "../components/Parkingboys";
import orderApi from "../API/orderApi"

const mapStateToProps = (state, ownProps) => {
    return {
        value: state[ownProps.index],
        orders: state.orders,
        list:state.boys
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectedByValue: (value,selected) => {
            orderApi.findOrdersByConditions(value,selected,dispatch);
        },
        handle:(id)=>{
            orderApi.assigned(id,dispatch);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders,Parkingboys)