// WORKING

// const video = document.getElementById("video");


// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
//   faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
//   faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
//   faceapi.nets.faceExpressionNet.loadFromUri("/models"),
//   faceapi.nets.ageGenderNet.loadFromUri("/models")
// ]).then(startVideo);

// function startVideo() {
//   navigator.getUserMedia(
//     { video: {} },
//     stream => (video.srcObject = stream),
//     err => console.error(err)
//   );
// }
// video.addEventListener("playing", () => {
//   const canvas = faceapi.createCanvasFromMedia(video);
//   document.body.append(canvas);

//   const displaySize = { width: video.width, height: video.height };
//   faceapi.matchDimensions(canvas, displaySize);

//   setInterval(async () => {
//     const detections = await faceapi
//       .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
//       .withFaceLandmarks()
//       .withFaceExpressions()
//       const resizedDetections = faceapi.resizeResults(detections, displaySize);

//     canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

//     // faceapi.draw.drawDetections(canvas, resizedDetections);
//     // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
//     // faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
//     try{
//     // console.log(resizedDetections[0].expressions);
//     if(resizedDetections[0].expressions.neutral>=0.51){
//       console.log("neutral "+resizedDetections[0].expressions.neutral);
//       document.getElementById("emo-disp").innerHTML="NEUTRAL => HAPPY";
//       document.getElementById("emo-disp").href="happy.html";
//     }
//     if(resizedDetections[0].expressions.happy>=0.51){
//       console.log("happy "+resizedDetections[0].expressions.happy);
//       document.getElementById("emo-disp").innerHTML="HAPPY";
//       document.getElementById("emo-disp").href="happy.html";
//     }
//     if(resizedDetections[0].expressions.sad>=0.51){
//       console.log("sad "+resizedDetections[0].expressions.sad);
//       document.getElementById("emo-disp").innerHTML="SAD";
//       document.getElementById("emo-disp").href="sad.html";
//     }
//     if(resizedDetections[0].expressions.fearful>=0.51){
//       console.log("fearful "+resizedDetections[0].expressions.fearful);
//       document.getElementById("emo-disp").innerHTML="FEARFUL";
//       document.getElementById("emo-disp").href="fear.html";
//     }
//     if(resizedDetections[0].expressions.surprised>=0.51){
//       console.log("surprised "+resizedDetections[0].expressions.surprised);
//       document.getElementById("emo-disp").innerHTML="SURPRISED";
//       document.getElementById("emo-disp").href="surprise.html";
//     }
//     if(resizedDetections[0].expressions.angry>=0.51){
//       console.log("angry "+resizedDetections[0].expressions.angry);
//       document.getElementById("emo-disp").innerHTML="ANGRY";
//       document.getElementById("emo-disp").href="angry.html";
//     }
//     // console.log("neutral "+resizedDetections[0].expressions.neutral);
//   }
//     catch(err){
//   if (err instanceof TypeError) {
//   console.log("Can't Capture your face!!!"+err);
// }}
//   },100);
// });


//-----------------------TRIAL-------------------

// --------------------TRIAL---------------------

navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);
const video = document.getElementById("video");


Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
  faceapi.nets.ageGenderNet.loadFromUri("/models")
]).then(() => {
      if (navigator.mediaDevices.getUserMedia) {
        startVideo(document.getElementById("video"));
        navigator.mediaDevices
          .getUserMedia({ audio: false, video: true })
          .then(function (stream) {
            //Display the video stream in the video object
            video.srcObject = stream;
            //Play the video stream
            video.play();
            setIsLoaded(true);
            console.log("Video : " + video);
            addEvent();
          })
          .catch(function (e) {
            console.log(e.name + ": " + e.message);
          });
      }});

function startVideo() {
  navigator.mediaDevices.getUserMedia(
    { video: {} },
    stream => (video.srcObject = stream),
    err => console.error(err)
  );
}
var capture = 0;
const cap_but = document.getElementById("cap-button")

cap_but.addEventListener("click", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  var EBMP = setTimeout(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

    // faceapi.draw.drawDetections(canvas, resizedDetections);
    // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    // faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    if(capture == 0){
    try{
    console.log(resizedDetections[0].expressions);
    capture = 1;
    if(resizedDetections[0].expressions.neutral>=0.51){
      console.log("neutral "+resizedDetections[0].expressions.neutral);
      document.getElementById("emo-disp").innerHTML="HAPPY";
      document.getElementById("emo-disp").href="happy.html";
    }
    if(resizedDetections[0].expressions.happy>=0.51){
      console.log("happy "+resizedDetections[0].expressions.happy);
      document.getElementById("emo-disp").innerHTML="HAPPY";
      document.getElementById("emo-disp").href="happy.html";
    }
    if(resizedDetections[0].expressions.sad>=0.51){
      console.log("sad "+resizedDetections[0].expressions.sad);
      document.getElementById("emo-disp").innerHTML="SAD";
      document.getElementById("emo-disp").href="sad.html";
    }
    if(resizedDetections[0].expressions.fearful>=0.51){
      console.log("fearful "+resizedDetections[0].expressions.fearful);
      document.getElementById("emo-disp").innerHTML="FEARFUL";
      document.getElementById("emo-disp").href="fear.html";
    }
    if(resizedDetections[0].expressions.surprised>=0.51){
      console.log("surprised "+resizedDetections[0].expressions.surprised);
      document.getElementById("emo-disp").innerHTML="SURPRISED";
      document.getElementById("emo-disp").href="surprise.html";
    }
    if(resizedDetections[0].expressions.angry>=0.51){
      console.log("angry "+resizedDetections[0].expressions.angry);
      document.getElementById("emo-disp").innerHTML="ANGRY";
      document.getElementById("emo-disp").href="Workout.html";
    }
    if(resizedDetections[0].expressions.disgusted>=0.51){
      console.log("disgusted"+resizedDetections[0].expressions.angry);
      document.getElementById("emo-disp").innerHTML="FEARFUL";
      document.getElementById("emo-disp").href="fear.html";
    }
    // console.log("neutral "+resizedDetections[0].expressions.neutral);
  }catch(err){
  if (err instanceof TypeError) {
  console.log("Can't Capture your face!!!"+err);
  alert("Re-capture the Live Image")
}}

finally{
  if (capture == 1) {
    console.log("Capture again");
    clearInterval(EBMP);
    capture = 0;
  }
}}
},10);
});
