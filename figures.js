//Code for the square
function perimeterSquare(side) {
    return side * 4;
}

function areaSquare (side) {
    return side * side;
}

//Code for triangle


function permiterTriangle(side1, side2, base) {
    return side1 + side2 + base;
}

function areaTriangle (base, alt) {
    return (base * alt) / 2;
}

//Code for circle

function diameter(radius) {
    return radius * 2;
}

const PI = Math.PI;

function perimiterCircle(radius){
    const diameterCircle = diameter(radius)
    return diameterCircle * PI;
}

function areaCircle(radius){
    return (radius * radius) * PI;
}

//html inteaction cuadrado

function calcularPermietro(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimeterSquare(value);
    resultSquareP.innerText = "The premiter of the squeare is: " + perimetro;
}

function calcularArea(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaSquare(value);
    resultSquareA.innerText = "The area of the squeare is: " + area;

}

//html inteaction Triangulo

function calcularPermietroTriangulo(){
    const inputLado1 = document.getElementById("inputTriangulo1");
    const inputLado2 = document.getElementById("inputTriangulo2");
    const inputBase = document.getElementById("inputTriangulo3");
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);

    const perimetro = permiterTriangle(valueLado1,valueLado2,valueBase);
    resultTriangleP.innerText = "The premiter of the triangle is: " + perimetro;
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTriangulo3");
    const inputAltura = document.getElementById("inputTriangulo4");
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangle(valueBase, valueAltura);
    resultTriangleA.innerText = "The area of the triangle is: " + area;

}

//html inteaction circulo

function calcularPermietroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimiterCircle(value);
    resultCircleP.innerText = "The premiter of the circle is: " + perimetro;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaSquare(value);
    resultCircleP.innerText = "The area of the circle is: " + area;
}
