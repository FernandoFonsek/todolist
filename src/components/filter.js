import React from "react";

//styles
import "../styles/btn.css";



const Filter = ({handleFilter, focoState})=>{

    return(
        <div className="btn-container">
        <button className={focoState==="all"?"all":""} onClick={()=>handleFilter("all")}>All</button>
        <button className={focoState==="completed"?"completed":""} onClick={()=>handleFilter("completed")}>Completed</button>
        <button className={focoState==="reset"?"reset":""} onClick={()=>handleFilter("reset")}>Reset</button>
    </div>
     )


};

export default Filter;