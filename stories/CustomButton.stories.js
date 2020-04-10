import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage';

export default {
    title:"My comps",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

function CancelClick(){
    alert("cancel");
}

export const MyCustomButtonWithOptions = () => <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick}
/>;

export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input
    placeholder="Custom placeholder"
/>;

export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />;

/*export const PageWithCustomButtons = () => <div>
    <Header 
    fontSize={24}
    color="lightblue"
    onMousOver={CancelClick}
    />
    <Header 
    fontSize={18}
    color="gold"
    onMousOver={OkClick}
    />
    <Header 
    fontSize={10}
    color="#FAB"
    onMousOver={CancelClick}
    />
    <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick}
    />
    <CustomButton 
    color="#3F5"
    text="OK" 
    onClick={OkClick}
    />
    <CustomButton 
    color="#F3F"
    text="Submit" />
    <CustomButton
    text="Menu" />
</div>

function CancelClick(){
    alert("cancel");
}

function OkClick(){
    alert("OK");
}
*/