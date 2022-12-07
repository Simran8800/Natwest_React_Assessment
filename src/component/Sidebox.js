import React from "react";
import "./Box.css";
import { VscHome } from 'react-icons/vsc';
import { SlUser } from 'react-icons/sl';
import { SlUserFollowing } from 'react-icons/sl';
import { GiBanknote } from 'react-icons/gi';
import { GiCementShoes } from 'react-icons/gi';
import { MdShoppingBag } from 'react-icons/md';
import { HiInboxIn } from 'react-icons/hi';
import { IoSettingsSharp } from 'react-icons/io5';
import { AiOutlineLineChart} from 'react-icons/ai';



export default function sidediv(){
    return(
        <div id="side">
            <div id="grid1">
                <div id="subbox"><h4><VscHome/>   Dashboard </h4></div>
                <div id="subbox"><h4><SlUser/>   Employee {"<"}</h4></div>
                <div id="subbox"><h4><SlUserFollowing/>   Attendance  {"<"}</h4></div>
                <div id="subbox"><h4><GiCementShoes/>   Site/Field Track  {"<"} </h4></div>
                <div id="subbox"><h4><GiBanknote/>   Payroll  {"<"}</h4></div>
                <div id="subbox"><h4><MdShoppingBag/>   Statuatory Compliances{"<"}</h4></div>
                <div id="subbox"><h4><HiInboxIn/>   Leaves  {"<"}</h4></div>
                <div id="subbox"><h4><IoSettingsSharp/>  Asset Management  {"<"}</h4></div>
                <div id="subbox"><h4><AiOutlineLineChart/>   Goals & Performanc  {"<"}</h4></div>
                <div id="subbox"><h4><SlUser/>   Recruitment {"V"}</h4></div>
                <div id="text"><h5>Openings</h5>  <h5>   Candidates</h5>
                <h5>Interview Process</h5></div>
            </div>
        </div>
    )
}
