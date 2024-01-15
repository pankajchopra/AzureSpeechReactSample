import './styles/style.css'
import './styles/custom.css'
export function ChatHeader(){
    return (
            <div id="header" className="msger-header">
                <div className="msger-header-icon">
                    <img src="gpt.png" alt='ChatGPT' style={{height: 51+'px'}} title="GPT Icon"/>
                </div>
                <div className="msger-header-title">
                    Advisor
                </div>
                <div className="msger-header-title gold">
                    GPT
                </div>
            </div>
            )

}