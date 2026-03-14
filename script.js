document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

const formData = new FormData(this)

console.log("Application Data:")

for(let pair of formData.entries()){
console.log(pair[0] + ": " + pair[1])
}

alert("Application submitted successfully!")

this.reset()

})
