function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/88T1C1ckS/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}


//https://teachablemachine.withgoogle.com/models/88T1C1ckS/