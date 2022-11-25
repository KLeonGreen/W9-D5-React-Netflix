import logo from "./logo.svg";
import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import MovieSlider from "./Components/MovieSlider";
import Footer from "./Components/Footer";
import Pagetitle from "./Components/Pagetitle";

function App() {
  return (
    <>
      <div>
        <TopNavbar />
      </div>
      <div>
        <Pagetitle />
      </div>
      <div>
        <MovieSlider title="Harry Potter" />
      </div>
      <div>
        <MovieSlider title="Star Wars" />
      </div>
      <div>
        <MovieSlider title="Lord of the rings" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
