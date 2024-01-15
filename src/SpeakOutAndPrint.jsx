import './styles/style.css'
import './styles/custom.css'
import {useState} from "react";
export function SpeakOutAndPrint({messageText}){
    const [message, setMessage] = useState("")
    function speakOut(){
      setMessage(message)
      const speechSynthesis = window.speechSynthesis;
      const speechResponse = new SpeechSynthesisUtterance(message);
      speechSynthesis.speak(speechResponse);
    }
    return (
            <label>{messageText}</label>
            )

}