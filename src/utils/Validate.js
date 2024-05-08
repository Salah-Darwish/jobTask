const ruleValidateMapper={
    isEmail:validateEmail, 
    isPassword: validatePassword, 
   
}; 
function validateEmail(enteredEmail){
  const emailRegular=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/; 
  return emailRegular.test(enteredEmail);
    }
function validatePassword(enterPassword){
    const passwordRegular=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/; 
    return passwordRegular.test(enterPassword);
}

export function validate(userInput,rules){
    let isValid=true; 
    for(let rule of rules){
isValid=isValid && ruleValidateMapper[rule.Key](userInput); 
    }
    return isValid; 
}