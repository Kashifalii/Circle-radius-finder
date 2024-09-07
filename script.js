let button = document.getElementById("btn");
let RadiusInput = document.getElementById("radius-value");
let submit = document.getElementById("btn");
let result = document.getElementById("result");


submit.addEventListener("click", () => {
    const radius = RadiusInput.value;
    const CircleRadius = Math.floor(Math.PI * Math.pow(radius, 2));
    result.innerHTML = "The Area of Circle is " + CircleRadius;
    RadiusInput.value = "";
});