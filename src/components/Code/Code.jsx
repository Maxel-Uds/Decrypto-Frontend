import React, { Component } from 'react';
import Main from '../templates/Main';
import './Code.css';

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

        this.clearFields = this.clearFields.bind(this);
        this.updateField = this.updateField.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    renderForm() {
        return (
            <React.Fragment>
                <div className="was-validated form">
                    <div className="row">
                        <div className="form-group row">
                            <label className="col-12 col-6  col-md-3 col-form-label">Senha:</label>
                            <div className="col-12 col-7 col-md-9">
                                <input type="password" className="form-control" name="pass" required minLength="5" placeholder="Digite a senha..." value={this.state.editable.pass} onChange={this.handleOnChange}/>
                                <div className="invalid-feedback">Digite uma senha de no mínimo 5 caracteres!</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form g-3">
                    <div className="row">
                        <div className="form-group row">
                            <label className="col-12 col-md-3 col-form-label">Confirme a Senha:</label>
                            <div className=" col-12 col-md-9">
                                <input type="password" className="form-control is-invalid" name="passConfirm" required id="passConfirmInput" placeholder="Senha novamente..." value={this.state.editable.passConfirm} onChange={this.handleOnChange}/>
                                <div className="invalid-feedback">As senhas precisam ser iguais!</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="was-validated form">
                    <div className="row">
                        <div className="form-group row">
                            <label className="col-12 col-md-3 col-form-label">Mensagem:</label>
                            <div className="col-12 col-md-9">
                                <textarea type="text" className="form-control" name="message" required minLength="20" placeholder="Digite a mensagem..." value={this.state.editable.message} onChange={this.handleOnChange}/>
                                <div className="invalid-feedback">Digite uma mensagem com no mínimo 20 caracteres!</div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group row">
                            <label className="col-12 col-md-3 col-form-label">ID da mensagem:</label>
                            <div className="col-12 col-md-9">
                                <input className="form-control" type="text" name="messageId" placeholder="ID da mensagem" readOnly={true} value={this.state.messageId}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group row">
                            <label className="col-12  col-md-3 col-form-label">Mensagem codificada:</label>
                            <div className="col-12 col-md-9">
                                <textarea className="form-control" name="codeMessage" placeholder="Mensagem codificada..." readOnly={true} value={this.state.codeMessage}></textarea>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <button className="btn btn-success" disabled={this.state.disableButton}>Codificar</button>
                            <button className="btn btn-danger mx-2" onClick={this.clearFields}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
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
                {this.renderForm()}
            </Main>
        );
    }
}