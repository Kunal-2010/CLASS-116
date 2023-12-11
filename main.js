noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/GhKKgcd9/580b57fbd9996e24bc43bed5.png')

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}


function draw() {
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 25, 25);
}

function take_snapshot() {
    save("myphtho.png");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
       noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}