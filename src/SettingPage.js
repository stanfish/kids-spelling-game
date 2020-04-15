import React, { Component } from 'react';
import copy from 'clipboard-copy';
import { Grid, Button, Paper, Fab, Modal, TextField } from '@material-ui/core';
import EditableLabel from 'react-inline-editing';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

import { getGameData, resetDefaultData, removeWord, updateWord, updateURL, addURL, addNewWord, importData } from './data';
import { getImageUrl } from './util';
import firebase from './firebase.js';

const CODE_LENGTH = 5;
const CODE_CHARACTERS = 'ABCDEFGHIJKLMNPQRSTUVWXYZ23456789';

class SettingPage extends Component {
    constructor(props) {
        super(props);
        this.resetDefaultData = this.resetDefaultData.bind(this);
        this.deleteWord = this.deleteWord.bind(this);
    }

    state={
        data: getGameData(),
        activeWordUrl: -1,
        isModalOpen: false,
        isCodeModalOpen: false,
        copyButtonDisabled: false,
        code: '',
        copyButtonText: 'Export To Clipboard',
    }

    deleteWord(i) {
        removeWord(i);
        this.setState({data: getGameData()});
    }

    resetDefaultData() {
        resetDefaultData();
        this.setState({data: getGameData()});
    }

    handleWordFocus(e, i) {}

    handleWordFocusOut(e, i) {
        updateWord(i, e);
        this.setState({data: getGameData()});
    }

    handleURLFocus(e,i) {
    }

    handleURLFocusOut(e, i, j) {
        updateURL(i, j, e);
        this.setState({data: getGameData()});
    }

    addUrlClick(i) {
        this.setState({activeWordUrl: i});
        setTimeout(function(){
            const newURLInput = document.getElementById('new_url_input');
            if (newURLInput) {
                newURLInput.focus();
            }
        },500);
    }

    handleAddURL(e, i) {
        addURL(i, e.currentTarget.value);
        this.setState({data: getGameData(), activeWordUrl: -1});
    }

    openAddNewWordModal() {
        this.setState({isModalOpen: true});
        setTimeout(function(){
            const newWordInput = document.getElementById('new_word_input');
            if (newWordInput) {
                newWordInput.focus();
            }
        },500)
    }

    handleAddNewWord() {
        const newWordInput = document.getElementById('new_word_input');
        addNewWord(newWordInput.value);
        this.setState({data: getGameData()});
        this.handleCloseModal();
    }

    handleCloseModal() {
        this.setState({isModalOpen: false});
    }

    copyDataToClipboard() {
        const copyText = JSON.stringify(this.state.data);
        copy(copyText);
        this.setState({copyButtonDisabled: true, copyButtonText: 'Copied'});
        setTimeout(()=>{
            this.setState({copyButtonDisabled: false, copyButtonText: 'Export To Clipboard'});
        }, 3000);
    }

    handleImport() {
        const importText = document.getElementById('importText').value;
        importData(importText);
        this.setState({data: getGameData()});
    }

    generateRandomCode() {
        let result = '';
        for ( let i = 0; i < CODE_LENGTH; i++ ) {
           result += CODE_CHARACTERS.charAt(Math.floor(Math.random() * CODE_CHARACTERS.length));
        }
        return result;
    }

    handleSave = ()=> {
        const code = this.generateRandomCode()
        this.setState({isCodeModalOpen: true, code});
        firebase.firestore().collection("codes").add(
            {
                code,
                data: this.state.data,
            }
        );
    }

    handleCloseCodeModal = () => {
        this.setState({isCodeModalOpen: false});
    }

    handleLoad = () => {
        const loadCode = document.getElementById('loadCode').value;
        firebase.firestore().collection("codes").where('code','==',loadCode).onSnapshot(snapshot => {
            if (snapshot.docs[0] && snapshot.docs[0].data) {
                let data = JSON.stringify(snapshot.docs[0].data().data);
                importData(data);
                this.setState({data: getGameData()});
            }
        });
    }

