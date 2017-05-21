import React from 'react';
import MediaQuery from 'react-responsive';
export default class StaticPage3 extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
  }

=======
    this.state = {
      isPopupOpen1: false,
      isPopupOpen2: false,
      isPopupOpen3: false,
      currentPopup: 0
    }
  }

     getPopupContent1() {
         
        return (
            
          <div>
                <div className="pop_heading">
                Repeating </div>
                <div className="pop_content black">
                <ul>
                    <li>Perceiving</li>
                    </ul>
                    <hr/>
                    <ul>
                    <li>Paying Attention</li>
                    </ul>
                    <hr/>
                    <ul>
                    <li>Remembering</li>
                        </ul>
                    <hr/>
                     <ul>
                         <li>Repeating the message using <b><i>exactly the same </i></b> words used by the speaker</li>
                        </ul>
                    
                </div>
            </div>
            
        );
           
         }
    
    
       getPopupContent2() {
           
          
        return (
       <div>
                <div className="pop_heading">
                Paraphrasing </div>
                <div className="pop_content black">
                 <ul>
                    <li>Perceiving</li>
                    </ul>
                    <hr/>
                    <ul>
                    <li>Paying Attention</li>
                    </ul>
                    <hr/>
                    <ul>
                    <li>Remembering</li>
                        </ul>
                    <hr/>
                     <ul>
                         <li>Thinking and Reasoning  </li>
                        </ul>
                     <hr/>
                     <ul>
                         <li>Rendering the message using <b><i>similar</i></b> words and similar phrase arrangement to the ones used by the speaker </li>
                        </ul>
                    
                </div></div>
        );
       
    
       }
    
    getPopupContent3() {
        
        return (
       <div>
                <div className="pop_heading">
                Reflecting </div>
                <div className="pop_content black">
                 <ul>
                    <li>Perceiving</li>
                    </ul>
                    <hr/>
                    <ul>
                    <li>Paying Attention</li>
                    </ul>
                    <hr/>
                    <ul>
                    <li>Remembering</li>
                        </ul>
                    <hr/>
                     <ul>
                         <li>Thinking and Reasoning  </li>
                        </ul>
                     <hr/>
                     <ul>
                         
                         <li>Rendering the message using <b><i>your own </i></b> words and sentence structure </li>
                        </ul>
                </div></div>
        );
    
  }
    
    displayPopup1() {
    return (
       
      <div>
        {this.state.isPopupOpen1 && <div className="pop1">
         <span className="close-btn icon-close" onClick={this.closePopup1.bind(this)}></span>
          {this.getPopupContent1()}
        </div>}
             </div>
            )
        }
    
     displayPopup2() {
    return (
        <div>
             {this.state.isPopupOpen2 && <div className="pop2">
             <span className="close-btn icon-close" onClick={this.closePopup2.bind(this)}></span>
          {this.getPopupContent2()}
        </div>}
             </div>
        )
            }
    
    displayPopup3() {
    return (
        <div>
             {this.state.isPopupOpen3 && <div className="pop3">
         <span className="close-btn icon-close" onClick={this.closePopup3.bind(this)}></span>
          {this.getPopupContent3()}
        </div>}
            
      </div>
           
    )
  }

  openPopup1() {
    this.setState({isPopupOpen1: true})
    }
    
     openPopup2() {
     this.setState({isPopupOpen2: true})
     }
    
     openPopup3() {
    this.setState({isPopupOpen3: true})
     }
    

    closePopup1() {
    this.setState({isPopupOpen1: false})
  }
    
    closePopup2() {
    this.setState({isPopupOpen2: false})
  }
    closePopup3() {
    this.setState({isPopupOpen3: false})
  }
    
