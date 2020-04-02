import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title:"Custom Button",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;
export const MyHeader = () => <Header />;

export const PageWithCustomButtons = () => <div>
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