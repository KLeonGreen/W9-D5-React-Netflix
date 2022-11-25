import { Component } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "../Components/Netflix.css";
import Movie from "./Movie";

class MovieSlider extends Component {
  state = {
    film: [],
  };
  getMovies = async () => {
    try {
      let response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=874ae9ca&s=" + this.props.title);

      if (response.ok) {
        const data = await response.json();
        const movieArray = data.Search;
        console.log(movieArray);
        this.setState({ film: movieArray });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <>
        <Container fluid>
          <h5>{this.props.title}</h5>
          <Carousel>
            <Carousel.Item>
              <Row className="d-flex">
                {this.state.film.slice(0, 6).map((movie) => (
                  <Col md={2} key={movie.imdbID} className="image-card">
                    <img className="movie-cover" src={movie.Poster} alt="#" />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="d-flex">
                {this.state.film.slice(4, 12).map((movie) => (
                  <Col md={2} key={movie.imdbID} className="image-card">
                    <img className="movie-cover" src={movie.Poster} alt="#" />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </>
    );
  }
}

export default MovieSlider;
