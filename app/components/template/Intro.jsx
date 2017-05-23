import React from 'react';
import Shell from '../Shell';
import MediaQuery from 'react-responsive';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    var uagent = navigator.userAgent.toLowerCase();
    this.state = {
      isStartCourse: false,
      isMobile: uagent.search("mobile") > -1,
      isLoading: true,
    }
  }

  startCourse() {
    this.setState({isStartCourse: true})
  }

  playInstructionAudio() {
  }

  render() {
    if (this.state.isStartCourse) {
      return (
        <div>
          <Shell />
        </div>
      )
    }
    else {
      return (
        <div className="intro-container">
          {this.state.isMobile &&
            <div className="playAudioParent">
              <div className="playBlinkBlack"></div>
              <div className="playBlink" onClick={this.playInstructionAudio.bind(null, this)}>
                   <a className="button-autoPlay" href="#"></a>
              </div>
            </div>
          }
          <MediaQuery query='(min-device-width: 1224px)'>
            <div className="content">
              <div className="bg">
                <div className="logo"> <img src="/app/assets/images/template/logo.jpg"/></div>
                <div className="title welcome_text">
                  <div className="flex-container white">
                    <div className="left-sidetext">
                        <p>Are you an  <span className="bold">Active Listener?</span></p>
                        <p>What constitutes  <span className="bold"> Active Listening?</span></p>
                      </div>
                    <div className="right-sidetext ">
                        <p>Welcome to this course on</p>
                        <h1>ACTIVE LISTENING</h1>
                        <div className="btn">
                      <a href="#" className="start-button" role="button" onClick={this.startCourse.bind(this)}>
                        <span className="btn_text">Start</span>
                      </a>
                    </div>
                      </div>
                       
                  </div>
                </div>
              </div>
            </div>
          </MediaQuery>
              
              
                    <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
            <div className="content">
              <div className="bg">
                <div className="logo"> <img src="/app/assets/images/template/logo.jpg"/></div>
                <div className="title welcome_text">
                  <div className="flex-container white">
                    <div className="left-sidetext">
                        <p>Are you an  <span className="bold">Active Listener?</span></p>
                        <p>What constitutes <span className="bold">Active Listening? </span> </p>
                      </div>
                    <div className="right-sidetext ">
                        <p>Welcome to this course on</p>
                        <h1>ACTIVE LISTENING</h1>
                        <div className="btn">
                      <a href="#" className="start-button" role="button" onClick={this.startCourse.bind(this)}>
                        <span className="btn_text">Start</span>
                      </a>
                    </div>
                      </div>
                       
                  </div>
                </div>
              </div>
            </div>
          </MediaQuery>
                  
                  
          <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
            <div className="content">
              <div className="bg">
                <div className="logo"> <img src="/app/assets/images/template/logo.jpg"/></div>
                <div className="title welcome_text">
                  <div className="flex-container white">
                    <div className="left-sidetext">
                        <p>Are you an  <span className="bold">Active Listener?</span></p>
                        <p>What constitutes  <span className="bold">Active Listening?</span></p>
                      </div>
                    <div className="right-sidetext ">
                        <p>Welcome to this course on</p>
                        <h1>ACTIVE LISTENING</h1>
                        <div className="btn">
                      <a href="#" className="start-button" role="button" onClick={this.startCourse.bind(this)}>
                        <span className="btn_text">Start</span>
                      </a>
                    </div>
                      </div>
                       
                  </div>
                </div>
              </div>
            </div>
          </MediaQuery>
     
        </div>
      )
    }
  }
}
