import React, { useState, useEffect } from 'react';
import './styles/style.css'
import './styles/custom.css'

export function ChatInput({sendTextToParent}){
  const [isSpeech, setIsSpeech] = useState(false)
  const [textInput, setTextInput] = useState("")
  const [micButtonHide, setMicButtonHide] = useState(false)
  const [listenButtonHide, setListenButtonHide] = useState(true)
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      console.log('In UseEffects '+textInput)
      //send to parent only when you press send button
      // sendTextToParent(textInput);
  },[textInput])

    function changeIconAndListen(e){
        console.log("In changeIconAndListen")
        e.preventDefault()
        if (textInput === "")
        return
      // appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
        getResponse(textInput, false);

    setTextInput("")
  }
    function getResponse(msgText, isSpeech) {
      console.log("In getResponse")
        if(isSpeech) {
            //unhide
            setMicButtonHide(false)
            //hide listen
            setListenButtonHide(true)
        }
        // if no text then return
        if (textInput === "")
            return
        else
            botResponse(msgText, isSpeech)
    }
   function processText(){
      getResponse(textInput, isSpeech)
      sendTextToParent(textInput)
   }

    function botResponse() {
        console.log("In botResponse")
        const fetchData = async () => {
            try {
                //Host Url
                this.baseURL = "http://127.0.0.1:5000"
                const response = await fetch(this.baseURL + '/get?msg=' + textInput);
                console.log(response)
                if (!response.ok) {
                    console.log('response is not OK')
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                console.log(data)
            }catch (e) {
              console.log(e.toString())
            }
        }
    }
      // Bot Response
      //  (data)=> {
      //      console.log(rawText);
      //      console.log(data);
      //      eval('var obj=' + data);
      //      console.log(obj);
      //      response1 = obj;
      //      var msgText;
      //      if (typeof (response1) == 'object') {
      //          if (!response1["error"]) {
      //              name = response1.org || response1.name;
      //              tag = response1.tag;
      //              msgText = "Opening " + tag;
      //              if (name != 'undefined') {
      //                  msgText = msgText + " for " + name;
      //              }
      //              // appendMessage(BOT_NAME, BOT_IMG, "left",msgText);
      //              Console.log(tag)
      //
      //          } else {
      //              msgText = response1['error']
      //              // appendMessage(BOT_NAME, BOT_IMG, "left", response1['error'])
      //              Console.log(response1['error']);
      //          }
      //      } else {
      //          msgText = data;
      //          // appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
      //      }
      //      //   if (isSpeechInput) {
      //      //     speakOut(msgText);
      //      //   }
      //      // });
      //  }
    // }
    return(
            <form className="msger-inputarea" onSubmit={processText}>
            <input type="text" className="msger-input" id="textInput" onChange={e => setTextInput(e.target.value)}
                   placeholder="Enter your message..."/>
                <button type="submit" className="msger-send-btn ml"  id="btnSend"  >
                    <i className="material-icons" style={{ fontSize:36+'px'}}>send</i>
                </button>
                <button className="msger-send-btn ml mr" id="btnSpeak" hidden={micButtonHide} onClick={changeIconAndListen}>
                    <i className="material-icons" style={{ fontSize:36+'px' }}>mic</i>
                </button>
                <button className="msger-send-btn ml mr" id="btnListen" hidden={listenButtonHide}>
                    <i className="material-icons" style={{ fontSize:36+'px'}}>hearing</i>
                </button>
        </form>
    )
}