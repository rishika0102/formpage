// function checkfields(x) {
//  var firstname =  document.forms["userdetails"]["firstname"].value;
//  var lastname = document.forms["userdetails"]["lastname"].value;
//  var email = document.forms["userdetails"]["email"].value;
//  var pwd = document.forms["userdetails"]["pwd"].value;
//  var conpwd = document.forms["userdetails"]["conpwd"].value;
//  var gend = document.forms["userdetails"]["gend"].value;
//  var dob = document.forms["userdetails"]["dob"].value;
//   if (firstname == "" || lastname == "" || email == "" || pwd == "" || conpwd == null || gend == null || dob == null) {
//    x.style.border = "red solid 5px";
//    console.log("hello", firstname);
//     }
// }
// function chkfields(z) {
// 	 let firstname, lastname, email, pwd, conpwd, gend, dob;
//   firstname =  document.forms["userdetails"]["firstname"].value;
//   lastname = document.forms["userdetails"]["lastname"].value;
//   email = document.forms["userdetails"]["email"].value;
//   pwd = document.forms["userdetails"]["pwd"].value;
//   conpwd = document.forms["userdetails"]["conpwd"].value;
//   gend = document.forms["userdetails"]["gend"].value;
//   dob = document.forms["userdetails"]["dob"].value;
//   if (firstname != null && lastname != null && email != null && pwd != null && conpwd != null && gend != null && dob != null) {
//    z.style.border = "green solid 5px";
//    console.log("world");
//     }
// }
function signUp() {

  let firstname, lastname, email, pwd, conpwd, gend, dob;
  firstname =  document.forms["userdetails"]["firstname"].value;
  lastname = document.forms["userdetails"]["lastname"].value;
  email = document.forms["userdetails"]["email"].value;
  pwd = document.forms["userdetails"]["pwd"].value;
  conpwd = document.forms["userdetails"]["conpwd"].value;
  gend = document.forms["userdetails"]["gend"].value;
  dob = document.forms["userdetails"]["dob"].value;
  if(pwd != conpwd ){
   alert("password and confrim-password must be same");
  }
  let userrecord = new Array();
  userrecord = JSON.parse(localStorage.getItem("userdetails")) ? JSON.parse(localStorage.getItem("userdetails")) : []
  userrecord.push({
    "firstname": firstname,
    "lastname": lastname,
    "email": email,
    "pwd": pwd,
    "conpwd": conpwd,
    "gend": gend,
    "dob": dob
  })
  localStorage.setItem("userdetails", JSON.stringify(userrecord));
  console.log("userdetails....", userrecord);

}

function login() {

  let checkemail, checkpwd;
  checkemail = document.forms["userdetails"]["checkemail"].value;
  checkpwd = document.forms["userdetails"]["checkpwd"].value;
  let checkuserreccord = new Array();
  checkuserreccord = JSON.parse(localStorage.getItem("userdetails")) ? JSON.parse(localStorage.getItem("userdetails")) : []
  checkuserreccord.push({
      "checkemail": checkemail,
      "checkpwd": checkpwd
  })
  var x = JSON.parse(localStorage.getItem("userdetails"));
  console.log("userdetails....", x);
  for (let y in userdetails) {
  	debugger
  	console.log("login..for",x[y]);
    if (checkemail == x[y].email && checkpwd == x[y].pwd) {
    	console.log("match");
      alert("successfully logged in");
    } else {
      alert("invalid credentials");
      }
  }
}


