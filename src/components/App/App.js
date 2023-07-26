import AppStyles from "./App.module.css";
import Info from "../Info/Info";
import About from "../About/About";
import News from "../News/News";
import Footer from "../Footer/Footer";
function App() {
  return (
    <div className={AppStyles.app}>
      <Info />
      <About />
      <News />
      <Footer />
    </div>
  );
}

export default App;
