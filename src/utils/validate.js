export const checkValidData =(email , password) =>{
     
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);

    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{8,}$/.test(password);

    if(!isEmailValid)
     return "Emil id is not valid";

    if(!isPasswordValid)
      return "password is not valid";

    return null;

};