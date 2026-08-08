import { ShopCards } from "./components/ShopCards";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {Discount} from "./components/Discount";
import {Menu} from "./components/Menu";
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Menu />
      <ShopCards />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;
