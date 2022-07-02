import React, { Component } from 'react';
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

    render() {
        return (
            <Main title="Encode" subtitle="Transforme qualquer mensagem em um hash indecifrável!" icon="fa fa-lock">
                <CodeForm { ...this.state } clear={this.clearFields} change={this.handleOnChange}/>
            </Main>
        );
    }
}