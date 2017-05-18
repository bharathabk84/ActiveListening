import React from 'react';
import MediaQuery from 'react-responsive';
export default class StaticPage3 extends React.Component {
  constructor(props) {
    super(props);
  }

     getPopupContent() {
    var currentPopup = this.state.currentPopup;
    switch(parseInt(currentPopup)) {
      case 1:
        return (
          <div className="pop1"><div>High-level assessment of the adviser’s overall business activities </div>
                <div>Review of substantiating documents and representations made on disclosure documents and marketing materials to assess your compliance program.</div></div>
            
        );
        break;
      case 2:
        return (
          <div className="pop2">Regional examination staff may choose a comprehensive, risk-based examination of:
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
             case 3:
        return (
          <div className="pop3">Regional examination staff may choose a comprehensive, risk-based examination of:
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
    
  render() {
    return (
      <div className="static-page4">
            <MediaQuery query='(min-device-width: 1224px)'>
        <div className="content">
          <div className="bg">
            <div className="intro">
              <div className="flex-container">
                <div className="left-side">
                  <div className="page_title">
                    <h1> Degree of Active Listening Behaviour </h1>
                  </div>
                    <div className="sub_title">Select each tab to know more.</div>
                <div className="container white">
                  <div className="box1">
                    
                    <div className="button_01 white">Repeating</div>
                  </div>
                  <div className="box2">
                    
                    <div className="button_02">Paraphrasing</div>
                  </div>
                  <div className="box3">
                   
                    <div className="button_03">Reflecting</div>
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
                    <h1> The National Examination Program "NEP" </h1>
                  </div>
                <div className="container">
                  <div className="box1">
                    <img src="/app/assets/images/template/icon_1.png"/>
                    <div className="img_caption">Risk Based Approach</div>
                  </div>
                  <div className="box2">
                    <img src="/app/assets/images/template/icon_2.png"/>
                    <div className="img_caption">Emphasis on Team work</div>
                  </div>
                  <div className="box3">
                    <img src="/app/assets/images/template/icon_3.png"/>
                    <div className="img_caption">Enhance training of examiners</div>
                  </div>
                  <div className="box4">
                    <img src="/app/assets/images/template/icon_4.png"/>
                    <div className="img_caption">Hire senior industry professionals</div>
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
                    <h1> The National Examination Program "NEP" </h1>
                  </div>
                <div className="container">
                  <div className="box1">
                    <img src="/app/assets/images/template/icon_1.png"/>
                    <div className="img_caption">Risk Based Approach</div>
                  </div>
                  <div className="box2">
                    <img src="/app/assets/images/template/icon_2.png"/>
                    <div className="img_caption">Emphasis on Team work</div>
                  </div>
                  <div className="box3">
                    <img src="/app/assets/images/template/icon_3.png"/>
                    <div className="img_caption">Enhance training of examiners</div>
                  </div>
                  <div className="box4">
                    <img src="/app/assets/images/template/icon_4.png"/>
                    <div className="img_caption">Hire senior industry professionals</div>
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
