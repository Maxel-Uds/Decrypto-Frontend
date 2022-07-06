import React, { Component } from 'react';
import Axios from 'axios';
import Main from '../templates/Main';
import CodeForm from '../Forms/CodeForm';

const initialState = {
    editable: {
        pass: '',
        passConfirm: '',
        message: ''
    },
    messageId: '',
    codeMessage: '',
    disableButton: true
}

export default class Code extends Component {

    state = { ...initialState };

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.clearFields = this.clearFields.bind(this);
        this.codeMessage = this.codeMessage.bind(this);
    }

    clearFields(event) {
        document.getElementById("passConfirmInput").classList.add("is-invalid");
        this.setState({ ...initialState });
    }

    handleOnChange(event) {
        this.updateField(event);

        setTimeout(() => {
            this.fieldIsValid(this.confirmPass());
        }, 10);
    }

    updateField(event) {
        const editable =  { ...this.state.editable } ;
        editable[event.target.name] = event.target.value;
        this.setState({ editable });
    }

    confirmPass() {
        const passConfirmInput = document.getElementById("passConfirmInput");
        if(this.state.editable.pass !== this.state.editable.passConfirm || this.state.editable.passConfirm === '') {
            passConfirmInput.classList.add("is-invalid")
            return false;
        }
        else {
            passConfirmInput.classList.remove("is-invalid");
            passConfirmInput.classList.add("is-valid");
            return true;
        }
    }

    fieldIsValid(passIsEqual) {
        return (passIsEqual && this.state.editable.pass.length >= 5 && this.state.editable.message.length >= 20)? this.setState({ disableButton: false }) : this.setState({ disableButton: true });
    }

    async codeMessage() {
        await Axios.post('https://the-encryptor.herokuapp.com/encrypt/code', {
            message: this.state.editable.message,
            password: this.state.editable.pass
        })
        .then(resp => {
            this.setState({ messageId: resp.data.id, codeMessage: resp.data.message });
        });
    }

    render() {
        return (
            <Main title="Encode" subtitle="Transforme qualquer mensagem em um hash indecifrável!" icon="fa fa-lock">
                <CodeForm { ...this.state } clear={this.clearFields} change={this.handleOnChange} sendRequest={this.codeMessage}/>
            </Main>
        );
    }
}