import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { ErrorPage, HomePage, ItemPage, ShopPage, ShippingPage } from "./pages";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Marketplace */}
            <Route path="/shop/:category" element={<ShopPage />} />
            <Route path="/item/:itemId" element={<ItemPage />} />

            {/* Info */}
            <Route path="/envios" element={<ShippingPage />} />

            {/* 404 */}
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

