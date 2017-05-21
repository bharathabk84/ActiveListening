import React from 'react';
<<<<<<< HEAD
=======
import MediaQuery from 'react-responsive';
>>>>>>> 0175e8c9db0d2470f26d620fef18db9981aa86b3

export default class DragDrop1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dragdrop1">
<<<<<<< HEAD
        <div className="content">
          <div className="bg">
            <div className="container">
              <div className="summary">
                <div className="summary_heading">
                  <h1 className="white">Activity</h1>
                  <div className="summary_list white">
                    <span> Can you match the type of examination to its respective description.</span><br/><br/>
                    <span className="instruction_text">
                      <img src="/app/assets/images/template/hand_icon.png"/>
                      <span>Drag the exam type to its respective description and click Submit.</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="drag_drop white">
                <div className="activity">
                  <table>
                    <tbody>
                      <tr>
                        <td className="quiz"><div className="quiz_box">Are almost never announced in advance to reduce the chances of documents being destroyed.</div></td>
                        <td className="drop">
                          <div className="drop_box"></div>
                        </td>
                        <td className="drag">
                          <div className="drag_box">
                            <button id="btn_01">Sweep Exams</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="quiz">
                          <div className="quiz_box">Are held as SEC would like more information to determine whether additional guidance or regulation is required. </div>
                        </td>
                        <td className="drop">
                          <div className="drop_box"></div>
                        </td>
                        <td className="drag">
                          <div className="drag_box">
                            <button id="btn_01">Cause Exams</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
