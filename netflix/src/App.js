import logo from "./logo.svg";
import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import MovieSlider from "./Components/MovieSlider";
import Footer from "./Components/Footer";
import Pagetitle from "./Components/Pagetitle";
import Cover from "./Components/Cover";

function App() {
  return (
    <>
      <div>
        <TopNavbar />
      </div>
      <div>
        <Cover />
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
        <MovieSlider title="Twilight" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
