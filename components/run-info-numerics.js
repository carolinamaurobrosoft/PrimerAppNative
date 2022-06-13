import RunInfo from "./run-info";
import React from "react";

function RunInfoNumeric({title,value,unit}){
    return(
        <RunInfo 
            title={title}
            value={[value,unit].join('')}
        />
    );

}

export default RunInfoNumeric;
