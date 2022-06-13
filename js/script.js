function checkfields(x) {

 var firstname = document.forms["users"]["firstname"].value;
 var lastname = document.forms["users"]["lastname"].value;
 var email = document.forms["users"]["email"].value;
 var pwd = document.forms["users"]["pwd"].value;
 var conpwd = document.forms["users"]["conpwd"].value;
 var gend = document.forms["users"]["gend"].value;
 var dob = document.forms["users"]["dob"].value;
 if (firstname == "" || lastname == "" || email == "" || pwd == "" || conpwd == null || gend == null || dob == null) {
  x.style.border = "red solid 5px";
  console.log("hello", firstname);
 }

}
function chkfields(z) {

 let firstname, lastname, email, pwd, conpwd, gend, dob;
 firstname = document.forms["users"]["firstname"].value;
 lastname = document.forms["users"]["lastname"].value;
 email = document.forms["users"]["email"].value;
 pwd = document.forms["users"]["pwd"].value;
 conpwd = document.forms["users"]["conpwd"].value;
 gend = document.forms["users"]["gend"].value;
 dob = document.forms["users"]["dob"].value;
 if (firstname != null && lastname != null && email != null && pwd != null && conpwd != null && gend != null && dob != null) {
  z.style.border = "green solid 5px";
  console.log("world");
 }

}
function signUp() {

 const firstname = document.forms["users"]["firstname"].value;
 const lastname = document.forms["users"]["lastname"].value;
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
  firstname: firstname,
  lastname: lastname,
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

