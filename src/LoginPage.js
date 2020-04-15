import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { auth, googleProvider, facebookProvider } from './firebase.js';
import { setUser } from './actions';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import {withStyles} from '@material-ui/styles';
import { Button as SButton, Icon as SIcon } from 'semantic-ui-react';

const styles = () => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
    },
    textField: {
        width: 300
    },
    submit: {
        margin: 'auto',
    }
});

class LoginPage extends Component {

    state = {
        email: '',
        password: '',
        error: '',
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    login = e => {

        let loginProvider = (e.target.id === 'googleLogin'
            ? googleProvider
            : (e.target.id === 'facebookLogin' ? facebookProvider : '')
        );

        if (loginProvider) {
            auth.signInWithPopup(loginProvider)
                .then((result) => {
                    setUser(result.user);
                    this.redirect();
                })
                .catch(error => {
                    var errorMessage = error.message;
                    this.setState({errorMessage});
                });
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((result) => {
                setUser(result.user);
                this.redirect();
            })
            .catch(error => {
                var errorMessage = error.message;
                this.setState({errorMessage});
            });
    }

    redirect = () => {
        window.location.href = '/';
    }

    keyPress = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.handleSubmit(e);
        }
    }

    render() {
        const {classes, user} = this.props;
        if (user) {
            this.redirect();
            return null;
        }

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        LOGIN
                    </Typography>
                    <TextField
                        id="email"
                        type="email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        id="password"
                        type="password"
                        label="Password"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                        onKeyPress={this.keyPress}
                    />
                    <br/>
                    {
                        this.state.error && (
                            <Typography component="p" color="error">
                                <Icon color="error" className={classes.error}>error</Icon>
                                {this.state.error}
                            </Typography>
                        )
                    }
                </CardContent>
                <CardActions>
                    <Button color="primary" className={classes.submit} onClick={this.handleSubmit} >Submit</Button>
                </CardActions>
                <CardActions>
                    <SButton color="google plus" id="googleLogin" onClick={this.login}>
                        <SIcon name='google' />Log in with Google
                    </SButton>
                    <SButton color="facebook" id="facebookLogin" onClick={this.login}>
                        <SIcon name='facebook' />Log in with Facebook
                    </SButton>
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};


const mapDispatchToProps = {
    setUser,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(LoginPage));
