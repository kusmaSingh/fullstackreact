import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions'  //  '*' means we will import all the actions and assign as object name actions
import Header from './Header';
import Landing from './Leading'
//static component
const Dashboard = () => <h2>Dashboard</h2>
const Survey = () => <h2>Survey</h2>



class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact={true} path="/" component={Landing}/>
                        <Route exact={true} path="/surveys" component={Dashboard}/>
                        <Route path="/surveys/new" component={Survey}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);