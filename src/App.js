import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PageContextProvider from "./context/PageContext";

function App() {
  return (
    <div className="App">
      <PageContextProvider>
        <NavBar />
        <Content />
        {/* <Products /> */}
      </PageContextProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
