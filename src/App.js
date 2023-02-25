import { Header, Intro, Restaurants, Scenes, Footer } from "./container";
import { Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="gradient__bg">
    <Navbar />
    <Header />
    <Intro />
    <Restaurants />
    <Scenes />
    <Footer />
  </div>
);

export default App;
