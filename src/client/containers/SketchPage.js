import { connect } from 'react-redux'
import Sketch from '../components/Sketch'

const getSketch = (sketches, p) => {
    console.log(p);
}

const mapStateToProps = (state, ownProps) => ({
    sketch: getSketch(state.app.sketches, ownProps)
})

export default connect(mapStateToProps)(Sketch)