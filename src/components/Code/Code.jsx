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
    codeMessage: ''
}

export default class Code extends Component {

    state = { ...initialState };

    constructor(props) {
        super(props);

        this.updateField = this.updateField.bind(this);
        this.clearFields = this.clearFields.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="form-group row">
                        <label className="col-12 col-6  col-md-3 col-form-label">Senha:</label>
                        <div className="col-12 col-7 col-md-9">
                            <input type="password" className="form-control" name="pass" placeholder="Digite a senha..." value={this.state.editable.pass} onChange={this.handleOnChange}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group row">
                        <label className="col-12 col-md-3 col-form-label">Confirme a Senha:</label>
                        <div className=" col-12 col-md-9">
                            <input type="password" className="form-control" name="passConfirm" placeholder="Senha novamente..." value={this.state.editable.passConfirm} onChange={this.handleOnChange}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group row">
                        <label className="col-12 col-md-3 col-form-label">Mensagem:</label>
                        <div className="col-12 col-md-9">
                            <textarea type="text" className="form-control" name="message" placeholder="Digite a mensagem..." value={this.state.editable.message} onChange={this.updateField}></textarea>
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
            </div>
        );
    }

    clearFields() {
        this.setState({ ...initialState });
    }

    handleOnChange(event) {
        this.updateField(event);

        setTimeout(() => this.checkPassIsValid(event), 50);
        
    }

    updateField(event) {
        const editable =  { ...this.state.editable } ;
        editable[event.target.name] = event.target.value;
        this.setState({ editable });
    }

    checkPassIsValid(event) {
        const pass = this.state.editable.pass;
        const passConfirm = this.state.editable.passConfirm;
        
        if(pass !== passConfirm) {
            console.log(pass, passConfirm);
        }
        else {
            console.log("igual");
        }
    }

    render() {
        return (
            <Main title="Encode" subtitle="Transforme qualquer mensagem em um hash indecifrável!" icon="fa fa-lock">
                {this.renderForm()}
            </Main>
        );
    }
}