import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Footer = ({ sketches }) => {
    return(
        <Router>
            <ListGroup horizontal>
                {sketches.map((item) => (
                    <ListGroup.Item action href={item.slug} key={item.file} >{item.title}</ListGroup.Item>
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