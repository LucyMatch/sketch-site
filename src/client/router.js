import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// assuming we could have each of these "page" components in a seperate component file
function Home() {
    return <h1>HOME</h1>
}

function About() {
    return <h1>About</h1>
}

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
                </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/about/" exact component={About} />
            </div>
        </Router>
    );
}

export default AppRouter;