=======
              <MediaQuery query='(min-device-width: 1224px)'>
        <div className="content">
          <div className="bg">
            <div className="intro">
            <div className="container">
              
                <div className="page_title">
                  <h1>Tips on Active Listening</h1>
                 
                </div>
             <div className="sub_heading">
                  Here are some tips on how you can practice active listening
                 
                </div>
                
                <div className="top">
                <div className="flex-container">
                     
                <div className="box1">
                   
                    <div className="box_header"><div className="heading">Face the speaker</div>
                        <div className="box_no">01</div></div>
                     <div className="box_content">Sit/stand straight and lean slightly forword to show your attentiveness</div>
                    </div>
                
                <div className="box2">
                     <div className="box_header">
                         <div className="heading">Respond appropriately</div>
                    <div className="box_no">03</div>
                    </div>
                     <div className="box_content">Respond to the speaker by noddling your head occasionally. You can also use pharases like "I see or I understand"</div>
                         </div>
                    
                    <div className="box3">
                         <div className="box_header"><div className="heading">Do not interrupt</div>
                        <div className="box_no">05</div>
                        </div>
                         <div className="box_content">When the speaker speaks, listen to what he/she is saying and avoid interrupting them midway</div>
                    </div>
                     <div className="box4">
                          <div className="box_header"><div className="heading">Even if the speaker is speaking against you, wait to defend yourself until the person finishes</div>
                              <div className="box_no">07</div></div>
                         <div className="box_content">If you interrupt, the speaker will feel as though his or her point has been made. That way you'll not know their entire argument, which can help you give a better response</div>
                         </div>
                
                </div>
                </div>
                 <div className="bottom">
                    <div className="flex-container">
                       
                <div className="box1">
                     <div className="box_header">
                         <div className="heading">Maintain eye contact</div>
                         <div className="box_no">02</div></div>
                     <div className="box_content">Look into the speaker's eyes and avoid getting distracted by people moving around</div>
                    
                    </div>
                <div className="box2">
                     <div className="box_header">
                           <div className="heading">Focus solely on what the speaker is saying </div>
                         <div className="box_no">04</div></div>
                     <div className="box_content">Try not to think about what you are going to say in response. The clarifications or questions can come after the speaker has finished</div>
                   
                    </div>
                <div className="box3">
                     <div className="box_header">
                           <div className="heading">Engage yourself</div>
                         <div className="box_no">06</div></div>
                     <div className="box_content">After the speaker has finished speaking, confirm your understanding by saying "So from what you saidm I understand that... Am I right?", or "when you said..., you meant... Is that correct?"</div>
                   
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
            <div className="container">
              
                <div className="page_title">
                  <h1>Tips on Active Listening</h1>
                 
                </div>
             <div className="sub_heading">
                  Here are some tips on how you can practice active listening
                 
                </div>
                
                <div className="top">
                <div className="flex-container">
                     
                <div className="box1">
                   
                    <div className="box_header"><div className="heading">Face the speaker</div>
                        <div className="box_no">01</div></div>
                     <div className="box_content">Sit/stand straight and lean slightly forword to show your attentiveness</div>
                    </div>
                
                <div className="box2">
                     <div className="box_header">
                         <div className="heading">Respond appropriately</div>
                    <div className="box_no">03</div>
                    </div>
                     <div className="box_content">Respond to the speaker by noddling your head occasionally. You can also use pharases like "I see or I understand"</div>
                         </div>
                    
                    <div className="box3">
                         <div className="box_header"><div className="heading">Do not interrupt</div>
                        <div className="box_no">05</div>
                        </div>
                         <div className="box_content">When the speaker speaks, listen to what he/she is saying and avoid interrupting them midway</div>
                    </div>
                     <div className="box4">
                          <div className="box_header"><div className="heading">Even if the speaker is speaking against you, wait to defend yourself until the person finishes</div>
                              <div className="box_no">07</div></div>
                         <div className="box_content">If you interrupt, the speaker will feel as though his or her point has been made. That way you'll not know their entire argument, which can help you give a better response</div>
                         </div>
                
                </div>
                </div>
                 <div className="bottom">
                    <div className="flex-container">
                       
                <div className="box1">
                     <div className="box_header">
                         <div className="heading">Maintain eye contact</div>
                         <div className="box_no">02</div></div>
                     <div className="box_content">Look into the speaker's eyes and avoid getting distracted by people moving around</div>
                    
                    </div>
                <div className="box2">
                     <div className="box_header">
                           <div className="heading">Focus solely on what the speaker is saying </div>
                         <div className="box_no">04</div></div>
                     <div className="box_content">Try not to think about what you are going to say in response. The clarifications or questions can come after the speaker has finished</div>
                   
                    </div>
                <div className="box3">
                     <div className="box_header">
                           <div className="heading">Engage yourself</div>
                         <div className="box_no">06</div></div>
                     <div className="box_content">After the speaker has finished speaking, confirm your understanding by saying "So from what you saidm I understand that... Am I right?", or "when you said..., you meant... Is that correct?"</div>
                   
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
            <div className="container">
              
                <div className="page_title">
                  <h1>Tips on Active Listening</h1>
                 
                </div>
             <div className="sub_heading">
                  Here are some tips on how you can practice active listening
                 
                </div>
                
               
                <div className="flex-container">
                     
                <div className="box1">
                   
                    <div className="box_header"><div className="heading">Face the speaker</div>
                        <div className="box_no">01</div></div>
                     <div className="box_content">Sit/stand straight and lean slightly forword to show your attentiveness</div>
                    </div>
                    
                     <div className="box2">
                     <div className="box_header">
                         <div className="heading">Maintain eye contact</div>
                         <div className="box_no">02</div></div>
                     <div className="box_content">Look into the speaker's eyes and avoid getting distracted by people moving around</div>
                    
                    </div>
                
                <div className="box3">
                     <div className="box_header">
                         <div className="heading">Respond appropriately</div>
                    <div className="box_no">03</div>
                    </div>
                     <div className="box_content">Respond to the speaker by noddling your head occasionally. You can also use pharases like "I see or I understand"</div>
                         </div>
                    
                     
                <div className="box4">
                     <div className="box_header">
                           <div className="heading">Focus solely on what the speaker is saying </div>
                         <div className="box_no">04</div></div>
                     <div className="box_content">Try not to think about what you are going to say in response. The clarifications or questions can come after the speaker has finished</div>
                   
                    </div>
                    
                    
                    <div className="box5">
                         <div className="box_header"><div className="heading">Do not interrupt</div>
                        <div className="box_no">05</div>
                        </div>
                         <div className="box_content">When the speaker speaks, listen to what he/she is saying and avoid interrupting them midway</div>
                    </div>
                    
                     <div className="box6">
                     <div className="box_header">
                           <div className="heading">Engage yourself</div>
                         <div className="box_no">06</div></div>
                     <div className="box_content">After the speaker has finished speaking, confirm your understanding by saying "So from what you saidm I understand that... Am I right?", or "when you said..., you meant... Is that correct?"</div>
                   
                    </div>
                    
                    
                     <div className="box7">
                          <div className="box_header"><div className="heading">Even if the speaker is speaking against you, wait to defend yourself until the person finishes</div>
                              <div className="box_no">07</div></div>
                         <div className="box_content">If you interrupt, the speaker will feel as though his or her point has been made. That way you'll not know their entire argument, which can help you give a better response</div>
                         </div>
                
                </div>
                </div>
                
                       
              
               
                        </div>
                
                </div>
                
                </div>
            
             
       
              
               </MediaQuery>
              
      </div>
            
>>>>>>> 0175e8c9db0d2470f26d620fef18db9981aa86b3
    )
  }
}
