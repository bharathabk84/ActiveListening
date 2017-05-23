import React from 'react';
import MediaQuery from 'react-responsive';
export default class Interactivity2 extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      isTabOpen: false,
      currentTab: 0
    }
  }

  getPopupContent() {
    var currentTab = this.state.currentTab;
    switch(parseInt(currentTab)) {
      case 1:
      return (
        <div>Tab1</div>
      );
      break;
      case 2:
      return (
        <div>Tab2</div>
      );
      break;
      case 3:
      return (
        <div>Tab3</div>
      );
      break;
    }
  }

  displayTab() {
    return (
      <div>
        {this.state.isTabOpen && <div className="tab-container">
          <span className="close-btn icon-close" onClick={this.closeTab.bind(this)}></span>
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  openTabContainer(currentTab) {
    this.setState({isTabOpen: true, currentTab: currentTab})
  }

  closeTab() {
    this.setState({isTabOpen: false})
  }

=======
   
  }

 
>>>>>>> f6fe3479ca5e4f91f0aa58d2833a62e7dd4e1fdc
  render() {
    return (
      <div className="interactivity2">
        <MediaQuery query='(min-device-width: 1224px)'>
        <div className="content">
          <div className="bg">
<<<<<<< HEAD
            <div className="intro white">
              <div className="flex-container">
                <div className="left-side">
                  <div className="intro_heading">
                    <h1>Kinds of Examinations</h1>
                  </div>
                  <div className="intro_para">
                    <span>Who they apply to</span>
                  </div>
                  <div className="btn_div">
                    <span className="instruction_img">
                      <img src="/app/assets/images/template/hand_icon.png" className="middle_align"/>
                      <span className="instruction_text">Click each tab to know more.</span>
                    </span>
                  </div>
                  <div className="container">
                    <div className="buttons">
                      <span><button id="btn_01" onClick={this.openTabContainer.bind(this,1)}
                        className={this.state.currentTab === 1 ? "selected" : ""}>Traditional Examination</button></span>
                     <span><button id="btn_02" onClick={this.openTabContainer.bind(this,2)}
                        className={this.state.currentTab === 2 ? "selected" : ""}>Dual registrant exams</button></span>
                     <span><button id="btn_03" onClick={this.openTabContainer.bind(this,3)}
                        className={this.state.currentTab === 3 ? "selected" : ""}>Presence Exam</button>
                        </span>
                    </div>
                    {this.displayTab()}
                  </div>
=======
            <div className="intro">
                  <div className="page_title">
                    <h1>Overcoming Barriers to Listening</h1>
                  </div>
                <div className="sub_heading">The active listening technique can be used to overcome listening barriers.</div>
                <div className="sub_heading">You should:</div>
              <div className="flex-container">
                <div className="left-side">
                <div className="box1">
                    <div className="img-no"><img src="/app/assets/images/template/1.png"></img></div>
                    <div className="box_text">Put personal emotions aside during the conversation</div>
                    </div>
                <div className="box2"> 
                    <div className="img-no"><img src="/app/assets/images/template/2.png"></img></div>
                   <div className="box_text"> Ask the right questions  </div>
                    </div>
                <div className="box3"> 
                    <div className="img-no"><img src="/app/assets/images/template/3.png"></img></div>
                    <div className="box_text">Paraphrases back to the speaker to clarify understanding</div>
                     </div>
                <div className="box4">
                    <div className="img-no"><img src="/app/assets/images/template/4.png"></img></div>
                    <div className="box_text">Try to overcome all types of environment distractions</div>
                   </div>
                
                 
>>>>>>> f6fe3479ca5e4f91f0aa58d2833a62e7dd4e1fdc
                </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
<<<<<<< HEAD
            <div className="content">
          <div className="bg">
            <div className="intro white">
              <div className="flex-container">
                <div className="left-side">
                  <div className="intro_heading">
                    <h1>Kinds of Examinations</h1>
                  </div>
                  <div className="intro_para">
                    <span>Who they apply to</span>
                  </div>
                  <div className="btn_div">
                    <span className="instruction_img">
                      <img src="/app/assets/images/template/hand_icon.png" className="middle_align"/>
                      <span className="instruction_text">Click each tab to know more.</span>
                    </span>
                  </div>
                  <div className="container">
                    <div className="buttons">
                      <span><button id="btn_01" onClick={this.openTabContainer.bind(this,1)}
                        className={this.state.currentTab === 1 ? "selected" : ""}>Traditional Examination</button></span>
                     <span><button id="btn_02" onClick={this.openTabContainer.bind(this,2)}
                        className={this.state.currentTab === 2 ? "selected" : ""}>Dual registrant exams</button></span>
                    <span> <button id="btn_03" onClick={this.openTabContainer.bind(this,3)}
                        className={this.state.currentTab === 3 ? "selected" : ""}>Presence Exam</button>
                        </span>
                    </div>
                    {this.displayTab()}
                  </div>
=======
         <div className="content">
          <div className="bg">
            <div className="intro">
                  <div className="page_title">
                    <h1>Overcoming Barriers to Listening</h1>
                  </div>
                <div className="sub_heading">The active listening technique can be used to overcome listening barriers.</div>
                <div className="sub_heading">You should:</div>
              <div className="flex-container">
                <div className="left-side white">
                <div className="box1">
                    <div className="img-no"><img src="/app/assets/images/template/1.png"></img></div>
                    <div className="box_text">Put personal emotions aside during the conversation</div>
                    </div>
                <div className="box2"> 
                    <div className="img-no"><img src="/app/assets/images/template/2.png"></img></div>
                   <div className="box_text"> Ask the right questions  </div>
                    </div>
                <div className="box3"> 
                    <div className="img-no"><img src="/app/assets/images/template/3.png"></img></div>
                    <div className="box_text">Paraphrases back to the speaker to clarify understanding</div>
                     </div>
                <div className="box4">
                    <div className="img-no"><img src="/app/assets/images/template/4.png"></img></div>
                    <div className="box_text">Try to overcome all types of environment distractions</div>
                   </div>
                
                 
>>>>>>> f6fe3479ca5e4f91f0aa58d2833a62e7dd4e1fdc
                </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
<<<<<<< HEAD
            <div className="content">
          <div className="bg">
            <div className="intro white">
              <div className="flex-container">
                <div className="left-side">
                  <div className="intro_heading">
                    <h1>Kinds of Examinations</h1>
                  </div>
                  <div className="intro_para">
                    <span>Who they apply to</span>
                  </div>
                  <div className="btn_div">
                    <span className="instruction_img">
                      <img src="/app/assets/images/template/hand_icon.png" className="middle_align"/>
                      <span className="instruction_text">Click each tab to know more.</span>
                    </span>
                  </div>
                  <div className="container">
                    <div className="buttons">
                      <button id="btn_01" onClick={this.openTabContainer.bind(this,1)}
                        className={this.state.currentTab === 1 ? "selected" : ""}>Traditional Examination</button>
                     <button id="btn_02" onClick={this.openTabContainer.bind(this,2)}
                        className={this.state.currentTab === 2 ? "selected" : ""}>Dual registrant exams</button>
                     <button id="btn_03" onClick={this.openTabContainer.bind(this,3)}
                        className={this.state.currentTab === 3 ? "selected" : ""}>Presence Exam</button>
                    </div>
                    {this.displayTab()}
                  </div>
=======
          <div className="content">
          <div className="bg">
            <div className="intro">
                  <div className="page_title">
                    <h1>Overcoming Barriers to Listening</h1>
                  </div>
                <div className="sub_heading">The active listening technique can be used to overcome listening barriers.</div>
                <div className="sub_heading">You should:</div>
              <div className="flex-container">
                <div className="left-side">
                <div className="box1">
                    <div className="img-no"><img src="/app/assets/images/template/1.png"></img></div>
                    <div className="box_text">Put personal emotions aside during the conversation</div>
                    </div>
                <div className="box2"> 
                    <div className="img-no"><img src="/app/assets/images/template/2.png"></img></div>
                   <div className="box_text"> Ask the right questions  </div>
                    </div>
                <div className="box3"> 
                    <div className="img-no"><img src="/app/assets/images/template/3.png"></img></div>
                    <div className="box_text">Paraphrases back to the speaker to clarify understanding</div>
                     </div>
                <div className="box4">
                    <div className="img-no"><img src="/app/assets/images/template/4.png"></img></div>
                    <div className="box_text">Try to overcome all types of environment distractions</div>
                   </div>
                
                 
>>>>>>> f6fe3479ca5e4f91f0aa58d2833a62e7dd4e1fdc
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
