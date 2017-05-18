import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page1">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="bg">
              <div className="intro white">
                
                    <div className="page_title black">
                      <h1>Which of the following is active listening?</h1>
                    </div>
                  <div className="left-side">
                    <div className="box1">
                        <ul>
                            <li>Listening attentively </li> <br/>
                    <li>Listening to the speaker and noting down what the speaker said</li><br/>
                    <li>Listening with full attention and rephrasing what the speaker said</li>
                            </ul>
                    </div>
                      
                      <div className="box2">
                    <div className="quotation_box">
                    <span className="quotation"> <span className="quote_symbol1"><img src="/app/assets/images/template/08.png" />
                        </span>There are many myths surrounding what constitutes active listening.                                         
                <span className="quote_symbol2"> <img src="/app/assets/images/template/07.png" /> </span>
                         </span> </div>
                    </div>
                      
                      <div className="box3">
                         <span><img src="/app/assets/images/template/icon.png" className="middle_align" /></span> 
                          <p className="instruction_text">In this short course, you will learn more about active listening and its components.</p>

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
                    <div className="intro_heading black">
                      <h4>Which of the following is active listening?</h4>
                    </div>
                    <div className="box1">
                        <ul>
                            <li>Listening attentively </li> <br/>
                    <li>Listening to the speaker and noting down what the speaker said</li><br/>
                    <li>Listening with full attention and rephrasing what the speaker said</li>
                            </ul>
                    </div>
                      
                      <div className="box2">
                    <div className="quotation_box">
                    <span className="quotation"> <span className="quote_symbol1"><img src="/app/assets/images/template/08.png" />
                        </span>There are many myths surrounding what constitutes active listening.                                         
                <span className="quote_symbol2"> <img src="/app/assets/images/template/07.png" /> </span>
                         </span> </div>
                    </div>
                      
                      <div className="box3">
                         <span><img src="/app/assets/images/template/icon.png" className="middle_align" /></span> 
                          <p className="instruction_text">In this short course, you will learn more about active listening and its components.</p>

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
                    <div className="intro_heading black">
                      <h4>Which of the following is active listening?</h4>
                    </div>
                    <div className="box1">
                        <ul>
                            <li>Listening attentively </li>
                    <li>Listening to the speaker and noting down what the speaker said</li>
                    <li>Listening with full attention and rephrasing what the speaker said</li>
                            </ul>
                    </div>
                      
                      <div className="box2">
                    <div className="quotation_box">
                    <span className="quotation"> <span className="quote_symbol1"><img src="/app/assets/images/template/08.png" className ="quote_symbol" />
                        </span>There are many myths surrounding what constitutes active listening.                                         
                <span className="quote_symbol2"> <img src="/app/assets/images/template/07.png" className ="quote_symbol" /> </span>
                         </span> </div>
                    </div>
                      
                      <div className="box3">
                         <span><img src="/app/assets/images/template/icon.png" className="middle_align" /></span> 
                          <p className="instruction_text">In this short course, you will learn more about active listening and its components.</p>

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
