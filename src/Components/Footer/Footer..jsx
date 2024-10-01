
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="src/assets/Images/Logo/icon.png" alt="Mi sitio"/>
                </div>

                <div className="footer-Cop">
                    <a>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</a>
                </div>

                <div className="footer-link">
                <a href="#privacy">Terminos y Condiciones</a>
                </div>
                <div className="footer-link">
                    <a href="#privacy">Política de Privacidad</a>
                </div>
                <div className="footer-link">
                    <a href="#privacy">FAQs</a>
                </div>
            </div>
        </footer>
    );
}

