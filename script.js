function circle(){
    var radius = document.getElementById("ci-radius").value;
    document.getElementById("answer").value = Math.PI*radius*radius;
}
function rectangle()
{
    var l = document.querySelector("#re-lenght");
    var w = document.querySelector("#re-width");
    document.getElementById("answer").value = l.value * w.value;
}
function triangle()
{
    var b = document.querySelector("#tr-base").value;
    var h = document.querySelector("#tr-height").value;
    document.getElementById("answer").value = (b*h)/2;
}

function cone()
{
    var r = document.querySelector("#cn-radius").value;
    var h = document.querySelector("#cn-height").value;
    document.getElementById("answer").value = (Math.PI)*r*(r + Math.sqrt((h*h) + (r*r)));
}

function cyliner()
{
    var r = document.querySelector("#cy-radius").value;
    var h = document.querySelector("#cy-height").value;
    document.getElementById("answer").value = (2*Math.PI*r*h) + (2*Math.PI*r*r);

}

function option() {

    var choice = document.getElementById("shape").value;

    if(choice == "recatngle")
    {
        document.getElementById("formula").innerHTML = " A = l w";
        document.querySelector("#images").innerHTML = "<img src='images/rectangle.png' alt='rectangle-image'>";
        document.getElementById("inputs").innerHTML = "<input type='text' id='re-lenght' placeholder='Enter lenght(l)'> <br><input type='text' id='re-width' placeholder='Enter Width(w)'>";
        document.getElementById("output").innerHTML = " <input type='text' id='answer' disabled placeholder='Area Of Rectangle'>";
        document.getElementById("inputs").setAttribute("oninput","rectangle()");  
 
    }
    else if(choice == "circle") {
        document.getElementById("formula").innerHTML = "A = &#8508 r<sup>2</sup>";
        document.querySelector("#images").innerHTML = "<img src='images/circle.png' alt='rectangle-image'>";
        document.getElementById("inputs").innerHTML = "<input type='text' id='ci-radius' placeholder='Enter Radius'>";
        document.getElementById("output").innerHTML = " <input type='text' id='answer' disabled placeholder='Area Of Circle'>";
        document.getElementById("inputs").setAttribute("oninput","circle()");
    }
    else if(choice == "triangle")
    {
        document.getElementById("formula").innerHTML = "A = h<sub>b</sub>b / 2";
        document.querySelector("#images").innerHTML = "<img src='images/triangle.png' alt='rectangle-image'>";
        document.getElementById("inputs").innerHTML = "<input type='text' id='tr-base' placeholder='Enter Base(b)'> <br><input type='text' id='tr-height' placeholder='Enter Height(h)'>";
        document.getElementById("output").innerHTML = " <input type='text' id='answer' disabled placeholder='Area Of Triangle'>";
        document.getElementById("inputs").setAttribute("oninput","triangle()");  
    }
    else if(choice == "cone")
    {
        document.getElementById("formula").innerHTML = "A = &#8508 r ( r + &#8730(h<sup>2</sup> + r<sup>2</sup>)";
        document.querySelector("#images").innerHTML = "<img src='images/cone.png' alt='rectangle-image'>";
        document.getElementById("inputs").innerHTML = "<input type='text' id='cn-radius' placeholder='Enter radius(r)'> <br><input type='text' id='cn-height' placeholder='Enter Height(h)'>";
        document.getElementById("output").innerHTML = " <input type='text' id='answer' disabled placeholder='Surface Area Of Cone'>";
        document.getElementById("inputs").setAttribute("oninput","cone()");  
   
    }
    else if(choice == "cylinder")
    {
        document.getElementById("formula").innerHTML = "A = 2 &#8508 r h  + 2 &#8508 r<sup>2</sup>";
        document.querySelector("#images").innerHTML = "<img src='images/cyliner.png' alt='rectangle-image'>";
        document.getElementById("inputs").innerHTML = "<input type='text' id='cy-radius' placeholder='Enter radius(r)'> <br><input type='text' id='cy-height' placeholder='Enter Height(h)'>";
        document.getElementById("output").innerHTML = " <input type='text' id='answer' disabled placeholder='Surface Area Of Cylinder'>";
        document.getElementById("inputs").setAttribute("oninput","cyliner()");  
   
    }
    else{
        document.getElementById("fromula").innerHTML ="<h1>Please Select option First</h1>";
    }
}