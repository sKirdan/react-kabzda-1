 import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import {connect, Provider} from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";
 import {withSuspense} from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')) ;
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')) ;

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (


            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />

                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                        render={withSuspense(DialogsContainer)}/>

                    <Route path='/profile/:userId?'
                        render={withSuspense(ProfileContainer)}/>

                    <Route path='/login'
                        render={() => <Login />} />

                    <Route path='/news' component={() => <News />} />

                    <Route path='/users'
                        render={() => <UsersContainer />} />



                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props)=>{
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter >
}
export default SamuraiJSApp
