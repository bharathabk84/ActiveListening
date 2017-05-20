import React from 'react';
import MediaQuery from 'react-responsive';

export default class Interactivity1 extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="interactivity1">
     <MediaQuery query='(min-device-width: 1224px)'>
        <div className="content">
          <div className="bg">
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
                      <span><button id="btn_01">Approach 1</button></span>
                      <span><button id="btn_02">Approach 2</button></span>
                    </div>
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
                      <span><button id="btn_01">Approach 1</button></span>
                      <span><button id="btn_02">Approach 2</button></span>
                    </div>
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
                      <div><button id="btn_01">Approach 1</button></div>
                      <div><button id="btn_02">Approach 2</button></div>
                    </div>
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
