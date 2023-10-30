import React, { useContext, useRef, useState } from "react";
import FunctionContext from "./functionContext";
import PhotoContext from "../photos/photoContext";
import OtherContext from "../others_api_call/otherContext";


const FunctionState = (props)=>{
    const photo_context = useContext(PhotoContext);
    const {updateUserPhotoTitle} = photo_context;
    const other_context = useContext(OtherContext);
    const {updateDp, updateNameAbout} = other_context;
    //______________________________________________________________
    // UPDATE title MODAL - LOGICS
    // ______________________________________________________________

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
    // UPDATE Dp MODAL- LOGICS (USER-> USER PROFILE)
    // ______________________________________________________________    

    const dpUpdateModalRef = useRef();
    const fileInputRef = useRef();
    const dpModalCloseRef = useRef();
    const [blobUrl, setBlobUrl] = useState(null)//// for showing in modal
    const [file, setFile] = useState("");

    // onClickImage for chooose file
    const onCLickImage = () =>{
        fileInputRef.current.click();
        
    }
    // onClickModal for open modal
    const onCLickModalBtn = () =>{
        dpUpdateModalRef.current.click();        
    }
    if(blobUrl){
        onCLickModalBtn();
    }
    // dp input onchange function
    const dpInputOnchangeFunc = (event) =>{
        const filesObj = event.target.files;
        setFile(filesObj[0])
        // console.log(filesObj[0]);
        if(filesObj[0]){
            const blob_url = URL.createObjectURL(filesObj[0]);
            setBlobUrl(blob_url);
        }
    }

    // When Modal will be cancel and Close by user
    const modalCancelNCloseFunc = ()=>{
        setBlobUrl(null);
        if (fileInputRef.current) { 
            fileInputRef.current.value = ""; 
            fileInputRef.current.type = "text"; 
            fileInputRef.current.type = "file"; 
        }
    }

    // MAIN DP UPDATE FUNCTION
     const mainDpUpdateFunc = ()=>{
        const formData = new FormData();
        formData.append("file", file)
        updateDp(formData);
        dpModalCloseRef.current.click();
    }
    
    //______________________________________________________________
    // UPDATE Name And About  MODAL- LOGICS (USER-> USER PROFILE)
    // _____________________________________________________________
    const Name_n_AboutUpdateModalRef = useRef();
    const Name_n_AboutCloseModalRef = useRef();
    const [userData123, setUserData123] = useState({name: "", about: ""});

    // on click pen icon - function for open modal
    const onCLickPenIcon = (currentName, currentAbout) =>{
        Name_n_AboutUpdateModalRef.current.click();
        setUserData123({
            name: currentName,
            about: currentAbout
        })
    }
    // NameAboutInputOnchangeFunc
    const NameAboutInputOnchangeFunc = (event)=>{
        // console.log(event.target.value);
        setUserData123({...userData123, [event.target.name] : event.target.value})
    }

    // MAIN UPDATE FUNCTION
    const mainUpdateFunc = ()=>{
        updateNameAbout(userData123);
        Name_n_AboutCloseModalRef.current.click();
    }

    return <FunctionContext.Provider value = {{
        clickUpdateModalRef,
        onClickOpenUpdateModalFunc,
        modalTitle,
        modalInputOnchangeFunc,
        onclickUpdateFunc,
        updateModalCloseRef,

        
        fileInputRef,
        onCLickImage,
        dpUpdateModalRef,
        dpInputOnchangeFunc,
        blobUrl,
        modalCancelNCloseFunc,
        mainDpUpdateFunc,
        dpModalCloseRef,

        Name_n_AboutUpdateModalRef,
        onCLickPenIcon,
        userData123,
        NameAboutInputOnchangeFunc,
        mainUpdateFunc,
        Name_n_AboutCloseModalRef
         } }>
            {props.children}
    </FunctionContext.Provider>
}

export default FunctionState;