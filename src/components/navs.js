import React from "react";

function NavBar(props) {
  if (props.public == true) {
    return (
      <div className="public-nav-bar">
        <nav>
          <ul className="public-navigation">
            <li><a href="index.html"><img className="public-logo" src={require('../resources/beebank-logo-claro.png')} alt="Logo" draggable="false" /></a></li>
            <li><a href="index.html" className="public-a-nav" draggable="false">Inicio</a></li>
            <li><a href="support.html" className="public-a-nav" draggable="false">Soporte</a></li>
            <li><a href="faq.html" className="public-a-nav" draggable="false">Preguntas Frecuentes</a></li>
            {props.deactivateButton ? null:<a href="login.html" className="general-btn public-register-btn" draggable="false">Únete a nosotros</a>}
          </ul>
        </nav>
      </div>
    )
  } else {
    return (
      <div className="logged-navigation-container">
        <nav>
          <ul className="logged-navigation">
            <li className="logged-li-nav"><a href="l-home.html" className="logged-a-nav" draggable="false"><i className="bi bi-house" />Inicio</a></li>
            <li className="logged-li-nav"><a href="l-accounts.html" className="logged-a-nav" draggable="false"><i className="bi bi-person" />Cuenta</a></li>
            <li className="logged-li-nav"><a href="l-transfers.html" className="logged-a-nav" draggable="false"><i className="bi bi-shuffle" />Transferencias</a></li>
            <li className="logged-li-nav"><a href="l-loans.html" className="logged-a-nav" draggable="false"><i className="bi bi-bank" />Préstamos</a></li>
            <li className="logged-li-nav"><a href="support.html" className="logged-a-nav" draggable="false"><i className="bi bi-shield-check" />Soporte</a></li>
            <li className="logged-li-nav"><a href="l-config.html" className="logged-a-nav" draggable="false"><i className="bi bi-gear" />Configuración</a></li>
            <li className="logged-li-nav"><a href="index.html" className="logged-a-nav" draggable="false"><i className="bi bi-box-arrow-left" />Cerrar Sesión</a></li>
          </ul>
        </nav>
      </div>

    )
  }
}

export default NavBar;