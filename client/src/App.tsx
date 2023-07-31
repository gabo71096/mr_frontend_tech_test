import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import ProductDetails from "./features/catalog/ProductDetails";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductDetails />
      </main>
      <ToastContainer position="bottom-right" autoClose={5000} theme="colored" />
    </>
  );
}

export default App;
