import React, { useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
// import ScriptTag from 'react-script-tag'
import useScript from '../hooks/useScript';
import PropTypes from 'prop-types'

const Sketch = ({s}) => {

    if(Object.entries(s).length > 0 ){
        useScript('https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js');
        useScript('../sketches/'+ s.file +'.js');
    }

    return(
        <Container className="page-container sketch">
            { Object.entries(s).length > 0 ? (
                <div>
                    {/* if yes script found... */}
                </div>
            ) : (
                <h2 className="secondary-title">Unable To Locate Sketch</h2>
            ) }
            
        </Container>
    )
}

Sketch.propTypes = {
    s : PropTypes.object.isRequired
}

export default Sketch