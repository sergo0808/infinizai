import AppStyles from "./App.module.css";
import Info from "../Info/Info";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className={AppStyles.app}>
      <Info />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
