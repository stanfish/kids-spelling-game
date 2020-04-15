import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Paper } from '@material-ui/core';
import Slider from 'infinite-react-carousel';
import { Link } from 'react-router-dom';
import { getGameData } from './data';
import { liteShuffle, getImageUrl } from './util';

class StudyPage extends Component {

    render() {
        const listItems = liteShuffle(getGameData()).map((eachItem, i) => {
            const urls = liteShuffle(eachItem.url);
            return (
                <Grid item xs key={'word'+i}>
                    <Paper style={{width:'300px', textAlign: 'center'}} >
                        <Slider dots adaptiveHeight>
                            {
                                urls.map((eachImage, j) =>
                                    <img key={'image'+i+j} alt={eachItem.word} src={getImageUrl(eachImage)} width="200"  />
                                )
                            }
                        </Slider>
                        <div style={{padding: '20px', fontSize: '50px', lineHeight: '50px'}}>
                            {eachItem.word.toUpperCase()}
                        </div>
                    </Paper>
                </Grid>
            );
        });

        return <>
            <div style={{textAlign: 'center', position: 'sticky', top: '0', zIndex: '2'}}>
                <Link to="/">
                    <Button variant="contained" color="primary" size="large" >
                        Back to Menu
                    </Button>
                </Link>
            </div>
            <Grid
                container
                justify="center"
                alignItems="center"
                style={{paddingTop: '50px'}}
                spacing={3}
            >
                {listItems}
            </Grid>
        </>

    }
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
)(StudyPage);
