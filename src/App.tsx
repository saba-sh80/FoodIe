import { ShopCards } from "./components/ShopCards";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {Discount} from "./components/Discount";
import {Menu} from "./components/Menu";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <Menu />
      <ShopCards />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;
