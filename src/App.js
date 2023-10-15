import "./style.css"
import {useState} from "react"


//////////////////////////////////////////////////////
//                 APP
//////////////////////////////////////////////////////

export default function App(){
  let [showColors,setShowColors]=useState(false);
  let [changeColor,setChangeColor]=useState('');

  function toggleColor(){
    showColors===false?setShowColors(true):setShowColors(false);
  }

  function changesColor(color){
    setChangeColor(color);
    console.log(changeColor)
  }

  return(
    <div className="body" style={{backgroundColor:changeColor}}>
    <div>
      <h1 className="headingtext">Color Picker</h1>
    <div className="container">
      <div className="row">
        <Colors showColors={showColors} changeColor={changeColor} colorsArray={["red","green","yellow","blue","skyblue","whitesmoke","black","grey","violet","orange","brown"]} changesColorFunc={changesColor}/>
      </div>

      <button className="pickcolor" onClick={toggleColor}>Pick Color</button>
    </div>
    </div>
    </div>

  )
  
}

function Colors(props){

  return(
    <>
    {props.colorsArray.map((e,index)=>(
      <div className="colors" style={props.showColors===true?{display:"block",backgroundColor:e}:{display:"none"}} key={index} onClick={()=>props.changesColorFunc(e)}></div>
    ))}
    </>
  )
}