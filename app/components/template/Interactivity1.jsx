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
        
        </div>
          </MediaQuery>
            
              <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
        <div className="content">
          <div className="bg">
              
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
        
        </div>
          </MediaQuery>
            
              <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
        <div className="content">
          <div className="bg">
              
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
        
        </div>
          </MediaQuery>
      </div>
    )
  }
}
