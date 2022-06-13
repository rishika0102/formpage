
function checkfields(x) {

 const firstName = document.forms["users"]["firstname"].value;
 const lastName = document.forms["users"]["lastname"].value;
 const email = document.forms["users"]["email"].value;
 const pwd = document.forms["users"]["pwd"].value;
 const conpwd = document.forms["users"]["conpwd"].value;
 const gend = document.forms["users"]["gend"].value;
 const dob = document.forms["users"]["dob"].value;
 if (firstName == "" || lastName == "" || email == "" || pwd == "" || conpwd == null || gend == null || dob == null) {
  x.style.border = "red solid 5px";
  console.log("hello", firstname);
 }

}
function chkfields(z) {

 const firstName = document.forms["users"]["firstname"].value;
 const lastName = document.forms["users"]["lastname"].value;
 const email = document.forms["users"]["email"].value;
 const pwd = document.forms["users"]["pwd"].value;
 const conpwd = document.forms["users"]["conpwd"].value;
 const gend = document.forms["users"]["gend"].value;
 const dob = document.forms["users"]["dob"].value;
 if (firstName != null && lastName != null && email != null && pwd != null && conpwd != null && gend != null && dob != null) {
  z.style.border = "green solid 5px";
  console.log("world");
 }

}
function signUp() {

 const firstName = document.forms["users"]["firstname"].value;
 const lastName = document.forms["users"]["lastname"].value;
 const email = document.forms["users"]["email"].value;
 const pwd = document.forms["users"]["pwd"].value;
 const conpwd = document.forms["users"]["conpwd"].value;
 const gend = document.forms["users"]["gend"].value;
 const dob = document.forms["users"]["dob"].value;
 if (pwd != conpwd) {
  alert("password and confrim-password must be same");
 }
 const userrecord = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
 userrecord.push({
  firstName: firstName,
  lastName: lastName,
  email: email,
  pwd: pwd,
  conpwd: conpwd,
  gend: gend,
  dob: dob,
 });
 localStorage.setItem("users", JSON.stringify(userrecord));
 console.log("users....", userrecord);

}

function login() {

 const checkemail = document.forms["users"]["checkemail"].value;
 const checkpwd = document.forms["users"]["checkpwd"].value;
 const checkuserreccord = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
 checkuserreccord.push({
  checkemail: checkemail,
  checkpwd: checkpwd,
 });
 var x = JSON.parse(localStorage.getItem("users"));
 console.log("users....", x);
 for (let user in users) {
  debugger;
  console.log("login..for", user);
  if (checkemail == x[user].email && checkpwd == x[user].pwd) {
   console.log("match");
   alert("successfully logged in");
  } else {
   alert("invalid credentials");
  }
 }

}

