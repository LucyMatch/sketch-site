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

//@TODO: thing about a better way to dynamically render sketches
//		having their own slug is still desirable
//		but this method requires me to be manual here and use settings file to control
//		what i display - would be nicer to just use that data to control everything

//@TODO:
// have routing at /sketches/:id component
// the sketches component loads the p5 sketch dynaically

import SimpleSketch from './sketches/SimpleSketch'
import A from './sketches/A'

// //so we can add css transitions to switch pages
const AnimatedSwitch = withRouter(({ location }) => (
	<TransitionGroup>
		{/* @TODO: write sass for transition */}
		<CSSTransition key={location.key} classNames="page" timeout={1000}>
			<Switch location={location}>

				<Route exact path="/" render={() => (<Redirect to="/a" />)} />
				{/* <Route exact path="/" render={(props) => <HomePage {...props} />} /> */}

				{/* @TODO: sketches/:id - component for loading sketches! */}
				<Route exact path={"/a"} component={A}></Route>
				<Route exact path={"/simple-sketch"} component={SimpleSketch}></Route>

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
		if(this.props.error){
			console.log('FATAL ERROR', this.props.error)
			this.router.current.history.push("/error")
		}	
	}

	render() {
		const {} = this.props
		return (
			<div>
				<BrowserRouter ref={this.router}>
					<AnimatedSwitch/>
				</BrowserRouter>
				<SketchNavFooter />
			</div>
		)
	}
}

App.propTypes = {

}

export default App