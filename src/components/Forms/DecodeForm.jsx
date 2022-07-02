import React from 'react';
import './DecodeForm.css';

export default function form(props) {
    return (
        <div className="was-validated form">
            <div className="row">
                <div className="form-group row">
                    <label className="col-12 col-6  col-md-3 col-form-label">Senha:</label>
                    <div className="col-12 col-7 col-md-9">
                        <input type="password" className="form-control" name="pass" required placeholder="Digite a senha..." value={props.editable.pass} onChange={(e) => props.update(e)}/>
                        <div className="invalid-feedback">Campo obrigatório!</div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="form-group row">
                    <label className="col-12 col-md-3 col-form-label">ID da mensagem:</label>
                    <div className="col-12 col-md-9">
                        <input className="form-control" type="text" name="messageId" required placeholder="Digite ID da mensagem..." value={props.editable.messageId} onChange={(e) => props.update(e)}/>
                        <div className="invalid-feedback">Campo obrigatório!</div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="form-group row">
                    <label className="col-12 col-md-3 col-form-label">Hash da mensagem:</label>
                    <div className="col-12 col-md-9">
                        <textarea type="text" className="form-control" name="codedMessage" required placeholder="Cole o Hash aqui..." value={props.editable.codedMessage} onChange={(e) => props.update(e)}/>
                        <div className="invalid-feedback">Campo obrigatório!</div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="form-group row">
                    <label className="col-12 col-md-3 col-form-label">Mensagem decodificada:</label>
                    <div className="col-12 col-md-9">
                        <textarea type="text" className="form-control" name="decodeMessage" readOnly={true} placeholder="Sua mensagem..." value={props.decodeMessage}/>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn btn-success" disabled={props.disabled}>Codificar</button>
                    <button className="btn btn-danger mx-2" onClick={() => props.clear()}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}