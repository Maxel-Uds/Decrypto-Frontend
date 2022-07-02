import React, { Component } from 'react';
import Main from '../templates/Main';
import DecodeForm from '../Forms/DecodeForm';

const initialState = {
    editable: {
        messageId: '',
        pass: '',
        codedMessage: ''
    },
    decodeMessage: '',
    disabled: true,
}

export default class Decode extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props);

        this.clearFields = this.clearFields.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    clearFields() {
        this.setState({ ...initialState });
    }

    updateField(event) {
        const editable =  { ...this.state.editable } ;
        editable[event.target.name] = event.target.value;
        this.setState({ editable });

        setTimeout(() => this.fieldIsValid(), 10); 
    }

    fieldIsValid() {
        return (this.state.editable.codedMessage === '' || this.state.editable.messageId === '' || this.state.editable.pass === '') ? this.setState({ disabled: true }) : this.setState({ disabled: false })
    }

    render() {
        return (
            <Main title="Decode" subtitle="Decodifique sua mensagem para ler seu conteúdo!" icon="fa fa-unlock-alt">
                <DecodeForm { ...this.state } clear={this.clearFields} update={this.updateField}/>
            </Main>
        );
    }
}