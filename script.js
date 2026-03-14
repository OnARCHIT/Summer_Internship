document.getElementById("form").addEventListener("submit",async function(e){

e.preventDefault()

const data={
name:document.getElementById("name").value,
email:document.getElementById("email").value,
phone:document.getElementById("phone").value,
address:document.getElementById("address").value,
nationality:document.getElementById("nationality").value,
passport:document.getElementById("passport").value,
university:document.getElementById("university").value,
degree:document.getElementById("degree").value
}

const res=await fetch("/api/submit",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

})

const result=await res.json()

alert(result.message)

})
