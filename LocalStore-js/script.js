let form=document.getElementById('form'); 

form.addEventListener('submit', (e) =>{
e.preventDefult();
let username = document.getElementById('username').value;
let passsword = document.getElementById('password').value;

// local storage ;-

localStorage.setItem('username',username);
localStorage.setItem('password',passsword);

alert("Data Submitted Successfully");
});        

if(localStorage.getItem('username')&& localStorage.getItem('password')){
    document.getElementById('username').value=localStorage.getItem('username');
    document.getElementById('password').value=localStorage.getItem('password');
};     