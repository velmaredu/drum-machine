import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import DrumPad from "./DrumPad";

function DrumMachine() {
  const [displayText, changeDisplayText] = useState("");
  const [isPowerOn, changePower] = useState(true);
  const [isInstrument1, changeInstrument] = useState(true);

  const updateDisplayText = (input: string) => {
    changeDisplayText(input);
  };

  const handlePowerSwitch = () => {
    changePower(!isPowerOn);
  }

  const handleInstrumentSwitch = () => {
    changeInstrument(!isInstrument1);
    changeDisplayText("");
  };

  return (
    <Row
      id="drum-machine"
      className="justify-content-center align-items-center"
    >
      <Col>
        <DrumPad isPowerOn={isPowerOn} updateDisplayText={updateDisplayText} />
      </Col>
      <Col>
        <Row className="switch">
          <span>Power</span>
          <Form.Check
            type="switch"
            id="power-switch"
            checked={isPowerOn}
            onChange={handlePowerSwitch}
          />
        </Row>
        <Row id="display">{displayText}</Row>
        <Row className="switch">
          <span>Instrument</span>
          <Form.Switch
            id="instrument-switch"
            className="custom-switch"
            checked={isInstrument1}
            onChange={handleInstrumentSwitch}
          />
        </Row>
      </Col>
    </Row>
  );
}

export default DrumMachine;
