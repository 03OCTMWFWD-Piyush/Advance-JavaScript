/*

Encapsulation in javascript : 
Abstraction in javascript : 

Polymorphism :
compile Time Polymorphism :- Method overloading
Run Time Polymorphism :- Mothod overriding 


*/

class User{
    name ;
    email ;   
    #password;
    constructor(){
        console.log("This is default constructor");
    }
    #validateEmail(email){
        return true ;  
    }
    #validatepassword(password){
        return true;
    }
    signup (name,email,password){
        let isvalidate = false;
        isvalidate &&=this.#validateEmail(email);  
        isvalidate =this.#validatepassword(password);
        if(isvalidate){
            this.name=name;
            this.email=email;
            this.#password=password;
            console.log("user Added successfully");
        }else{
            console.log("please Enter details again!!");
        }
    }
    login(email,password){
        if (email===this.email && password=== this.#password){
            console.log("Login successfully");
        }else{
            console.log("Authentication failed");
        }
    } 
    #isRegistereduser(email){
        return true;
    }
    resetpassword(email,newpassword){
        if(this.#isRegistereduser(email)){
            this.#password=newpassword;
            console.log("operation performed successfully");
        }else{ 
            console.log("No account found");  
        }
    }
} 

const user = new User ();
user.signup("viren",'viren@gmail.com','123456');
// user.#validateEmail("viren@gmail.com");
// user.login("viren@gmail.com",'123456');
// user.login("viren@gmail.com",'123456'); 
// user.resetpassword("viren@gmail.com","viren"); 
user.login("viren@gmail.com",'123456');
// user.reSetpassword("viren@outlook.com","viren");    



