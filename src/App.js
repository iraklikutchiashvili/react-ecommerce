import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PageContextProvider from "./context/PageContext";
import ProductsContextProvider from "./context/ProductsContext";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import AboutPage from "./pages/AboutPage";
import MyBasket from "./pages/MyBasket";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageContextProvider>
          <ProductsContextProvider>
            <NavBar/>
              <Routes>
                  <Route index path="/" element={<HomePage/>} />
                  <Route exact path="/products" element={<Products/>}/>
                  <Route exact path="/products/:id" element={<ProductPage/>}/>
                  <Route exact path="/about" element={<AboutPage />}/>
                  <Route exact path="/basket" element={<MyBasket />}/>
              </Routes>
          </ProductsContextProvider>
        </PageContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
