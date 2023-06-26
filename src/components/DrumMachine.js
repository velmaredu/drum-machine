import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Row, Col } from "react-bootstrap";
import { powerSwitch, instrumentSwitch } from "../store/actions";

class DrumMachine extends Component {
  state = {
    displayText: "",
  };

  handlePowerSwitch = () => {
    this.props.powerSwitch();
    this.setState({ displayText: "" });
  };

  handleInstrumentSwitch = () => {
    this.props.instrumentSwitch();
    this.setState({ displayText: "" });
  };

  handleButtonClick = (event) => {
    const { isPowerOn, isInstrument1 } = this.props;

    if (isPowerOn) {
      const audio = event.target.querySelector("audio");
      audio.currentTime = 0;
      audio.play();
      this.setState({ displayText: audio.src.split("/").pop().split(".")[0] });
    }
  };

  handleKeyDown = (event) => {
    const { isPowerOn } = this.props;

    if (isPowerOn) {
      const key = event.key.toUpperCase();
      const button = document.querySelector(`button[data-key="${key}"]`);

      if (button) {
        button.click();
      }
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { isPowerOn, isInstrument1 } = this.props;
    const { displayText } = this.state;

    return (
        <Row id="drum-machine" className="justify-content-center align-items-center">
          <Col>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  data-key="81"
                >
                  Q
                  <audio
                    src={
                      isInstrument1
                        ? "../assets/audio/Heater-1.mp3"
                        : "../assets/audio/audio2.mp3"
                    }
                    data-sound-name="Sound 1"
                  />
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  data-key="87"
                >
                  W
                  <audio
                    src={
                      isInstrument1
                        ? "../assets/audio/Heater-2.mp3"
                        : "../assets/audio/audio4.mp3"
                    }
                    data-sound-name="Sound 2"
                  />
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  data-key="69"
                >
                  E
                  <audio
                    src={
                      isInstrument1
                        ? "../assets/audio/Heater-3.mp3"
                        : "../assets/audio/audio6.mp3"
                    }
                    data-sound-name="Sound 3"
                  />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  data-key="65"
                >
                  A
                  <audio
                    src={
                      isInstrument1
                        ? "../assets/audio/Heater-4.mp3"
                        : "../assets/audio/audio8.mp3"
                    }
                    data-sound-name="Sound 4"
                  />
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  data-key="83"
                >
                  S
                  <audio
                    src={
                      isInstrument1
                        ? "../assets/audio/Clap.mp3"
                        : "../assets/audio/audio10.mp3"
                    }
                    data-sound-name="Sound 5"
                  />
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  data-key="68"
                >
                  D
                  <audio
                    src={
                      isInstrument1
                        ? "../assets/audio/Closed-HH.mp3"
                        : "../assets/audio/audio12.mp3"
                    }
                    data-sound-name="Sound 6"
                  />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  data-key="90"
                >
                  Z
                  <audio
                    src={
                      isInstrument1
                        ? "../assets/audio/Kick_n_Hat.mp3"
                        : "../assets/audio/audio14.mp3"
                    }
                    data-sound-name="Sound 7"
                  />
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  data-key="88"
                >
                  X
                  <audio
                    src={
                      isInstrument1
                        ? "../assets/audio/Kick.mp3"
                        : "../assets/audio/audio16.mp3"
                    }
                    data-sound-name="Sound 8"
                  />
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  data-key="67"
                >
                  C
                  <audio
                    src={
                      isInstrument1
                        ? "../assets/audio/Open-HH.mp3"
                        : "../assets/audio/audio18.mp3"
                    }
                    data-sound-name="Sound 9"
                  />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <div className="switch">
              <span>Power</span>
              <Form.Check
                type="switch"
                id="power-switch"
                label=""
                checked={isPowerOn}
                onChange={this.handlePowerSwitch}
              />
            </div>
            <div className="display">{displayText}</div>
            <div className="switch">
              <span>Instrument</span>
              <Form.Check
                type="switch"
                id="instrument-switch"
                label=""
                checked={isInstrument1}
                onChange={this.handleInstrumentSwitch}
              />
            </div>
          </Col>
        </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPowerOn: state.power.isPowerOn,
    isInstrument1: state.instrument.isInstrument1,
  };
};

const mapDispatchToProps = {
  powerSwitch,
  instrumentSwitch,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrumMachine);
