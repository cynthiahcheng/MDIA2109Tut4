import React, {useState, useEffect} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

/*
var welcome = "Welcome to my App!"
function setWelcome(){
    welcome = "Start with sending a message.";
    document.querySelector("#welcome").innerText = welcome;
}
*/

const ChatPage = ({}) => {
    const [welcome, setWelcome] = useState("Welcome to my App!");
    const [msg, setMsg] = useState("Please type something!");
    const [resp, setResp] = useState("Let me respond to you!");
    const [color, setColor] = useState("#CC4E4E");
    const [text, setText] = useState("Cancel");

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#chatpage").style.left=0;
        }, 50);
    }, []);


    return <div id="chatpage">
        <div id="welcome">
            <Header fontSize={32} text={welcome} />
        </div>
        <div id="chats" onClick={()=>{
            setWelcome("Start with sending a message.");
        }}>
            <Chat name={"User 1"} msg={msg} />
            <p />
            <Chat img={"https://i7.pngguru.com/preview/234/79/830/robotics-technology-computer-icons-internet-bot-robotics.jpg"} name={"Chat Bot"} backgroundColor={"#FAB"} msg={resp} />
        </div>
        <div id="controls">
            <Input onClick={(cynthia)=>{
                setMsg(cynthia);
                var new_resp = checkResponse(cynthia);
                setResp(new_resp);
                /*if(val === "hi"){
                    setResp("I love pie");
                }*/
            }} /> 
        </div>
        <div id="custom_button">
            {/* When the button is clicked, setColor to another color, and
            setText to another text. */}
            <CustomButton color={color} text={text} onClick={()=>{
                var new_color = "#999";
                var new_text = "Cancelled"
                setColor(new_color);
                setText(new_text);
                }} />
        </div>
    </div>
}

function checkResponse(inp){
    switch(inp.toLowerCase()){
        case "hi":
            return "I love pie";
        case "how are you?":
            return "Great!";

        default:
            return "I don't understand what you're trying to say";
    }
}

ChatPage.defaultProps = {

}

export default ChatPage;