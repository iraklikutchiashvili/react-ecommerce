import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PageContextProvider from "./context/PageContext";
import ProductsContextProvider from "./context/ProductsContext";

function App() {
  return (
    <div className="App">
      <PageContextProvider>
        <ProductsContextProvider>
          <NavBar />
          <Content />
        </ProductsContextProvider>
        {/* <Products /> */}
      </PageContextProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
