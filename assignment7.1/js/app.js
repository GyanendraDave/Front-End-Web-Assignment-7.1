// aria of circle
function aria() {
    var radius = 5;

    // area method
    var circle = Math.PI * radius * radius;

    // console output   
    console.log("Aria of circle " + circle)
}

aria();



// aria of circle 02

function circle(radius) {
    this.radius = radius;
    // area method
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    // perimeter method
    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}
var c = new circle(5);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));



// aria of circle 03 

function calculateArea() {
    // area declare in variable radius
    var radius = 6;    
    var a = Math.PI * radius * radius;
    console.log("The area of the circle is " + a);
}
calculateArea(); 

// aria of circle 04
function CalculateArea(){
        var radius =document.form1.txtRadius.value;
         console.log("The area of the circle is " + (radius * radius * Math.PI));
         console.log("The circumference of the circle is " + (2 * radius * Math.PI));
    }