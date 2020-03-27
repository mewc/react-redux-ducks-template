import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import './Home.css';
import { appLoading } from '../../../state/ducks/app/operations';

const Home = (props) => {
    const { loading } = props;
    const WrapperClass = cx({
        'wrapper': true
    })

    return (
        <div className={WrapperClass}>
            {(Object.keys(loading).length > 1) ? '...loading' : 'Home'}
        </div >
    );
}

function mapStateToProps(state, ownProps) {
    return {
        loading: state.app.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        appLoading: (promise) => { dispatch(appLoading(promise)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);


