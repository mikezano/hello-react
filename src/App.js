import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'
import {Button} from './Button.tsx';

const helloWorld = () => (<div>Hello World!</div>)
const helloReact = () => (<div>Hello React!</div>)

export default ({ history }) => {
    return <div>
        <Router history={history}>
            <Switch>
                <Route path="/react" component={helloReact} />
                <Route path="/" component={helloWorld} />
            </Switch>
            <br />
            <Link to='/react'>Say hello to React!</Link>
            <br />
            <Link to='/'>Say hello to the World!</Link>
            <Button />
        </Router>
    </div>
}