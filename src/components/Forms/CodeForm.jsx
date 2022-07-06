import React from 'react';
import './CodeForm.css';

export default function form(props) {
    return (
        <React.Fragment>
            <div className="was-validated form">
                <div className="row">
                    <div className="form-group row">
                        <label className="col-12 col-6  col-md-3 col-form-label">Senha:</label>
                        <div className="col-12 col-7 col-md-9">
                            <input type="password" className="form-control" name="pass" required minLength="5" placeholder="Digite a senha..." value={props.editable.pass} onChange={(e) => props.change(e)}/>
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
                            <input type="password" className="form-control is-invalid" name="passConfirm" required id="passConfirmInput" placeholder="Senha novamente..." value={props.editable.passConfirm} onChange={(e) => props.change(e)}/>
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
                            <textarea type="text" className="form-control" name="message" required minLength="20" placeholder="Digite a mensagem..." value={props.editable.message} onChange={(e) => props.change(e)}/>
                            <div className="invalid-feedback">Digite uma mensagem com no mínimo 20 caracteres!</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group row">
                        <label className="col-12 col-md-3 col-form-label">ID da mensagem:</label>
                        <div className="col-12 col-md-9">
                            <input className="form-control" type="text" name="messageId" placeholder="ID da mensagem" readOnly={true} value={props.messageId}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group row">
                        <label className="col-12  col-md-3 col-form-label">Mensagem codificada:</label>
                        <div className="col-12 col-md-9">
                            <textarea className="form-control" name="codeMessage" placeholder="Mensagem codificada..." readOnly={true} value={props.codeMessage}></textarea>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn btn-success" disabled={props.disableButton} onClick={() => props.sendRequest()}>Codificar</button>
                        <button className="btn btn-danger mx-2" onClick={() => props.clear()}>Cancelar</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}