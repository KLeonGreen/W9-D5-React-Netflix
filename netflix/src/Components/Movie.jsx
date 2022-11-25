import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Components/Netflix.css";

class Movie extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row className="d-flex">
          <Col md={2}>
            <img className="movie-cover" src={this.props.movies.Poster} alt="#" />
          </Col>
          <Col md={2}>
            <img className="movie-cover" src="./assets/media/media1.jpg" alt="#" />
          </Col>
          <Col md={2}>
            <img className="movie-cover" src="./assets/media/media2.jpg" alt="#" />
          </Col>
          <Col md={2}>
            <img className="movie-cover" src="./assets/media/media3.jpg" alt="#" />
          </Col>
          <Col md={2}>
            <img className="movie-cover" src="./assets/media/media4.jpg" alt="#" />
          </Col>
          <Col md={2}>
            <img className="movie-cover" src="./assets/media/media5.jpg" alt="#" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Movie;
