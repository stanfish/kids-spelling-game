import React from 'react';
import { Grid, Button } from '@material-ui/core';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './HomePage';
import StudyPage from './StudyPage';
import SettingPage from './SettingPage';

function MenuPage() {
    return <Router>
        <>
            <Switch>
                <Route path="/play">
                    <HomePage />
                </Route>
                <Route path="/study">
                    <StudyPage />
                </Route>
                <Route path="/setting">
                    <SettingPage />
                </Route>
                <Route path="/">
                    <>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            style={{paddingTop: '200px'}}
                            spacing={3}
                        >
                            <Grid item xs={12}>
                                <Link to="/play">
                                    <Button variant="contained" color="primary" size="large" style={{fontSize: '50px'}}>
                                        Play
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Link to="/study">
                                    <Button variant="contained" color="primary" size="large" style={{fontSize: '50px'}}>
                                        Study
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Link to="/setting">
                                    <Button variant="contained" color="primary" size="large" style={{fontSize: '50px'}}>
                                        Setting
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </>
                </Route>
            </Switch>
        </>
    </Router>;
}

export default MenuPage;
