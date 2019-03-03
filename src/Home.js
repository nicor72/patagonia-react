import React, { Component } from 'react';
import ReactDOM               from 'react-dom';

class Info extends Component {

  state = { show: false };

  render() {
    return (
      <div>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <h1 className="info-title">
              DATE UN GUSTO
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
     
                  <span style={{fontSize: 3 + 'em'}}>
                    <i className="fas fa-brain col-md-12" style={{textAlign: 'center'}}></i>
                  </span>
                  <div className="info-text">
                      Desde 1920 ofreciendo los mejores y más sabrosos frutos secos como nueces, almendras, avellanas, maníes y huesillos entre otros.
                  </div>
 
            </div>
            <div className="col-md-4">
        
                <span style={{fontSize: 3 + 'em'}}>
                  <i className="fas fa-grin-hearts col-md-12" style={{textAlign: 'center'}}></i>
                </span>
                <div className="info-text">
                    Desde 1920 ofreciendo los mejores y más sabrosos frutos secos como nueces, almendras, avellanas, maníes y huesillos entre otros.
                </div>
   
            </div>
            <div className="col-md-4">

                <span style={{fontSize: 3 + 'em'}}>
                  <i className="fas fa-heart col-md-12" style={{textAlign: 'center'}}></i>
                </span>
                <div className="info-text">
                    Desde 1920 ofreciendo los mejores y más sabrosos frutos secos como nueces, almendras, avellanas, maníes y huesillos entre otros.
                </div>
          
            </div>
          </div>
        </div>

        

        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <div className="info-text2">
                Realizamos ventas al por mayor a comercios, instituciones restaurantes, comunidades y particulares en todo Chile.<br/><br/>
                Haga su pedido a través de nuestro formulario.
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">

              <button type="button" className="btn btn-outline-secondary btn-lg medium-margin-bottom">Contacto</button>
       
          </div>
        </div>
      </div>
    );
  }
}

export default Info;