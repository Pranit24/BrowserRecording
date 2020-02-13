import React, { Component } from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { RecordRTCPromisesHandler, StereoAudioRecorder } from 'recordrtc'
// import Navigation from "./components/Navigation";
let FileSaver = require('file-saver');
const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia);


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recordAudio: null,
      src: null,
      data: null,
      url: null,
      micEnabled: false,
      recordFlag: true,
      playFlag: true,
      audio: new Audio(),
      rtcSession: {
        type: 'audio',
        mimeType: 'audio/wav',
        audio: true,
        recorderType: StereoAudioRecorder
      }

    };

  }


  componentDidMount = () => {
    if (!hasGetUserMedia) {
      alert("Browser not supported")
      return;
    }
    this.requestUserMedia()
    const audio = this.state.audio;
    audio.addEventListener("ended", () => {
      this.stopAudio()
    })
  }


  requestUserMedia = async () => {
    console.log('requestUserMedia')
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      this.setState({ micEnabled: true })
    } catch (err) {
      alert("Enable microphone and refresh")
      this.setState({ micEnabled: false })
    }
  }


  startRecording = async () => {
    this.requestUserMedia()
    if (!this.state.playFlag) {
      this.stopAudio()
    }
    this.setState(prevState => ({
      recordFlag: !prevState.recordFlag,
      playFlag: true
    }))
    let stream = await navigator.mediaDevices.getUserMedia(this.state.rtcSession, { audio: true });
    this.setState({ recordAudio: new RecordRTCPromisesHandler(stream, this.state.rtcSession) });
    this.state.recordAudio.startRecording();

  }

  stopRecording = async () => {
    this.requestUserMedia();
    this.setState(prevState => ({
      recordFlag: !prevState.recordFlag
    }))
    let blob = await this.state.recordAudio.stopRecording();
    const data = await this.state.recordAudio.getBlob();
    this.setState({ data, url: blob })
  }


  playAudio = async () => {
    this.setState(prevState => ({
      playFlag: !prevState.playFlag
    }))
    const audio = this.state.audio
    audio.src = this.state.url
    audio.preload = "metadata"
    audio.play();
    this.setState({ audio });
  }

  stopAudio = () => {
    this.setState(prevState => ({
      playFlag: !prevState.playFlag
    }))
    const audio = this.state.audio;
    audio.pause()
    audio.currentTime = 0;
    this.setState({ audio: audio });

  }

  saveAudio = () => {
    FileSaver.saveAs(this.state.data, "audio.ogg");
  }


  render() {
    let playButton, recordButton, saveButton;

    if (!this.state.micEnabled) {
      recordButton = <Button variant="secondary" size="lg" onClick={this.startRecording} disabled style={{ marginBottom: "20px" }} >Start Recording</Button>
    }
    else if (this.state.recordFlag) {
      recordButton = <Button variant="primary" size="lg" onClick={this.startRecording} active style={{ marginBottom: "20px" }} >Start Recording</Button>
    } else {
      recordButton = <Button variant="primary" size="lg" onClick={this.stopRecording} active style={{ marginBottom: "20px" }} >Stop Recording</Button>
    }

    if (this.state.data && this.state.recordFlag && this.state.playFlag) {
      playButton = <Button variant="primary" size="lg" onClick={this.playAudio} active >Play Audio</Button>
      saveButton = <Button variant="success" size="lg" onClick={this.saveAudio} active >Save Audio</Button>
    } else if (this.state.data && this.state.recordFlag && !this.state.playFlag) {
      playButton = <Button variant="danger" size="lg" onClick={this.stopAudio} active >Stop Playing Audio</Button>
      saveButton = <Button variant="success" size="lg" onClick={this.saveAudio} active >Save Audio</Button>
    }
    return (
      <div className="App">
        {/* <Navigation /> */}
        <Container style={{ marginTop: "50px" }}>
          <Row>
            <Col>
              {recordButton}
            </Col>
          </Row>
          <Row>
            <Col>
              {playButton}
            </Col>
            <Col>
              {saveButton}
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    );
  }
}

export default App;
