import Titulo from './Titulo.jsx';
import './mainSection.css';

export default function MainSection({titulo}) {
    return (
        <section className="main-section">
            <Titulo titulo={titulo} />

        </section>
    );
}


