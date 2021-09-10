import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = (state) => ({
    sketches : state.app.sketches
 })

const mapDispatchToProps = (dispatch) => ({
    onClick : () => { 
        /* not doing anything yet here */
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)