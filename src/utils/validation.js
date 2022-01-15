export const validateFields = (values,step,setErrors) => {
    switch(step) {
        case 1 : 
            if(values?.fullName?.length && values?.displayName?.length) {
                return true;
            } else {
                if(!values?.displayName?.length) {
                    setErrors("displayNameError",true)
                }

                if(!values?.fullName?.length) {
                    setErrors("fullNameError",true)
                }
                return false;   
            } 
        case 2 : 
            if(values?.workspaceName?.length) {
                return true;
            } else {
                if(!values?.workspaceName?.length) {
                    setErrors("workspaceNameError",true)
                    return false;
                }
            }
            break;
        default: 
        return false;
    }
}