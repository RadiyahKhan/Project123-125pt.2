

function preload(){
    mustache = loadImage('https://png.pngtree.com/png-vector/20220321/ourmid/pngtree-moustache-handlebar-mustache-vector-png-image_4505748.png')
}

function setup(){
    canvas = createCanvas(200, 200)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(200, 200);
    video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 200, 200);
    image(mustache, noseX - 15, noseY - 15, 30, 30);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function take_snapshot(){
    save('myFilterImage.png')
}