import { connect } from 'react-redux'
import Sketch from '../components/Sketch'

const getSketch = (sketches, p) => {
    var s = {}
    Object.entries(sketches).map(([key, value]) => {
        if( key == p.match.params.id) s = value
    })
    return s
}

const mapStateToProps = (state, ownProps) => ({
    s: getSketch(state.app.sketches, ownProps)
})

export default connect(mapStateToProps)(Sketch)