import { connect } from 'react-redux'
import App from '../../components/App'
import { getSketches } from '../../actions'

const mapStateToProps = (state) => ({
    error: state.app.error ? state.app.error : undefined
 })

const mapDispatchToProps = (dispatch) => ({
    getSketches : () => { 
        dispatch(getSketches()) 
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)