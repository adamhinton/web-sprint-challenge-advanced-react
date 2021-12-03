// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValue) =>{
    const [values, setValues] = useState(initialValue);
    
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      return [values, handleChanges, showSuccessMessage, setShowSuccessMessage]
}

 

export default useForm;