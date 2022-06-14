
function checkfields(inputelement) {

  const firstName = document.forms["users"]["firstname"].value;
  const lastName = document.forms["users"]["lastname"].value;
  const email = document.forms["users"]["email"].value;
  const pwd = document.forms["users"]["pwd"].value;
  const conpwd = document.forms["users"]["conpwd"].value;
  const gend = document.forms["users"]["gend"].value;
  const dob = document.forms["users"]["dob"].value;
  if (firstName == "" || lastName == "" || email == "" || pwd == "" || conpwd == null || gend == null || dob == null) {
  inputelement.style.border = "red solid 5px";
  console.log("hello");
  }
}

function chkfields(inputelement) {

  const firstName = document.forms["users"]["firstname"].value;
  const lastName = document.forms["users"]["lastname"].value;
  const email = document.forms["users"]["email"].value;
  const pwd = document.forms["users"]["pwd"].value;
  const conpwd = document.forms["users"]["conpwd"].value;
  const gend = document.forms["users"]["gend"].value;
  const dob = document.forms["users"]["dob"].value;
  if (firstName != null && lastName != null && email != null && pwd != null && conpwd != null && gend != null && dob != null) {
  inputelement.style.border = "green solid 5px";
  console.log("world");
  }
}

function signUp() {

  const firstName = document.forms["users"]["firstname"].value;
  const lastName = document.forms["users"]["lastname"].value;
  const email = document.forms["users"]["email"].value;
  const pwd = document.forms["users"]["pwd"].value;
  const conPwd = document.forms["users"]["conpwd"].value;
  const gend = document.forms["users"]["gend"].value;
  const dob = document.forms["users"]["dob"].value;
  if(document.forms["users"]["firstname"].value == "" ){
    return false;
  }
  else if(document.forms["users"]["lastname"].value == "" ){
    return false;
  }
   else if(document.forms["users"]["email"].value == "" ){
    return false;
  }
   else if(document.forms["users"]["pwd"].value == "" ){
    return false;
  }
   else if(document.forms["users"]["conpwd"].value == "" ){
    return false;
  }
  else{
  const userrecord = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
  userrecord.push({
  firstName: firstName,
  lastName: lastName,
  email: email,
  pwd: pwd,
  conPwd: conPwd,
  gend: gend,
  dob: dob,
  });
  localStorage.setItem("users", JSON.stringify(userrecord));
  console.log("users....", userrecord);
}
}

function logIn() {

  const checkEmail = document.forms["users"]["checkemail"].value;
  const checkPwd = document.forms["users"]["checkpwd"].value;
  const checkuserReccord = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
  checkuserReccord.push({
  checkEmail: checkEmail,
  checkPwd: checkPwd,
  });
  var x = JSON.parse(localStorage.getItem("users"));
  console.log("users....", x);
  for (let user in users) {
  debugger;
  console.log("login..for", user);
  if (checkEmail == x[user].email && checkPwd == x[user].pwd) {
   console.log("match");
   alert("successfully logged in");
  } else {
   alert("invalid credentials");
  }
  }

}

