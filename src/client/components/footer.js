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
                {sketches.map((item) => (
                    <ListGroup.Item action onClick={() => onClick(history, item)} key={item.id} >{item.title}</ListGroup.Item>
			    ))}
            </ListGroup>
        </Router>
    )
}

Footer.propTypes = {
    sketches : PropTypes.array.isRequired,
    onClick : PropTypes.func.isRequired
}

export default Footer