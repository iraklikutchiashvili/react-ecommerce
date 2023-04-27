import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PageContextProvider from "./context/PageContext";
import ProductsContextProvider from "./context/ProductsContext";
import AuthContextProvider from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import AboutPage from "./pages/AboutPage";
import MyBasket from "./pages/MyBasket";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <PageContextProvider>
            <ProductsContextProvider>
              <NavBar />
              <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/products/:id" element={<ProductPage />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route exact path="/basket" element={<MyBasket />} />
                <Route exact path="/auth" element={<ProfilePage />} />
                <Route exact path="/auth/register" element={<RegisterPage />} />
              </Routes>
            </ProductsContextProvider>
          </PageContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
