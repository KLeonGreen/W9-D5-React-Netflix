import { Component } from "react";
import { Button } from "react-bootstrap";

class Cover extends Component {
  render() {
    return (
      <div className="cover-image">
        <div className="cover-content">
          <h1>#TV Show Today</h1>
          <p>
            From the #1 New York Times best-selling author of The Darkest Minds comes a sweepingly ambitious, high-octane tale of power, destiny, love, and redemption.Every seven years, the Agon
            begins.
          </p>
          <span>
            <Button className="btn mr-3" variant="light">
              Play
            </Button>
            <Button variant="secondary">More info</Button>
          </span>
        </div>
        <img
          src="https://img.wattpad.com/37ecd9f19315e63e81b992eb52a44a30b46151d6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5050465257754f493345574771773d3d2d3939383539343231312e313635323931356139386337376338303431303637343037313735362e676966"
          alt=""
        />
      </div>
    );
  }
}
export default Cover;
