
import './App.css'



import Footer from "./src/Components/Footer/Footer.jsx";
import Header from "./src/components/Header/Header.jsx";
import MainSection from './src/components/MainSection/MainSection.jsx';

function App() {


    return (
        <>
            <Header/>

            <MainSection
                titulo="Bienvenido a Nuestra Página"
            />

            <Footer/>


        </>



    )

}

export default App