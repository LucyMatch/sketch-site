import React, { useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import ScriptTag from 'react-script-tag'
import { useParams } from 'react-router-dom';

//@TODO: retrieves sketch id from router 
//       uses that to load teh correct script



const Sketch = ({sketches}) => {
    return(
        <Container className="page-container sketch">
            <ScriptTag type='text/javascript' src='../sketches-test/test.js' />
        </Container>
    )
}

export default Sketch