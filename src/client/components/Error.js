import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Error = ({ errors, onReload, history }) => {
    return(
        <Container className="page-container error page">
            <Row className="header">
            </Row>
            <Row className="page-body">
                <Col md={12}>
                    <Row>
                        <Col md={6}>
                            <h2 className="secondary-title">ERROR : </h2>
                            {errors.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

Error.PropTypes = {

}

export default Error