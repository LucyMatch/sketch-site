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

//@TODO: how to import dynamically based off of sketch-list?
import SimpleSketch from './sketches/SimpleSketch'

import ErrorPage from '../containers/ErrorPage'
import SketchNavFooter from '../containers/SketchNavFooter'



// //so we can add css transitions to switch pages
const AnimatedSwitch = withRouter(({ location }) => (
	<TransitionGroup>
		{/* @TODO: write sass for transition */}
		<CSSTransition key={location.key} classNames="page" timeout={1000}>
			<Switch location={location}>
                
				{/* @TODO: dynamically populate based off sketch-list*/}
                <Route exact path="/simple-sketch" component={SimpleSketch}>
				</Route>

				{/* <Route exact path="/" render={(props) => <HomePage {...props} />} />
				<Route exact path="/cart" component={CartView}>
				</Route>
				<Route exact path="/form" component={ContactShippingView}>
				</Route>
				<Route exact path="/checkout" component={ConfirmationView}>
				</Route>
				<Route exact path="/thankyou" component={Thankyou}>
				</Route>
				*/}
				{/* @TODO: test this */}
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