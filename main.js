function preload()
{
 eyes_filter=loadImage('https://i.dlpng.com/static/png/6357986_preview.png');
}

function setup()
{
 canvas=createCanvas(300,300);
 canvas.center();
 video=createCapture(VIDEO);
 video.size(300,300);
 video.hide();
 posenet=ml5.poseNet(video,modelloaded);
 posenet.on('pose',gotposes);
}

function modelloaded()
{
    console.log("model is loaded");

}
 var nosex="";
 var nosey="";
function gotposes(results)
{
 if(results.length>0)
 {
     console.log(results);
     nosex=results[0].pose.nose.x-30;
     nosey=results[0].pose.nose.y-50;
 }
}

function draw()
{
 image(video,0,0,300,300);
 image(eyes_filter,nosex,nosey,70,70);
}

function take_snapshot()
{
    save('jonathan.png');
}