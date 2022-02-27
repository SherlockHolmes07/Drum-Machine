import React from "react"
import  {bankOne} from "./data.js"
import Button from "./Button.js"

/*
     keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
*/

export default function PreButton(props) {
  
  const button = bankOne.map((bankOne) =>(
    
      <Button keyCode={bankOne.keyCode} keyTrigger={bankOne.keyTrigger} id={bankOne.id} url={bankOne.url} setPhrase={props.setPhrase} power={props.power}/>  
 
));
  
  return (
    <div id="cont">
    {button}
    </div>
  );
}