import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import instruments from "../data/instruments.json";

type Pad = {
    key: string;
    audio: string;
    name: string;
};

type DrumPadProps = {
    isPowerOn: boolean;
    updateDisplayText: Function;
};

function DrumPad(props: DrumPadProps) {
    const typeInstrument = 0;
    const instrument: Pad[] = instruments[typeInstrument]["drum-pads"];

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;
        const audio = button.querySelector("audio");
        const soundName = audio?.getAttribute("data-sound-name") || "";
        props.updateDisplayText(soundName)
        playSound(audio);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (props.isPowerOn) {
            const key = event.key.toUpperCase();
            const button = document.querySelector(`button[data-key="${key}"]`);
            if (button) {
                const audio = button.querySelector("audio");
                const soundName = audio?.getAttribute("data-sound-name") || "";
                props.updateDisplayText(soundName)
                playSound(audio);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    const playSound = (audio: HTMLAudioElement | null) => {
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        } else {
            console.log("No audio element found");
        }
    };

    const createButton = (pad: Pad) => (
        <Button
            id={pad.name}
            variant="primary"
            className="drum-pad"
            onClick={handleButtonClick}
            data-key={pad.key}
            key={pad.key}
            disabled={!props.isPowerOn}
        >
            {pad.key}
            <audio
                id={pad.key}
                className="clip"
                src={`${process.env.PUBLIC_URL}/audios/${pad.audio}`}
                data-sound-name={pad.name}
            />
        </Button>
    );

    const createRow = (start: number, end: number) => (
        <Row className="d-flex flex-nowrap gap-2">
            {instrument.slice(start, end).map((pad: Pad) => createButton(pad))}
        </Row>
    );

    return (
        <Col>
            {createRow(0, 3)}
            {createRow(3, 6)}
            {createRow(6, 9)}
        </Col>
    );
}

export default DrumPad;