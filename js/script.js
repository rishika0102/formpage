function storedetails() {

  let name, email, pwd;
name = document.getElementById("name").value;
email = document.getElementById("email").value;
pwd = document.getElementById("pwd").value;


let userrecord =new Array();
userrecord = JSON.parse(localStorage.getItem("userdetails"))? JSON.parse(localStorage.getItem("userdetails")):[]
userrecord.push({
  "name": name,
  "email": email,
  "pwd": pwd,
})
localStorage.setItem("userdetails", JSON.stringify(userrecord));
console.log("users.." ,userdetails);

}

function checkvalidation(userrecord) {
  console.log("checkvalidation");
  let checkemail, checkpwd;
  checkemail = document.getElementById("checkemail").value;
  checkpwd = document.getElementById("pwd").value;

  let checkuserreccord=new Array();
  checkuserreccord = JSON.parse(sessionStorage.getItem("logindetails"))? JSON.parse(sessionStorage.getItem("logindetails")):[]
  checkuserreccord.push({
    "checkemail" : checkemail,
    "checkpwd" : checkpwd
  })
  sessionStorage.setItem("logindetails", JSON.stringify(checkuserrecord));
   console.log("logindetails.." ,logindetails);
   for(let x in userrecord){
    console.log("for loop");
  if(checkemail === userrecord[x].email && checkpwd === userrecord[x].pwd){
  console.log("if.....");
  // alert("successfully logged in");
}
else {
  // alert("invalid credentials");
  console.log("else.....");
}
}
}


