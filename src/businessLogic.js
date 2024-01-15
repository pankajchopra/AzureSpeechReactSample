  <script>
    $('#startTime').text(formatDate(new Date()));
    $('#btnListen').hide();
    var name = '';
    if (localStorage.getItem('loggedInUser')) {
      name = JSON.parse(localStorage.getItem('loggedInUser')).name;
    }
    var greetingMsg = morningOrEvening() + name + ', I am your Virtual Assistant. Would you like to have your "Morning Briefing"? '
    $('#botMsg').text(greetingMsg);
    speakOut(greetingMsg);

    const msgerForm = get(".msger-inputarea");
    const msgerInput = get(".msger-input");
    const msgerChat = get(".msger-chat");
    const btnSpeak = document.getElementById('btnSpeak');
    const btnListen = document.getElementById('btnListen');

    // stores the transcript of speech recognized
        var content = "";
        // boolean flag
        var speechRecognitionIsOn = false;
        var speechRecognition = window.webkitSpeechRecognition
        // creates an instance of speechRecognition
        var recognition = new speechRecognition();
        // captures single result each time
        recognition.continuous = false;

        recognition.onstart = () => {
                // clears content (optional)
                if (content.length) {
                    content = '';
                }
            }
            recognition.onend = () => {
                // if (speechRecognitionIsOn) {
                //     recognition.start();
                // }
            }
            recognition.onerror = (event) => {
                // failed to recognize speech
                console.log('Speech recognition error detected: ' + event.error);
            }
            recognition.onresult = (event) => {
                let current = event.resultIndex;
                let transcript = event.results[current][0].transcript;
                content += transcript;
                console.log(transcript);
                recognition.stop();
                appendMessage(PERSON_NAME, PERSON_IMG, "right", transcript);
                getResponse(transcript, true);
            }
    btnSpeak.addEventListener("click", event => {
        speechRecognitionIsOn = true;
    console.log("voice recognition started");
    //recognition.start();
      $('#btnSpeak').hide();
      $('#btnListen').show();

      fetch('/process_input', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify('')
      }
      ).then(response => response.json()).then(data => {
        appendMessage(PERSON_NAME, PERSON_IMG, "right", data.textResponse);
        getResponse(data.textResponse, true);
      })
    });
    btnListen.addEventListener("click", event => {
    speechRecognitionIsOn = false;
    console.log("voice recognition stopped");
    recognition.stop();
    $('#btnListen').hide();
    $('#btnSpeak').show();

    });
    function speakOut(message) {
      const speechSynthesis = window.speechSynthesis;
      const speechResponse = new SpeechSynthesisUtterance(message);
      speechSynthesis.speak(speechResponse);
    }

    // Icons made by Freepik from www.flaticon.com
    const BOT_IMG = "../static/bot.svg";
    const PERSON_IMG = "../static/person.svg";
    const BOT_NAME = "    AG";
    const PERSON_NAME = "You";

    function getResponse(msgText, isSpeech) {
      if(isSpeech) {
        $('#btnSpeak').show();
        $('#btnListen').hide();
      }
       botResponse(msgText, isSpeech)


    }



    msgerForm.addEventListener("submit", event => {
      event.preventDefault();

      const msgText = msgerInput.value;
      if (!msgText) return;

      appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
      msgerInput.value = "";
      getResponse(msgText, false);
    });



    function appendMessage(name, img, side, text) {
      //   Simple solution for small apps
      const msgHTML = `<div class="msg ${side}-msg">

        <div class="msg-bubble">
          <div class="msg-text">${text}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
      </div>`;

      msgerChat.insertAdjacentHTML("beforeend", msgHTML);
      msgerChat.scrollTop += 500;
    }

    function botResponse(rawText, isSpeechInput) {

      // Bot Response
      $.get("/get", { msg: rawText }).done(function (data) {
        console.log(rawText);
        console.log(data);
        eval('var obj='+data);
        console.log(obj);
        response = obj;
        var msgText ;
        if(typeof(response) == 'object')
        {
          if(!response["error"]){
            name = response.org||response.name;
            tag = response.tag;
            msgText="Opening "+tag;
            if(name != 'undefined'){
                msgText=msgText+" for "+name;
            }
            appendMessage(BOT_NAME, BOT_IMG, "left",msgText);


                    if(tag == 'stockChart') {
                      openChart(response.symbol)
                    }
                    else if(tag == 'stockNews') {
                      openNews(response.symbol)
                    }
                    else if(tag == 'account360') {
                      openApp(response.symbol,response.name)
                    }
                    else if(tag == 'Client Management') {
                      console.log("sending message to client management");
                      parent.postMessage(response,"*")
                      openCRM()
                    }
                    else if(tag == 'page') {
                      openPage()
                    }
                    else if(tag == 'Advisor Copilot') {
                        openCopilot()
                    }
                    else if(tag == 'tradeTicket') {
                        openTradeTicket(response.symbol)
                    }

          }else{
            msgText = response['error']
            appendMessage(BOT_NAME, BOT_IMG, "left", response['error']);
          }
        }
        else
        {
          msgText= data;
          appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
        }
          if (isSpeechInput) {
            speakOut(msgText);
          }
        });

    }


    // Utils
    function get(selector, root = document) {
      return root.querySelector(selector);
    }

    function formatDate(date) {
      const h = "0" + date.getHours();
      const m = "0" + date.getMinutes();

      return `${h.slice(-2)}:${m.slice(-2)}`;
    }

    function morningOrEvening(){
      var today = new Date ()
      var curHr = today.getHours ()
      if (curHr < 12) { return 'Good morning ' }
      else if (curHr < 18) { return 'Good afternoon ' }
      else {return'Good evening ' }
    }
    document.addEventListener("DOMContentLoaded", function() {
      $.get("/refresh",{}).done(function () {
        console.log("Called Refresh /refresh api")
      });
    });

  </script>