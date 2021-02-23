const h3 = document.querySelector('h3');
const body = document.getElementById('body-gradient');

const colors = document.querySelectorAll('#colors > input')
let color1 = colors[0];
let color2 = colors[1];

const setGradient = () => {
    // console.log('color1:',color1.value+"\n"+"color2:",color2.value);
    body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	h3.textContent = body.style.background;
};


for(const color of colors){
    color.addEventListener("input",setGradient);
}

