import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = (state) => ({
    sketches : state.app.sketches.filter(s => s.active)
 })

const mapDispatchToProps = (dispatch) => ({
    onClick : ( h , i) => {
        h.push( '/sketch/' + i.id )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)