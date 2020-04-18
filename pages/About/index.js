import Link from 'next/link';
import Router from 'next/router';
import Header from '../../comps/Header';
import CustomButton from '../../comps/CustomButton';
import './about.css';

function GoHome(){
    Router.push("/index");
}

const About = () => <div>
    <Header text="About Me" fontSize={24}/>
        <div>
            This is me!! I can't believe I made a new page <br/>
            and the link to Home (index.js) actually works lol. Yay me :) 
        </div>
    <CustomButton onClick={GoHome} text="Home" />

</div>

export default About;