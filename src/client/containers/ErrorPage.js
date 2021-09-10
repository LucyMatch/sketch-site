import { connect } from 'react-redux'
import Error from '../components/Error'

const getErrors = () => {
    let e = []
    // if(cart_err && cart_err.shipping_data)e.push('Error fetching Shipping Countries from Shopify : ' + JSON.stringify(cart_err.shipping_data))
    return e
}

const mapStateToProps = (state) => ({
    errors : getErrors(state.app.errors)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onReload: () => {
        ownProps.history.push("/")
        window.location.reload(true);
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Error)