const body = document.querySelector("body");
const heading = document.createElement("h1");
heading.textContent = "Multiplication Table"
console.log(heading);
body.appendChild(heading);
heading.setAttribute("style", "text-align: center;");

const div = document.createElement("div");

for (let i = 1; i <= 10; i++) {
    const a = document.createElement("a")
    for (let j = 1; j<=10; j++){
    const p = document.createElement("p");
    p.textContent = `${i} x ${j} = ${i*j} `;
    a.appendChild(p);
}
  div.appendChild(a);
  console.log(a);
    a.style.cssText= `
    border-radius: 10px;
    background-color: rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 50});
    color:white;
    `
} 

body.appendChild(div)
body.style.cssText=`margin: 0 300px`
div.style.cssText=`
display:grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(5, 1fr);
font-size: 15px;
gap: 10px;
text-align: center;
font-weight: bolder;
background: white;
`