import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage3 extends React.Component {
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
  render() {
    return (
      <div className="static-page3">
        <div className="content">
        <div className="bg">
         <MediaQuery query='(min-device-width: 1224px)'>

                <div className="intro">

                    <div className="left-side">
                        <div className="container">
                      <div className="page_title">
                        <h1>Importance of Good Listening </h1>
                      </div>
                      <div className="flex-container">
                        <div className="box1">
                          <img src="/app/assets/images/template/Red-icon.png" />
                            <div className="img-caption">
                        At work, many people will give you instructions and share ideas or facts.
                            </div>
                          </div>
                          <div className="box2">
                          <img src="/app/assets/images/template/Yellow-icon.png" />
                            <div className="img-caption">
                        If you are not attentive, you may miss out on crucial details. This will in turn affect your performance.

                            </div>
                          </div>
                          
                          <div className="box3">
                          <img src="/app/assets/images/template/Green_icon.png" />
                            <div className="img-caption">
                       However, If you are an active listener, you will not face any difficulty in understanding them.
                            </div>
                          </div>
                        
                        
                        </div>
                            
                    <div className="blue_banner"></div>
                    <div className="btn_div">
                        <div className="btn_container">
                            <div className="instruction_text white">In this session, you will learn about active listening and the steps involved in active listening.</div>
                            <div className="arrow_img"><img src="/app/assets/images/template/Arrow.png" className="middle_align" /></div> 
                            <div className="btn" >
                    
                <img src="/app/assets/images/template/btn_02.png" className="middle_align" /><span className="btn_text">What is active listening</span></div></div></div>
                    <div className="blue_banner"></div>
                    </div> 
                     
                    </div>
                  </div>
                
          </MediaQuery>
            
          <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
                <div className="intro">

                    <div className="left-side">
                        <div className="container">
                      <div className="page_title">
                        <h1>Importance of Good Listening </h1>
                      </div>
                      <div className="flex-container">
                        <div className="box1">
                          <img src="/app/assets/images/template/Red-icon.png" />
                            <div className="img-caption">
                        At work, many people will give you instructions and share ideas or facts.
                            </div>
                          </div>
                          <div className="box2">
                          <img src="/app/assets/images/template/Yellow-icon.png" />
                            <div className="img-caption">
                        If you are not attentive, you may miss out on crucial details. This will in turn affect your performance.

                            </div>
                          </div>
                          
                          <div className="box3">
                          <img src="/app/assets/images/template/Green_icon.png" />
                            <div className="img-caption">
                       However, If you are an active listener, you will not face any difficulty in understanding them.
                            </div>
                          </div>
                        
                        
                        </div>
                            
                    <div className="blue_banner"></div>
                    <div className="btn_div">
                        <div className="btn_container">
                            <div className="instruction_text white">In this session, you will learn about active listening and the steps involved in active listening.</div>
                            <div className="arrow_img"><img src="/app/assets/images/template/Arrow.png" className="middle_align" /></div> 
                            <div className="btn"><img src="/app/assets/images/template/btn_02.png" className="middle_align" /><span className="btn_text">What is active listening</span></div></div></div>
                    <div className="blue_banner"></div>
                    </div> 
                     
                    </div>
                  </div>
                
          </MediaQuery>
          <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
                <div className="intro">

                    <div className="left-side">
                        <div className="container">
                      <div className="page_title">
                        <h1>Importance of Good Listening </h1>
                      </div>
                    
                        <div className="box1">
                             <div className="flex-container">
                            <div className="img_div">
                          <img src="/app/assets/images/template/Red-icon.png" />
                            </div>
                            <div className="img-caption">
                        At work, many people will give you instructions and share ideas or facts.
                            </div>
                          </div>
                         </div>
                          <div className="box2">
                               <div className="flex-container">
                              <div className="img_div">
                          <img src="/app/assets/images/template/Yellow-icon.png" />
                              </div>
                            <div className="img-caption">
                        If you are not attentive, you may miss out on crucial details. This will in turn affect your performance.
                                   </div>
                            </div>
                          </div>
                          
                          <div className="box3">
                               <div className="flex-container">
                              <div className="img_div">
                          <img src="/app/assets/images/template/Green_icon.png" />
                                   </div>
                            <div className="img-caption">
                       However, If you are an active listener, you will not face any difficulty in understanding them.
                            </div>
                              </div>
                        </div>
                        
                        </div>
                            
                    <div className="blue_banner"></div>
                    <div className="btn_div">
                        <div className="btn_container">
                            <div className="instruction_text white">In this session, you will learn about active listening and the steps involved in active listening.</div>
                            <div className="arrow_img"><img src="/app/assets/images/template/Arrow.png" className="middle_align" /></div> 
                            <div className="btn"><img src="/app/assets/images/template/btn_02.png" className="middle_align" /><span className="btn_text">What is active listening</span></div></div></div>
                    <div className="blue_banner"></div>
                    </div> 
                     
                    </div>
                 
                

          </MediaQuery>
        </div>
        </div>
      </div>
    )
  }
}
