import Link from 'next/link';
import Router from 'next/router';
import {FaSearch} from 'react-icons/fa';
import {IoIosChatboxes} from 'react-icons/io';
import {IoIosContact} from 'react-icons/io';
import {MdWarning} from 'react-icons/md';
import {GiElephant} from 'react-icons/gi';
import './index.css';

function ClickIndex(){

    document.querySelector("#index").style.right = "-100%";
    document.querySelector("#content_btns").style.left = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)
    // if(confirm("Are you sure?")){
    // // move to ChatPage
    // Router.push("/ChatPage");
    // }
}

const Index = () => <div id="mainapp">
    <div id="index" onClick={ClickIndex}>Index</div>
    <div id="content_btns">
        <FaSearch size="20px"/>
        <Link href="/ChatPage"><button><IoIosChatboxes color="purple" size="17px" /> Chats!</button></Link>
        <Link href="/Contact"><button><IoIosContact color="purple" size="17px"/> Contact Me</button></Link>
        <Link href="/About"><button><MdWarning color="purple" size="17px" /> About Me</button></Link>
        <Link href="/Fun"><button><GiElephant color="purple" size="17px" /> Have Fun!!</button></Link>
    </div>
</div>

export default Index;