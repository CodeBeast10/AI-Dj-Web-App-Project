leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;


scoreleftwrist = 0;
scorerightwrist = 0;

function preload() {
    song= loadSound("music.mp3");
    song= loadSound("music2.mp3");
}

function modelloaded() {
    console.log("Pose Net is Initialized");
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide(); 
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function draw() {
    image(video,0,0,600,500);
    fill("#ff0000");
    stroke("#ff0000");
    if (scoreleftwrist>0.2) {
        circle(leftwristx,leftwristy,20);
        music.mp3.stop();

        if (music2.mp3>0);
            music2.mp3.play();
        document.getElementById("song_button").innerHTML= "Song 2"
    }

}

function gotposes(results) {
    if (results.length>0) {
        console.log(results); 
        
        leftwristx= results[0].pose.leftWrist.x;
        leftwristy= results[0].pose.leftWrist.y;
        
        console.log("leftwristx= " + leftwristx);
        console.log("leftwristy= " + leftwristy);
       
        rightwristx= results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
       
        console.log("rightwristx= " + rightwristx);
        console.log("rightwristy= " + rightwristy); 

       scoreleftwrist= results[0].pose.keypoints[9].score;
       
       console.log("scoreleftwrist=" + scoreleftwrist); 

       scorerightwrist= results[0].pose.keypoints[10].score;

       console.log("scorerightwrist=" + scorerightwrist);

    }        
}
