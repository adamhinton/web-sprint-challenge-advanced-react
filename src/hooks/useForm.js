// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValue) =>{
    const [values, setValues] = useState(initialValue);
    
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

    //not totally sure I was supposed to put handleChanges in here but it works.
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };


        //I don't think it's right to put both showSuccessMessage and setShowSuccessMessage in here, but I couldn't get it to work any other way. If I only put in showSuccessMessage then set... would be undefined, and if I only put in set... then show... would be undefined.
      return [values, handleChanges, showSuccessMessage, setShowSuccessMessage]
}

 

export default useForm;