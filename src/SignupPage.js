import React from 'react';
import { connect } from 'react-redux';

const SignupPage = props => {
    return (
        <h1>Signup </h1>
    );
}


const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = null;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupPage);
