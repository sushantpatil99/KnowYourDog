/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var today;
var apt = [];
var details = {};
var num = 0;
var timestamp;
var name;
var email;
var password;
var gender;
var mobile;
var breed;
var age;
var doctor;
var date;


function validateForm()
{
    
    today = new Date();
    resetForm();
    name = document.regform.Name.value;
    email = document.regform.Email.value;
    password = document.regform.Password.value;
    
    mobile = document.regform.Mobile.value;
    breed = document.regform.Breed.value;
    age = document.regform.age.value;
    age = parseInt(age);
    doctor = document.regform.doctor;
    date = document.regform.date.value;
    
    var date1 = date.split('-');
  
    var check = 0;
    var mess="";
    var emailregexp = /^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,5})+$/;
    var passregexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var mobregexp = /^(\+91-|\+91|0)?[6-9]\d{9}$/;
    if (name==="")
    {
        mess = "Name cannot be empty.";
        check =1;
        document.getElementById('name').innerHTML=mess;
    }
    else if (name.search(/[^a-zA-Z\s]/)>-1)
    {
        mess = "Name should contain only alphabets.";
        check=1;
        document.getElementById('name').innerHTML=mess;
    }
    else if (name.length<3 || name.length>30)
    {
        mess = "Name should contain 3-30 characters.";
        check=1;
        document.getElementById('name').innerHTML=mess;
    }
    
    if (email=="")
    {
        mess = "Email cannot be empty.";
        check = 1;
        document.getElementById('email').innerHTML=mess;
    }
    else if (emailregexp.test(email)==false)
    {
        mess = "Email is invalid.";
        check = 1;
        document.getElementById('email').innerHTML=mess;
    }
    
    if (password == "")
    {
        mess = "Password cannot be empty.";
        check = 1;
        document.getElementById('password').innerHTML=mess;
    }
    else if (passregexp.test(password)==false)
    {
        mess = "Password is invalid. It should contain atleast 1 lowercase, uppercase and a digit. Min length is 6.";
        check = 1;
        document.getElementById('password').innerHTML=mess;
    }
    
    
    if (mobile=="")
    {
        mess = "Phone Number cannot be empty.";
        check = 1;
        document.getElementById('mobile').innerHTML=mess;
    }
    else if (mobregexp.test(mobile)==false)
    {
        mess = "Phone Number is invalid.";
        check = 1;
        document.getElementById('mobile').innerHTML=mess;
    }
    
    if (breed=="")
    {
        mess = "Pet breed cannot be empty.";
        check = 1;
        document.getElementById('breed').innerHTML=mess;
    }
  
    if (isNaN(age))
    {
        mess = "Age has to be a number.";
        check = 1;
        document.getElementById('age1').innerHTML=mess;
    }
    else if (age<0 || age>30)
    {
        mess = "Age is invalid.";
        check = 1;
        document.getElementById('age1').innerHTML=mess;
    }
    
    if (doctor.selectedIndex==0)
    {
        mess = "Select any one of the following doctors.";
        check = 1;
        document.getElementById('Doctor').innerHTML=mess;
    }
    else
    {
        doctor = doctor.options[doctor.selectedIndex].text;
    }
    
    if (!(document.getElementById('male').checked || document.getElementById('female').checked))
    {
        mess = "Select any one option.";
        check = 1;
        document.getElementById('gender').innerHTML=mess;
    }
    else
    {
        if (document.getElementById('male').checked)
        {
            gender = document.getElementById('male').value;
        }
        else if (document.getElementById('female').checked)
        {
            gender = document.getElementById('female').value;
        }
    }
    if (parseInt(date1[0])!== today.getFullYear() ||  parseInt(date1[1])<(today.getMonth()+1) || (parseInt(date1[2])<today.getDate() && parseInt(date1[1])===(today.getMonth()+1)))
    {
        mess = "Select a valid date.";
        check = 1;
        document.getElementById('Date').innerHTML=mess;
    }
    
    
    if (check===0)
    {
        document.getElementById('Date').innerHTML="Submitted Successfully !";
        timestamp = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear() + ", " + today.getHours() + ":" + today.getMinutes() +":" + today.getSeconds();
        num = num +1;
        detail={num,timestamp,name,email,password,mobile,doctor,gender,date};
        apt.push(detail);
        document.getElementById('rform').reset();
        return true;
    }
    return false;
}

function resetForm()
{
    document.getElementById('name').innerHTML="";
    document.getElementById('email').innerHTML="";
    document.getElementById('password').innerHTML="";
    document.getElementById('mobile').innerHTML="";
    document.getElementById('breed').innerHTML="";
    document.getElementById('age1').innerHTML="";
    document.getElementById('Doctor').innerHTML="";
    document.getElementById('gender').innerHTML="";
    document.getElementById('Date').innerHTML="";
   
}



