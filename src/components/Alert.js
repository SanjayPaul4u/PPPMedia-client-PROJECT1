import React, { useContext } from 'react'
import AlertContext from '../context/alert/alertContext'


function Alert() {
    const alert_context = useContext(AlertContext);
    const {alert} = alert_context;

    const capitalizedWord = (word)=>{
        const lowercase_word = word.toLowerCase();
        const capitalized_word = lowercase_word.charAt(0).toUpperCase()+lowercase_word.slice(1);
        return capitalized_word;
    }
  return (
    <>
        {alert && <div className={`container fixed-top alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalizedWord(alert.type)} </strong> {alert.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}  
    </>  
  )
}

export default Alert