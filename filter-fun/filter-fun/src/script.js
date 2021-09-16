var img = null;
var imgGray = null;
var imgRed = null;
var imgRainbow = null;

function upload() {
  var canvas=document.getElementById("can");
  var fileinput=document.getElementById("input");
  img=new SimpleImage(fileinput);
  img.drawTo(canvas);
}

function grayscale(){
  
  imgGray=img;
  for (var pixel of imgGray.values()) {
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
    
  }
  var canvas=document.getElementById("can");
  imgGray.drawTo(canvas);
}

function red(){
  imgRed = img;
  for (var pixel of imgRed.values()){
    var avg=(pixel.getGreen()+pixel.getBlue()+pixel.getRed())/3;
    var twoAvg=2*avg;
    if (avg < 128) {
      pixel.setRed(twoAvg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else {
      pixel.setRed(255);
      pixel.setGreen(twoAvg-255);
      pixel.setBlue(twoAvg-255);
    }
    
  }
  var canvas = document.getElementById("can");
  imgRed.drawTo(canvas);
}

//3
/*
function rainbow(){
  imgRainbow=img;
  for (var pixel of imgRainbow.values()) {
    var x = pixel.getX();
    var avg= (pixel.getGreen()+pixel.getBlue()+pixel.getRed())/3;
    var avgTwo= avg*2;
    if (x<imgRainbow.getWidth()/2) {
      pixel.setRed(255);
    }
    if (x>=imgRainbow.getWidth()/2){
      pixel.setBlue(255);
    }
    else {
      pixel.setGreen(255);
    }
  }
  var canvas = document.getElementById("can");
  imgRainbow.drawTo(canvas);
}
*/
function reset(){
  upload();
}