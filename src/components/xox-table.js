import "./xox-table.css";
import XoxContent from "./xox-content";
import { useState } from "react";

export default function XoxTable() {
    const n = 3;
    const [counter,setCounter] = useState(1);
const [position,setPosition] = useState({"00":0,"01":0,"02":0,"10":0,"11":0,"12":0,"20":0,"21":0,"22":0});
const initialPosition = {"00":0,"01":0,"02":0,"10":0,"11":0,"12":0,"20":0,"21":0,"22":0};
const matchPositions = {match1:["00","01","02"],match2:["10","11","12"],match3:["20","21","22"],match4:["00","10","20"],
match5:["01","11","21"],match6:["02","12","22"],match7:["00","11","22"],match8:["02","11","20"]}

const checkWinner = ()=>{
    let winner = -1;
 Object.keys(matchPositions).map((data)=>{
    if((position[matchPositions[data][0]]!==0 &&position[matchPositions[data][1]]!==0 && position[matchPositions[data][2]]!==0 && position[matchPositions[data][0]]=== position[matchPositions[data][1]])&&(position[matchPositions[data][1]]===position[matchPositions[data][2]])){
winner =position[matchPositions[data][0]];
console.log(matchPositions[data][0],matchPositions[data][1],matchPositions[data][2])

    }
})
if(winner!== -1){
alert("winner"+winner);
setPosition(initialPosition);
}
}

//const findPlayer = ()=>

const handleClickHandler = (event,rowIndex,columnIndex)=>{
    debugger;
    //console.log(matrix);
    let key = rowIndex+''+columnIndex;
    if(position[key]!== 0){
        return ;
    }
    setCounter(counter+1);
    let player =  counter%2 !== 0 ? 1:2;

    let copy = position;
    copy[key]=player;

    console.log("clicked",rowIndex,columnIndex);
    
    let targetEle = event.target.nodeName === "IMG" ? event.target : event.target.children[0];
    targetEle.src =`http://localhost:3000/${player}.jpg`;

        setPosition(()=>{
            return{...copy}
          });
    
          setTimeout(()=>{
            checkWinner();
          },600);

}
    return (
<div>
    <h3>Players Turn:{counter%2 !== 0 ? "Player 1":"Player 2"}</h3>
    <table>
        <tbody>
            <XoxContent position={position} clickFn = {handleClickHandler} ></XoxContent>
        </tbody>
    </table>
</div>
    )     
    }