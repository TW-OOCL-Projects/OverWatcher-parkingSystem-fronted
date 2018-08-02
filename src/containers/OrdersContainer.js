import {connect} from 'react-redux'
import Orders from "../components/Orders";

const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        orders:state.orders
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders)