function checkFields(inputElement) {
 console.log(inputElement);
 if (inputElement.value === "") {
  inputElement.style.border = "red solid 2px";
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

 if (
  document.forms["users"]["firstname"].value == "" ||
  document.forms["users"]["lastname"].value == "" ||
  document.forms["users"]["email"].value == "" ||
  document.forms["users"]["pwd"].value == "" ||
  document.forms["users"]["conpwd"].value == ""
 ) {
  return false;
 } else if (document.forms["users"]["conpwd"].value != document.forms["users"]["pwd"].value) {
    alert("Password and Confrim Password must be similar");
    return false;
 } else {
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
  console.log("login..for", user);
  if (checkEmail == x[user].email && checkPwd == x[user].pwd) {
   console.log("match");
   alert("successfully logged in");
  } else {
   alert("invalid credentials");
  }
 }
}
