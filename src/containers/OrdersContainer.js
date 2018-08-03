import {connect} from 'react-redux'
import Orders from "../components/Orders";
import orderApi from "../API/orderApi"

const mapStateToProps = (state, ownProps) => {
    return {
        value: state[ownProps.index],
        orders: state.orders
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectedByValue: (value,selected) => {
            orderApi.findOrdersByConditions(value,selected,dispatch);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders)