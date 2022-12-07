import React from "react";
import "./Box.css";
import { BiTrashAlt } from 'react-icons/bi';
import { IoExtensionPuzzle } from 'react-icons/io5';

export default function Mainbox(){
    return(
        
        <div id="bodybox">
            <h4>Name<span id="colo">*</span></h4>
            <h3>Business Development Executive</h3>
            <hr id="line"></hr>
           <p ><IoExtensionPuzzle/>Interview Process Rounds</p>
                <div id="red"><h4>1</h4></div>
                <div id="blue"><h4><BiTrashAlt/></h4></div>
                <div id="yellow"><h4>2</h4></div>
                <div id="pink"><h4><BiTrashAlt/></h4></div>
                <div id="bodybox1"><b>Level <span id="colo">*</span></b><br></br>
                <b>1</b><hr></hr></div>
                <div id="bodybox2"><b>Name<span id="colo">*</span></b><br></br>
                <b>Telephonic Round</b><hr></hr>
                </div>
                <div id="bodybox3"><b>Select Interviewer <span id="colo">*</span></b><br id="gr"></br><b>GIRISHPRASAD KS</b>
                <hr></hr></div>
                <div id="bodybox4"><b>Level <span id="colo">*</span></b><br></br><b>2</b>
                <hr></hr></div>
                <div id="bodybox5"><b>Name <span id="colo">*</span></b> <br></br><b>Telephonic Round</b>
                <hr></hr></div>
                <div id="bodybox6"><b>Select Interviewer <span id="colo">*</span></b><br id="gr"></br><b>REKESH APPAJI</b>
                <hr></hr></div>
                <button id="addbtn">ADD NEW</button><br></br><br></br>
                 <button id="updatebtn">UPDATE</button>
                 <button id="canclebtn">CANCLE</button>
            {/* </div> */}
        </div>
    )
}

