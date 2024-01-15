import React, {useContext, useEffect, useState} from 'react';
import { Container } from 'reactstrap';
import { getTokenOrRefresh } from './token_util';
import './styles/style.css'
import './styles/custom.css'
import {ChatMain} from './ChatMain'
import {ChatHeader} from'./ChatHeader'
import {useGlobalContext} from './GlobalContext';

import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';


const speechsdk = require('microsoft-cognitiveservices-speech-sdk')

export default function App() {

    const {defaultMessage} =  useGlobalContext()
    const {globalMessageList, setGlobalMessageList} = useGlobalContext()

    const childGlobalMessageList = (inGlobalMessageList)=>{
        setGlobalMessageList(inGlobalMessageList)
    }

    // const childSetTheMessage = (msg, mtype)=>{
    //     const message = createAMessageObject( msg, mtype)
    //     setMessage(message)
    // }
    //
    // useEffect(()=>{
    //    globalMessageList.push(message)
    //    console.log(globalMessageList)
    //    setGlobalMessageList(globalMessageList)
    //     console.log(globalMessageList.toJSON())
    //     // Stringify before saving in the localStorage
    //    localStorage.setItem("messageList", globalMessageList.stringify())
    // },[message])

    const [displayText, setDisplayText] = useState('INITIALIZED: ready to test speech...');
    const [player, updatePlayer] = useState({p: undefined, muted: false});

    const localValue = localStorage.getItem('loggedInUser')


      const getHoursAndMinutesFromDate = () => {
         let currentDate = new Date();
         console.log(currentDate)
         let h = "0" + currentDate.getHours();
         let m = "0" + currentDate.getMinutes();
         let time = h.slice(-2)+":"+m.slice(-2)
       return time;
    };

    function createAMessageObject(msg, messageType){
        const mtype = messageType ?? "question"
        return {'messageTime':getHoursAndMinutesFromDate(), 'messageText':msg, 'messageType': mtype}
    }


    async function sttFromMic() {
        const tokenObj = await getTokenOrRefresh();
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
        speechConfig.speechRecognitionLanguage = 'en-US';
        
        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

        setDisplayText('speak into your microphone...');

        recognizer.recognizeOnceAsync(result => {
            if (result.reason === ResultReason.RecognizedSpeech) {
                setDisplayText(`RECOGNIZED: Text=${result.text}`);
            } else {
                setDisplayText('ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.');
            }
        });
    }

    async function textToSpeech() {
        const tokenObj = await getTokenOrRefresh();
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
        const myPlayer = new speechsdk.SpeakerAudioDestination();
        updatePlayer(p => {p.p = myPlayer; return p;});
        const audioConfig = speechsdk.AudioConfig.fromSpeakerOutput(player.p);

        let synthesizer = new speechsdk.SpeechSynthesizer(speechConfig, audioConfig);

        const textToSpeak = 'This is an example of speech synthesis for a long passage of text. Pressing the mute button should pause/resume the audio output.';
        setDisplayText(`speaking text: ${textToSpeak}...`);
        synthesizer.speakTextAsync(
        textToSpeak,
        result => {
            let text;
            if (result.reason === speechsdk.ResultReason.SynthesizingAudioCompleted) {
                text = `synthesis finished for "${textToSpeak}".\n`
            } else if (result.reason === speechsdk.ResultReason.Canceled) {
                text = `synthesis failed. Error detail: ${result.errorDetails}.\n`
            }
            synthesizer.close();
            synthesizer = undefined;
            setDisplayText(text);
        },
        function (err) {
            setDisplayText(`Error: ${err}.\n`);

            synthesizer.close();
            synthesizer = undefined;
        });
    }



    async function handleMute() {
        updatePlayer(p => { 
            if (!p.muted) {
                p.p.pause();
                return {p: p.p, muted: true}; 
            } else {
                p.p.resume();
                return {p: p.p, muted: false}; 
            }
        });
    }

    async function fileChange(event) {
        const audioFile = event.target.files[0];
        console.log(audioFile);
        const fileInfo = audioFile.name + ` size=${audioFile.size} bytes `;

        setDisplayText(fileInfo);

        const tokenObj = await getTokenOrRefresh();
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
        speechConfig.speechRecognitionLanguage = 'en-US';

        const audioConfig = speechsdk.AudioConfig.fromWavFileInput(audioFile);
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

        recognizer.recognizeOnceAsync(result => {
            let text;
            if (result.reason === ResultReason.RecognizedSpeech) {
                text = `RECOGNIZED: Text=${result.text}`
            } else {
                text = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
            }

            setDisplayText(fileInfo + text);
        });
    }

    return (
        <>
            <ChatHeader/>
            <ChatMain/>
        </>

    );
}