import Link from 'next/link';
import Router from 'next/router';
import Header from '../../comps/Header';
import CustomButton from '../../comps/CustomButton';
import {GiWhiteCat} from 'react-icons/gi';
import {FaDog} from 'react-icons/fa';
import {FaEarlybirds} from 'react-icons/fa';
import {GiSnakeTongue} from 'react-icons/gi';
import './fun.css';

function ChangePage(){
    document.querySelector("#fun_stuff").style.right = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)
}

function FunClick(){
    document.querySelector("#fun_stuff").style.opacity = "0%";
    setTimeout(function(){
        Router.push("/About");
    }, 1000)
}

function IconSize(){
    document.querySelector("#snake_icon").style.width="500px";
    document.querySelector("#snake_icon").style.height="500px";
    document.querySelector("#hiss").innerText="HIISSSSSSS!!!!";
}


const Fun = () => <div id="fun_stuff">
        <Header text ="Welcome to the Fun Page!! :)" fontSize={24}/>
        <div>*Don't get your hopes up; it's not that fun*</div>
        <CustomButton onClick={ChangePage} text="Surprise" />
        <CustomButton onClick={FunClick} text="What's this" color="#279EDA"/>
        <div>dare to click on the snake</div>
        <div className="animal_icons">
            <div className="inner_icon" id="cat_icon"><GiWhiteCat size="50px"/></div>
            <div className="inner_icon" id="dog_icon"><FaDog size="50px" color="grey" /></div>
            <div className="inner_icon" id="bird_icon"><FaEarlybirds size="50px" color="orange" /></div>
            <div className="inner_icon"><GiSnakeTongue id="snake_icon" onClick={IconSize} color="green" /></div>
        </div>
        <div id="hiss"></div>
</div>

export default Fun;