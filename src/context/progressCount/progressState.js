import { useState } from "react";
import ProgressContext from "./progressContext";

const ProgressState = (props)=>{
    const [progress, setProgress] = useState(0);

    const SetProgress = (progressValue)=>{
        setProgress(progressValue);
    }

    return <ProgressContext.Provider value={{progress, SetProgress}}>
        {props.children}
    </ProgressContext.Provider>
}
export default ProgressState;