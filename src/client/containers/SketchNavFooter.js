import { connect } from 'react-redux'
import Footer from '../components/Footer'

const getSketches = (state) =>{
    var s = {}
    state.app.sketchKeys.forEach( (id) =>{
        if(state.app.sketches[id].active)
            s[id] = (state.app.sketches[id])
    })
    return s
}

const mapStateToProps = (state) => ({
    sketches : getSketches(state)
 })

const mapDispatchToProps = (dispatch) => ({
    onClick : ( h , i) => {
        h.push( '/sketch/' + i.id )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)