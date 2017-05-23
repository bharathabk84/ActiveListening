import React from 'react';
import MediaQuery from 'react-responsive';
export default class Interactivity4 extends React.Component {
  constructor(props) {
    super(props);
   
  }

 
  render() {
    return (
      <div className="interactivity4">
        <MediaQuery query='(min-device-width: 1224px)'>
        <div className="content">
          <div className="bg">
            <div className="intro">
                  <div className="page_title white">
                    <h1>Active Listening Behaviour</h1>
                  </div>
              
        
              <div className="flex-container">
                  <div className="left-side">
                      <div className="left_content">
                  Active listening is paying attention to other people in a manner where they feel that you hear their message and that you fully understand them</div>
                  
                  </div>
                <div className="right-side">
                  <div className="sub-heading white">
                    WHAT IS <div className="highlight">Active Listening?</div></div>
                    <div className="right_content">Active listening involves:</div>
                    <div className="container black">
                    <div className="box1"><div className="box_img"><img src="/app/assets/images/template/active_01.png" /></div>
                         <div className="box_text">Hearing/Comprehending</div>
                        </div>
                       
                   
                   <div className="box2"><div className="box_img"><img src="/app/assets/images/template/active_02.png" /></div>
                         <div className="box_text">Attending/Retaining</div>
                        </div>
                   <div className="box3"><div className="box_img"><img src="/app/assets/images/template/active_03.png" /></div>
                         <div className="box_text">Responding</div>
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
            <div className="intro">
                  <div className="page_title white">
                    <h1>Active Listening Behaviour</h1>
                  </div>
              
        
              <div className="flex-container">
                  <div className="left-side">
                       <div className="pc-img"><img src="/app/assets/images/template/Pc-image.png" /></div>
                      <div className="left_content">
                  Active listening is paying attention to other people in a manner where they feel that you hear their message and that you fully understand them</div>
                  
                  </div>
                <div className="right-side">
                  <div className="sub-heading white">
                    WHAT IS <div className="highlight">Active Listening?</div></div>
                    <div className="right_content">Active listening involves:</div>
                    <div className="container black">
                    <div className="box1"><div className="box_img"><img src="/app/assets/images/template/active_01.png" /></div>
                         <div className="box_text">Hearing/Comprehending</div>
                        </div>
                       
                   
                   <div className="box2"><div className="box_img"><img src="/app/assets/images/template/active_02.png" /></div>
                         <div className="box_text">Attending/Retaining</div>
                        </div>
                   <div className="box3"><div className="box_img"><img src="/app/assets/images/template/active_03.png" /></div>
                         <div className="box_text">Responding</div>
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
            <div className="intro">
                  <div className="page_title white">
                    <h1>Active Listening Behaviour</h1>
                  </div>
               <div className="sub-heading white">
                    WHAT IS <div className="highlight">Active Listening?</div></div>
              <div className="flex-container">
                
                      <div className="left_content">
                  Active listening is paying attention to other people in a manner where they feel that you hear their message and that you fully understand them</div>
                  
                 
                
                    <div className="right_content">Active listening involves:</div>
                    <div className="container black">
                    <div className="box1"><div className="box_img"><img src="/app/assets/images/template/active_01.png" /></div>
                         <div className="box_text">Hearing/Comprehending</div>
                        </div>
                       
                   
                   <div className="box2"><div className="box_img"><img src="/app/assets/images/template/active_02.png" /></div>
                         <div className="box_text">Attending/Retaining</div>
                        </div>
                   <div className="box3"><div className="box_img"><img src="/app/assets/images/template/active_03.png" /></div>
                         <div className="box_text">Responding</div>
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
