import './App.css';
import HeaderComponent from './components/Header/Header.jsx';
import FooterComponent from './components/Footer/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home.jsx';
import AboutPage from './components/About/About.jsx';
import ContactPage from './components/Contact/Contact.jsx';
import ProductsPage from './Components/Productos/Productos.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import ProductsCategoria from './components/Categoria/Categoria.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderComponent />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/category/:categoryId' element={<ProductsCategoria />} />
                    <Route path='/products/:productId' element={<ItemDetail />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>

                <FooterComponent />
            </BrowserRouter>
        </>
    );
}

export default App;
