var_model_status="";

function setup()
{
    canvas=createCanvas(380,380);
    canvas.position(525, 200);
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("model_status").innerHTML = "Status : Detecting Objects"; 
    document.getElementById("object_name").value;       
}

function modelLoaded() 
{
    console.log("Model Loaded");
    var_model_status=true;
}

function draw()
{
    image(video, 0, 0, 380, 380);
}