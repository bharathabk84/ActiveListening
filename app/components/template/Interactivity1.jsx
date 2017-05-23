import React from 'react';
import MediaQuery from 'react-responsive';

export default class Interactivity1 extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      isPopupOpen: false,
      currentPopup: 0
    }
  }

  getPopupContent() {
    var currentPopup = this.state.currentPopup;
    switch(parseInt(currentPopup)) {
      case 1:
        return (
          <div><div>High-level assessment of the adviser’s overall business activities </div>
                <div>Review of substantiating documents and representations made on disclosure documents and marketing materials to assess your compliance program.</div></div>
            
        );
        break;
      case 2:
        return (
          <div>Regional examination staff may choose a comprehensive, risk-based examination of:
               <ul>
                   <li>Compliance Program</li>
                <li>Filings and Disclosures</li>
                <li>Marketing Materials</li>
                <li>Portfolio Management</li>
                <li>Safety of Client Assets</li>
                   </ul>
</div>
        );
        break;
    }
  }

  displayPopup() {
    return (
      <div>
        {this.state.isPopupOpen && <div className="popup-container">
          <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  openPopup(currentPopup) {
    this.setState({isPopupOpen: true, currentPopup: currentPopup})
  }

  closePopup() {
    this.setState({isPopupOpen: false})
  }

=======
    
  }
>>>>>>> f6fe3479ca5e4f91f0aa58d2833a62e7dd4e1fdc
  render() {
    return (
      <div className="interactivity1">
     <MediaQuery query='(min-device-width: 1224px)'>
        <div className="content">
          <div className="bg">
<<<<<<< HEAD
            <div className="intro white">
              <div className="flex-container">
                <div className="left-side">
                  <div className="intro_heading">
                    <h1>The National Examination Programe "NEP" </h1>
                  </div>
                  <div className="intro_para">
                    <span>Senior Specialized Examiners with experience in:</span>
                  </div>
                  <div className="intro_list">
                    <ul>
                      <li>Trading</li>
                      <li>Portfolio Management</li>
                      <li>Valuation</li>
                      <li>Complex Products</li>
                      <li>Sales</li>
                      <li>Compliance</li>
                      <li>Forensic Accounting</li>
                    </ul>
                  </div>
                  <div className="btn_div">
                    <span className="instruction_img">
                      <img src="/app/assets/images/template/hand_icon.png" className ="middle_align"/>
                     <span className="instruction_text">Click each button to know more.</span>
                    </span>
                    <div className="buttons">
                      <span><button id="btn_01" onClick={this.openPopup.bind(this, 1)}>Approach 1</button></span>
                      <span><button id="btn_02" onClick={this.openPopup.bind(this, 2)}>Approach 2</button></span>
                    </div>
                  </div>
                </div>
                <div className="right-side">
                  {
                    this.displayPopup()
                  }
                </div>
              </div>
            </div>
          </div>
=======
              
               <div className="page_title">
                    <h1>Barriers to Active Listening </h1>
                  </div>
              <div className="sub_heading">There can also be barriers to active listening. They are: </div>
            <div className="intro white">
              <div className="flex-container">
                
                 <div className="box1">
                     <div className="img_heading">Distractions
                     </div><img src="/app/assets/images/template/pic-01.png" />
                     <div className="img_caption">Distractions can be due to physical noise or psychological problems.</div>
                  </div>
                 <div className="box2">
                     <div className="img_heading">Jargon/Vocabulary</div>
                     <img src="/app/assets/images/template/pic-02.png" />
                  <div className="img_caption">Some speaker use jargon or heavy vocabulary which cannot be understood by the listener.</div></div>
                 <div className="box3">
                     <div className="img_heading">Cultural Differences/ Speaker Accent</div>
                     <img src="/app/assets/images/template/pic-03.png" />
                  <div className="img_caption">Then there is a situation where the listener are unable to understand the speaker due to the accent.</div>
                  </div>
                 <div className="box4"><div className="img_heading">Attitudes/Prejudices</div>
                     <img src="/app/assets/images/template/pic-04.png" />
                     <div className="img_caption">There are also situations where the listeners are prejudiced by the speaker's culture or background and hence may not fully listen to what the speaker is saying.</div>
                  </div>
                </div>
               
              </div>
            </div>
        
>>>>>>> f6fe3479ca5e4f91f0aa58d2833a62e7dd4e1fdc
        </div>
          </MediaQuery>
            
              <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
        <div className="content">
          <div className="bg">
<<<<<<< HEAD
            <div className="intro white">
              <div className="flex-container">
                <div className="left-side">
                  <div className="intro_heading">
                    <h1>The National Examination Programe "NEP" </h1>
                  </div>
                  <div className="intro_para">
                    <span>Senior Specialized Examiners with experience in:</span>
                  </div>
                  <div className="intro_list">
                    <ul>
                      <li>Trading</li>
                      <li>Portfolio Management</li>
                      <li>Valuation</li>
                      <li>Complex Products</li>
                      <li>Sales</li>
                      <li>Compliance</li>
                      <li>Forensic Accounting</li>
                    </ul>
                  </div>
                  <div className="btn_div">
                    <span className="instruction_img">
                      <img src="/app/assets/images/template/hand_icon.png" className ="middle_align"/>
                     <span className="instruction_text">Click each button to know more.</span>
                    </span>
                    <div className="buttons">
                      <span><button id="btn_01" onClick={this.openPopup.bind(this, 1)}>Approach 1</button></span>
                      <span><button id="btn_02" onClick={this.openPopup.bind(this, 2)}>Approach 2</button></span>
                    </div>
                  </div>
                </div>
                <div className="right-side">
                  {
                    this.displayPopup()
                  }
                </div>
              </div>
            </div>
          </div>
=======
              
               <div className="page_title">
                    <h1>Barriers to Active Listening </h1>
                  </div>
              <div className="sub_heading">There can also be barriers to active listening. They are: </div>
            <div className="intro white">
              <div className="flex-container">
                
                 <div className="box1">
                     <div className="img_heading">Distractions
                     </div><img src="/app/assets/images/template/pic-01.png" />
                     <div className="img_caption">Distractions can be due to physical noise or psychological problems.</div>
                  </div>
                 <div className="box2">
                     <div className="img_heading">Jargon/Vocabulary</div>
                     <img src="/app/assets/images/template/pic-02.png" />
                  <div className="img_caption">Some speaker use jargon or heavy vocabulary which cannot be understood by the listener.</div></div>
                 <div className="box3">
                     <div className="img_heading">Cultural Differences/ Speaker Accent</div>
                     <img src="/app/assets/images/template/pic-03.png" />
                  <div className="img_caption">Then there is a situation where the listener are unable to understand the speaker due to the accent.</div>
                  </div>
                 <div className="box4"><div className="img_heading">Attitudes/Prejudices</div>
                     <img src="/app/assets/images/template/pic-04.png" />
                     <div className="img_caption">There are also situations where the listeners are prejudiced by the speaker's culture or background and hence may not fully listen to what the speaker is saying.</div>
                  </div>
                </div>
               
              </div>
            </div>
        
>>>>>>> f6fe3479ca5e4f91f0aa58d2833a62e7dd4e1fdc
        </div>
          </MediaQuery>
            
              <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
        <div className="content">
          <div className="bg">
<<<<<<< HEAD
            <div className="intro white">
              <div className="flex-container">
                <div className="left-side">
                  <div className="intro_heading">
                    <h1>The National Examination Programe "NEP" </h1>
                  </div>
                  <div className="intro_para">
                    <span>Senior Specialized Examiners with experience in:</span>
                  </div>
                  <div className="intro_list">
                    <ul>
                      <li>Trading</li>
                      <li>Portfolio Management</li>
                      <li>Valuation</li>
                      <li>Complex Products</li>
                      <li>Sales</li>
                      <li>Compliance</li>
                      <li>Forensic Accounting</li>
                    </ul>
                  </div>
                  <div className="btn_div">
                    <span className="instruction_img">
                      <img src="/app/assets/images/template/hand_icon.png" className ="middle_align"/>
                      <span className="instruction_text">Click each button to know more.</span>
                    </span>
                    <div className="buttons">
                      <div><button id="btn_01" onClick={this.openPopup.bind(this, 1)}>Approach 1</button></div>
                      <div><button id="btn_02" onClick={this.openPopup.bind(this, 2)}>Approach 2</button></div>
                    </div>
                  </div>
                </div>
                <div className="right-side">
                  {
                    this.displayPopup()
                  }
                </div>
              </div>
            </div>
          </div>
=======
              
               <div className="page_title">
                    <h1>Barriers to Active Listening </h1>
                  </div>
              <div className="sub_heading">There can also be barriers to active listening. They are: </div>
            <div className="intro white">
              <div className="flex-container">
                
                 <div className="box1">
                     <div className="img_heading">Distractions
                     </div><img src="/app/assets/images/template/pic-01.png" />
                     <div className="img_caption">Distractions can be due to physical noise or psychological problems.</div>
                  </div>
                 
                 <div className="box2">
                     <div className="img_heading">Jargon/Vocabulary</div>
                     <img src="/app/assets/images/template/pic-02.png" />
                  <div className="img_caption">Some speaker use jargon or heavy vocabulary which cannot be understood by the listener.</div></div>
                </div>
                
                   <div className="flex-container">
                 <div className="box3">
                     <div className="img_heading">Cultural Differences/ Speaker Accent</div>
                     <img src="/app/assets/images/template/pic-03.png" />
                  <div className="img_caption">Then there is a situation where the listener are unable to understand the speaker due to the accent.</div>
                  </div>
                 <div className="box4"><div className="img_heading">Attitudes/Prejudices</div>
                     <img src="/app/assets/images/template/pic-04.png" />
                     <div className="img_caption">There are also situations where the listeners are prejudiced by the speaker's culture or background and hence may not fully listen to what the speaker is saying.</div>
                  </div>
                </div>
               
              </div>
            </div>
        
>>>>>>> f6fe3479ca5e4f91f0aa58d2833a62e7dd4e1fdc
        </div>
          </MediaQuery>
      </div>
    )
  }
}
