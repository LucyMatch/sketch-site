import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	withRouter,
	BrowserRouter
} from "react-router-dom"
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import ErrorPage from '../containers/ErrorPage'
import SketchNavFooter from '../containers/SketchNavFooter'
import Sketch from '../containers/SketchPage'

// //so we can add css transitions to switch pages
const AnimatedSwitch = withRouter(({ location }) => (
	<TransitionGroup>
		{/* @TODO: write sass for transition */}
		<CSSTransition key={location.key} classNames="page" timeout={1000}>
			<Switch location={location}>

				{/* <Route exact path="/" render={() => (<Redirect to="/a" />)} /> */}
				{/* <Route exact path="/" render={(props) => <HomePage {...props} />} /> */}

				<Route path="/sketch/:id" component={Sketch}></Route>

				<Route exact path="/error" component={ErrorPage}>
				</Route> 
			</Switch>
		</CSSTransition>
	</TransitionGroup>
))


class App extends Component {
	constructor(props) {
		super(props)
		this.router = React.createRef()
	}

	componentDidMount() {
		const { getSketches} = this.props
		getSketches()
	}

	componentDidUpdate(){
		//this is triggering too often for my likes
		//we need to look at this
		// if(this.props.error){
		// 	console.log('FATAL ERROR', this.props.error)
		// 	this.router.current.history.push("/error")
		// }	
	}

	render() {
		const {} = this.props
		return (
			<div>
				<BrowserRouter ref={this.router}>
					<AnimatedSwitch/>
					<SketchNavFooter/>
				</BrowserRouter>
			</div>
		)
	}
}

App.propTypes = {

}

export default App