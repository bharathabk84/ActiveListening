import React from 'react';
import MediaQuery from 'react-responsive';
export default class Interactivity2 extends React.Component {
  constructor(props) {
    super(props);
   
  }

 
  render() {
    return (
      <div className="interactivity2">
        <MediaQuery query='(min-device-width: 1224px)'>
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
