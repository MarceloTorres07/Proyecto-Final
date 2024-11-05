import './App.css';
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home';
import AboutPage from './components/About/About';
import ContactPage from './components/Contact/Contact';
import ProductsPage from './Components/Productos/Productos.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ProductsCategoria from './components/Categoria/Categoria';

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
