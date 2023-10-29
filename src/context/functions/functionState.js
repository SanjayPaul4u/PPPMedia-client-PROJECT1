import React, { useContext, useRef, useState } from "react";
import FunctionContext from "./functionContext";
import PhotoContext from "../photos/photoContext";



const FunctionState = (props)=>{
    //______________________________________________________________
    // UPDATE MODAL - LOGICS
    // ______________________________________________________________
    const photo_context = useContext(PhotoContext);
    const {updateUserPhotoTitle} = photo_context;

    const clickUpdateModalRef = useRef();
    const updateModalCloseRef = useRef();

    const [modalTitle, setModalTitle] = useState("");
    const [titleId, setTitleId] = useState("")

    // ON ICON CLICK UPDATE
    const onClickOpenUpdateModalFunc = (id, title)=>{
        clickUpdateModalRef.current.click();
        setModalTitle(title);
        setTitleId(id);
        // console.log("Update id: "+ id);
    }

    // MODAL INPUT ONCHANGE FUNCTION
    const modalInputOnchangeFunc = (event)=>{
        setModalTitle(event.target.value);
    }
    
    // Update Submit Function
    const onclickUpdateFunc = () =>{
        updateUserPhotoTitle(titleId, modalTitle);
        updateModalCloseRef.current.click();
        // console.log("updated");
    }
    //______________________________________________________________
    // UPDATE MODAL - LOGICS
    // ______________________________________________________________

    return <FunctionContext.Provider value = {{clickUpdateModalRef, onClickOpenUpdateModalFunc, modalTitle, modalInputOnchangeFunc, onclickUpdateFunc, updateModalCloseRef } }>
            {props.children}
    </FunctionContext.Provider>
}

export default FunctionState;