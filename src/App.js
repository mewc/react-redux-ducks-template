import React from 'react';
import { connect } from 'react-redux';
import Router from './Router';
import { appLoading } from './state/ducks/app/operations';
import { SCOPES } from './assets/strings/constants';

function App(props) {
    const { loading } = props.loading;
    return (
        <div className="App">
            {(loading)}
            <Router />
        </div >
    );
}

function mapStateToProps(state, ownProps) {
    return {
        loading: (state.app.loading[SCOPES.APP] !== null)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        appLoading: (promise) => { dispatch(appLoading(promise)) }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
