
var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
    speak();
}

camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function(){
        imgId = "resultado1";
        takeSelfie();
        speakData = "Tirando sua selfie em 5 segundos";
        utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 5000);
    setTimeout(function(){
        imgId = "resultado2";
        takeSelfie();
        speakData = "Tirando sua selfie em 10 segundos";
        utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function(){
        imgId = "resultado3";
        takeSelfie();
        speakData = "Tirando sua selfie em 15 segundos";
        utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 15000);
}

function takeSelfie(){
    console.log(imgId)
    Webcam.snap(function(data_uri){
        if(imgId=="resultado1"){
            document.getElementById("resultado1").innerHTML = '<img src="' + data_uri + '" width="70%"/>';
            console.log("teste 1");
        }
        if(imgId=="resultado2"){
            document.getElementById("resultado2").innerHTML = '<img src="' + data_uri + '" width="70%"/>';
            console.log("teste 2");
        }
        if(imgId=="resultado3"){
            document.getElementById("resultado3").innerHTML = '<img src="' + data_uri + '" width="70%"/>';
            console.log("teste 3");
        }
    })
}