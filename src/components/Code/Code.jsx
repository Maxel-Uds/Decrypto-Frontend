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
    ableButton: false
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
            <form className="was-validated">
                <div className="row">
                    <div className="form-group row">
                        <label className="col-12 col-6  col-md-3 col-form-label">Senha:</label>
                        <div className="col-12 col-7 col-md-9">
                            <input type="password" className="form-control" name="pass" required minLength="5" placeholder="Digite a senha..." value={this.state.editable.pass} onChange={this.handleOnChange}/>
                            <div className="invalid-feedback">Digite uma senha de no mínimo 5 caracteres!</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group row">
                        <label className="col-12 col-md-3 col-form-label">Confirme a Senha:</label>
                        <div className=" col-12 col-md-9" id="confirmPassDiv">
                            <input type="password" className="form-control" name="passConfirm" required id="passConfirmInput" placeholder="Senha novamente..." value={this.state.editable.passConfirm} onChange={this.handleOnChange}/>
                            <div className="invalid-feedback" id="warningDiv">As senhas precisam ser iguais!</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group row">
                        <label className="col-12 col-md-3 col-form-label">Mensagem:</label>
                        <div className="col-12 col-md-9">
                            <textarea type="text" className="form-control" name="message" required minLength="20" placeholder="Digite a mensagem..." value={this.state.editable.message} onChange={this.updateField}></textarea>
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
                        <button className="btn btn-success">Codificar</button>
                        <button className="btn btn-danger mx-2" onClick={this.clearFields}>Cancelar</button>
                    </div>
               </div>
            </form>
        );
    }

    clearFields() {
        this.setState({ ...initialState });
    }

    handleOnChange(event) {
        this.updateField(event);

        setTimeout(() => this.confirmPass(), 10);
    }

    updateField(event) {
        const editable =  { ...this.state.editable } ;
        editable[event.target.name] = event.target.value;
        this.setState({ editable });
    }

    confirmPass() {
        const passConfirmInput = document.getElementById("passConfirmInput");
        return (this.state.editable.pass !== this.state.editable.passConfirm) ? passConfirmInput.classList.add("is-invalid") : passConfirmInput.classList.remove("is-invalid");
    }

    render() {
        return (
            <Main title="Encode" subtitle="Transforme qualquer mensagem em um hash indecifrável!" icon="fa fa-lock">
                {this.renderForm()}
            </Main>
        );
    }
}