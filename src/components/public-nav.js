export default function PublicNavBar(props) {
    return (
      <div className="public-nav-bar">
        <nav>
          <ul className="public-navigation">
            <li><a href='index.html'><img className="public-logo" src={require('../resources/beebank-logo-claro.png')} alt="Logo" draggable="false" /></a></li>
            <li><a href="index.html" className="public-a-nav" draggable="false">Inicio</a></li>
            <li><a href="support.html" className="public-a-nav" draggable="false">Soporte</a></li>
            <li><a href="faq.html" className="public-a-nav" draggable="false">Preguntas Frecuentes</a></li>
            {props.deactivateButton ? null:<a href="login.html" className="general-btn public-register-btn" draggable="false">Únete a nosotros</a>}
          </ul>
        </nav>
      </div>
    );
};