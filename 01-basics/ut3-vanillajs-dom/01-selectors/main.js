console.log(document.getElementById("titulo").textContent + " -> get via getElementById")
console.log(document.getElementsByClassName("parrafo")[0].textContent + " -> get via getElementsByClassName")
console.log(document.getElementsByClassName("parrafo")[1].textContent + " -> get via getElementsByClassName")
console.log(document.getElementsByName("nombre").innerHtml = "Nombre" + " -> get via getElementsByName")
console.log(document.getElementsByName("apellido").innerHtml = "Apellido" + " -> get via getElementsByName")

for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    console.log(document.getElementsByTagName("li")[i].textContent + " -> get via getElementsByTagName")
  }

  console.log(document.querySelector("h1").textContent + " -> get via querySelector")
  
  for (let i = 0; i < document.querySelectorAll("div > p").length; i++) {
    console.log(document.querySelectorAll("div > p")[i].textContent + " -> get via querySelectorAll")
}