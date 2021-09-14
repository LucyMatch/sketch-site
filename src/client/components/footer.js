import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup'
import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";

const Footer = ({ sketches, onClick }) => {
    let history = useHistory()

    return(
        <Router>
            <ListGroup horizontal>
                {Object.entries(sketches).map(([key, value]) => (
                    <ListGroup.Item action onClick={() => onClick(history, value)} key={key} >{value.title}</ListGroup.Item>
                ))}
            </ListGroup>
        </Router>
    )
}

Footer.propTypes = {
    sketches : PropTypes.object.isRequired,
    onClick : PropTypes.func.isRequired
}

export default Footer