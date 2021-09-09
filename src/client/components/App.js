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
import SimpleSketch from './sketches/SimpleSketch'


// //so we can add css transitions to switch pages
const AnimatedSwitch = withRouter(({ location }) => (
	<TransitionGroup>
		<CSSTransition key={location.key} classNames="page" timeout={1000}>
			<Switch location={location}>
                
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
				<Route exact path="/error" component={ErrorPage}>
				</Route> */}
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
				{/* nav to go here */}
			</div>
		)
	}
}

App.propTypes = {

}

export default App