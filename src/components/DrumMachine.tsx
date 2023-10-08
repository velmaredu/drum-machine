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
      <Col id="controls">
        <Form.Switch
          id="power-switch"
          className="d-flex align-items-center m-auto"
          label={<span className="text-white">Power</span>}
          checked={isPowerOn}
          onChange={handlePowerSwitch}
        />
        <Row id="display" className="text-white bg-gray">{displayText}</Row>
        <Form.Switch
          id="instrument-switch"
          className="d-flex align-items-center m-auto"
          label={<span className="text-white">Instrument</span>}
          checked={isInstrument1}
          onChange={handleInstrumentSwitch}
        />
      </Col>
    </Row>
  );
}

export default DrumMachine;