    render() {
        const listItems = this.state.data.map((eachItem, i) => {
            const urls = eachItem.url;
            return (
                <Grid item xs key={'grid_'+i}>
                    <Paper style={{width:'300px', textAlign: 'center'}} >
                        <div style={{ position: 'absolute', paddingLeft: '250px', textAlign: 'right'}}>
                            <Button color="primary" size="small" onClick={() => this.deleteWord(i)}>
                                X
                            </Button>
                        </div>

                        <div style={{padding: '20px', fontSize: '50px', lineHeight: '50px'}}>
                            <EditableLabel text={eachItem.word.toUpperCase()}
                                key={'word_'+i+'_'+eachItem.word}
                                inputWidth='250px'
                                inputHeight='50px'
                                inputMaxLength={50}
                                onFocus={(e) => this.handleWordFocus(e, i)}
                                onFocusOut={(e) => this.handleWordFocusOut(e, i)}
                            />
                        </div>
                            {
                                urls.map((eachImage, j) =>
                                    <div key={'image_'+i+'_'+j} style={{margin: '5px', padding:'2px', border: '1px solid #cccccc'}}>
                                        <img style={{marginRight: '5px'}} key={eachItem.word+'_image_'+i+j} alt={eachItem.word} src={getImageUrl(eachImage)} width="30"  />
                                        <div style={{display: 'inline-block', width: '245px'}}>
                                            <EditableLabel
                                                text={eachImage}
                                                key={'image_'+i+'_'+j+'_'+eachImage}
                                                inputWidth='270px'
                                                inputHeight='20px'
                                                inputMaxLength={120}
                                                onFocus={(e) => this.handleURLFocus(e, i)}
                                                onFocusOut={(e) => this.handleURLFocusOut(e, i, j)}
                                            />
                                        </div>
                                    </div>
                                )
                            }

                        <div style={{padding: '15px 0'}}>
                            {
                                this.state.activeWordUrl === i
                                ?
                                    <input id='new_url_input' style={{width: '250px'}} onBlur={(e) => this.handleAddURL(e, i)}/>
                                :
                                    <Button variant="contained" color="primary" size="medium" onClick={() => this.addUrlClick(i)}>
                                        Add image
                                    </Button>
                            }
                        </div>
                    </Paper>
                </Grid>
            );
        });

        return <>
            <Modal open={this.state.isModalOpen} onClose={() => this.handleCloseModal()}>
                <Paper style={{position: 'fixed', top: '180px', left: '50%', transform: 'translate(-50%, -50%)', padding: '30px'}}>
                    <div style={{fontSize: '30px', lineHeight: '30px', paddingBottom: '10px'}}>
                        Add a word
                    </div>

                    <div>
                        <input id='new_word_input' style={{width: '250px'}} />
                    </div>
                    <div style={{padding: '15px 0', textAlign: 'center'}}>
                        <Button variant="contained" color="primary" size="medium" onClick={() => this.handleAddNewWord()}>
                            Add
                        </Button>
                    </div>
                </Paper>
            </Modal>

            <Modal open={this.state.isCodeModalOpen} onClose={this.handleCloseCodeModal}>
                <Paper style={{position: 'fixed', top: '180px', left: '50%', transform: 'translate(-50%, -50%)', padding: '30px'}}>
                    <div style={{fontSize: '30px', lineHeight: '30px', paddingBottom: '10px'}}>
                        Code: {this.state.code}
                    </div>
                    <div>
                        (Data was saved to cloud. Use the above code to retrive your data.)
                    </div>
                </Paper>
            </Modal>

            <span style={{position: 'absolute', top: '0', zIndex: 3, display: 'flex'}}>
                <div>
                    <Button variant="contained" color="secondary" size="small" onClick={this.resetDefaultData}>
                        Reset to default
                    </Button>
                </div>

                <div style={{paddingLeft: '35px', paddingRight: '15px'}}>
                    <Button variant="contained" color="primary" size="small" onClick={this.handleSave}>
                        Save
                    </Button>
                </div>

                <div style={{paddingLeft: '15px', paddingRight: '25px'}}>
                    <TextField
                        placeholder="Code"
                        id="loadCode"
                        size="small"
                        style={{ width: '50px'}}
                    />
                    <Button variant="contained" color="secondary" size="small" onClick={this.handleLoad} >
                        Load
                    </Button>
                </div>
            </span>

            <div style={{textAlign: 'center', position: 'sticky', top: '0', zIndex: '2'}}>
                <Link to="/">
                    <Button variant="contained" color="primary" size="large" >
                        Back to Menu
                    </Button>
                </Link>
            </div>

            <div style={{right: '0', position: 'absolute', top: '0', zIndex: '2', display: 'flex'}}>
                <div>
                    <Button disabled={this.state.copyButtonDisabled} id="copyButton" variant="contained" color="primary" size="small" onClick={() => this.copyDataToClipboard()}>
                        {this.state.copyButtonText}
                    </Button>
                </div>
                <div style={{paddingLeft: '35px', paddingRight: '5px'}}>
                    <TextField
                        placeholder="Place import data here"
                        id="importText"
                        multiline
                        rows={2}
                        rowsMax={2}
                        size="small"
                        style={{ width: '100px'}}
                    />
                </div>
                <div>
                    <Button variant="contained" color="secondary" size="small" onClick={()=>this.handleImport()} >
                        Import
                    </Button>
                </div>
            </div>

            <Fab color="secondary" aria-label="add" style={{zIndex: 4, position: 'fixed', bottom: '50px', right: '50px'}} onClick={() => this.openAddNewWordModal()}>
                <AddIcon />
            </Fab>

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

export default SettingPage;