>>>>>>> 0175e8c9db0d2470f26d620fef18db9981aa86b3
  render() {
    return (
      <div className="static-page4">
            <MediaQuery query='(min-device-width: 1224px)'>
        <div className="content">
          <div className="bg">
<<<<<<< HEAD
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
=======
            <div className="intro">
              <div className="flex-container">
                <div className="left-side">
                  <div className="page_title">
                    <h1> Degree of Active Listening Behaviour </h1>
                  </div>
                    <div className="sub_title">Select each tab to know more.</div>
                <div className="container white">
                  <div className="box1">
                    
                    <button className="button_01 white"  onClick={this.openPopup1.bind(this)}> Repeating</button>
                      
                      <div>
                     {
                    this.displayPopup1()
                    }
                      </div>
                  </div>
                    
                    <div className="arrow"><img src="/app/assets/images/template/arrow-2.png" /></div>
                    
                  <div className="box2">
                    
                    <button className="button_02"  onClick={this.openPopup2.bind(this)}> Paraphrasing</button>
                       <div>
                      {
                              this.displayPopup2()
                          }
                      </div>
                      
                  </div>
                    
                     <div className="arrow"><img src="/app/assets/images/template/arrow-2.png" /></div>
                 
                   <div className="box3">
                    <button className="button_03"  onClick={this.openPopup3.bind(this)}> Reflecting </button>
                       <div>
                      {
                              this.displayPopup3()
                          }
                      </div>
                  
                 </div>
>>>>>>> 0175e8c9db0d2470f26d620fef18db9981aa86b3
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
<<<<<<< HEAD
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
=======
            <div className="intro">
              <div className="flex-container">
                <div className="left-side">
                  <div className="page_title">
                    <h1> Degree of Active Listening Behaviour </h1>
                  </div>
                    <div className="sub_title">Select each tab to know more.</div>
                <div className="container white">
                  <div className="box1">
                    
                    <button className="button_01 white"  onClick={this.openPopup1.bind(this)}> Repeating</button>
                      
                      <div>
                     {
                    this.displayPopup1()
                    }
                      </div>
                  </div>
                    
                    <div className="arrow"><img src="/app/assets/images/template/arrow-2.png" /></div>
                    
                  <div className="box2">
                    
                    <button className="button_02"  onClick={this.openPopup2.bind(this)}> Paraphrasing</button>
                       <div>
                      {
                              this.displayPopup2()
                          }
                      </div>
                      
                  </div>
                    
                     <div className="arrow"><img src="/app/assets/images/template/arrow-2.png" /></div>
                 
                   <div className="box3">
                    <button className="button_03"  onClick={this.openPopup3.bind(this)}> Reflecting </button>
                       <div>
                      {
                              this.displayPopup3()
                          }
                      </div>
                  
                 </div>
>>>>>>> 0175e8c9db0d2470f26d620fef18db9981aa86b3
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
<<<<<<< HEAD
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
=======
            <div className="intro">
              <div className="flex-container">
                <div className="left-side">
                  <div className="page_title">
                    <h1> Degree of Active Listening Behaviour </h1>
                  </div>
                    <div className="sub_title">Select each tab to know more.</div>
                <div className="container white">
                  <div className="box1">
                    
                    <button className="button_01 white"  onClick={this.openPopup1.bind(this)}> Repeating</button>
                      
                      <div>
                     {
                    this.displayPopup1()
                    }
                      </div>
                  </div>
                    
                    <div className="arrow"><img src="/app/assets/images/template/radio_over.png" /></div>
                    
                  <div className="box2">
                    
                    <button className="button_02"  onClick={this.openPopup2.bind(this)}> Paraphrasing</button>
                       <div>
                      {
                              this.displayPopup2()
                          }
                      </div>
                      
                  </div>
                    
                     <div className="arrow"><img src="/app/assets/images/template/radio_over.png" /></div>
                 
                   <div className="box3">
                    <button className="button_03"  onClick={this.openPopup3.bind(this)}> Reflecting </button>
                       <div>
                      {
                              this.displayPopup3()
                          }
                      </div>
                  
                 </div>
>>>>>>> 0175e8c9db0d2470f26d620fef18db9981aa86b3
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
