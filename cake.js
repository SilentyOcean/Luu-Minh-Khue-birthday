 const stage = new Konva.Stage({
  container: "container",
  width: 700,
  height: 700});

  const layer = new Konva.Layer();
  stage.add(layer);

  let htmlConfetti = document.getElementById("htmlConfetti");
  let htmlGift = document.getElementById("htmlGift");
  let htmlGiftsmall = document.getElementById("htmlGiftSmall")
  let htmlsurprised = document.getElementById("surprised");
  let htmlLetter = document.getElementById("letter");




class Cake {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.radX = 100 * this.size;
    this.radY = 50 * this.size;
    this.candlesBlown = 0;
  }

  
  blownCheck(){
    if(this.candlesBlown == 18){
      console.log("Confetti!");
      coolConfetti();
      htmlConfetti.innerHTML = "Confetti!";
      htmlGift.innerHTML = "...and gift: https://product.hstatic.net/200000756047/product/upload_4a592173b4be493a92b1a3a80227ff0e.jpg";
      htmlGiftsmall.innerHTML="nó chưa giao";
      htmlsurprised.innerHTML="click hết mấy cái nến for big surprise(kéo xuống)";
      htmlLetter.innerHTML="Chúc bà sinh nhật 18 tuổi! Bà là người nice nhất tôi từng biết"
    }
    
  }


  candles(count = 1) {
  
    
    let angle = (2 * Math.PI / 18) * count;

    // Ellipse parametric equation
    let randX = this.x + (this.radX * 0.8) * Math.cos(angle);
    let randY = this.y + (this.radY * 0.8) * Math.sin(angle);

    // Candle body (rectangle)
    let candle = new Konva.Rect({
      x: randX - 3,
      y: randY - 20,
      width: 6,
      height: 20,
      fill: "white",
      stroke: "black",
      strokeWidth: 2,
    });

    // Flame (ellipse above candle)
    let flame = new Konva.Ellipse({
      x: randX,
      y: randY - 28,
      radiusX: 4,
      radiusY: 6,
      fill: "orange",
      stroke: "red",
      strokeWidth: 4,
    });

 

    flame.on("click", () => {
      candle.destroy();
      flame.destroy();
      layer.draw();
      this.candlesBlown++;
      console.log(this.candlesBlown);
      this.blownCheck();
    });

    candle.on("click", () => {
      candle.destroy();
      flame.destroy();
      layer.draw();
      this.candlesBlown++;
      console.log(this.candlesBlown);
      this.blownCheck();
    });
    
    layer.add(candle);
    layer.add(flame);
  
}



  topElip(color = "yellow") {
    let topElipse = new Konva.Ellipse({
      x: this.x,
      y: this.y,
      radiusX: this.radX,
      radiusY: this.radY,
      fill: color,
      stroke: "black",
      strokeWidth: 4,
    });

    layer.add(topElipse);
  }

  midElip(color = "yellow") {
    let midElipse = new Konva.Ellipse({
      x: this.x,
      y: this.y + this.radX / 4,
      radiusX: this.radX,
      radiusY: this.radY,
      fill: color,
      stroke: "black",
      strokeWidth: 4,
    });

    layer.add(midElipse);
  }

  botElip(color = "yellow") {
    let botElipse = new Konva.Ellipse({
      x: this.x,
      y: this.y + this.radX,
      radiusX: this.radX,
      radiusY: this.radY,
      fill: color,
      stroke: "black",
      strokeWidth: 4,
    });

    layer.add(botElipse);
  }

  leftLine() {
    let lLine = new Konva.Line({
      points: [this.x - this.radX, this.y, this.x - this.radX, this.y + this.radX],
      stroke: "black",
      strokeWidth: 4,
      lineCap: "round",
      lineJoin: "round",
    });

    layer.add(lLine);
  }

  rightLine() {
    let rLine = new Konva.Line({
      points: [this.x + this.radX, this.y, this.x + this.radX, this.y + this.radX],
      stroke: "black",
      strokeWidth: 4,
      lineCap: "round",
      lineJoin: "round",
    });

    layer.add(rLine);
  }

  rectangle(color = "yellow") {
    let rect = new Konva.Rect({
      x: this.x - this.radX,
      y: this.y,
      height: this.radX,
      width: this.radX * 2,
      fill: color,
      strokeWidth: 4,
    });

    layer.add(rect);
  }

  topRectangle(color = "yellow") {
    let topRect = new Konva.Rect({
      x: this.x - this.radX,
      y: this.y - 2,
      height: this.radX / 4,
      width: this.radX * 2,
      fill: color,
      strokeWidth: 4,
    });
    layer.add(topRect);
  }

  cakeGen() {
    this.botElip("brown");
    this.rectangle("brown");
    this.midElip("white");
    this.topRectangle("white");
    this.topElip("white");
    this.leftLine();
    this.rightLine();
    
    for(let i = 0; i < 18; i++){
      this.candles(i);
    }
    
  }
}



document.addEventListener("DOMContentLoaded", function() {

 


  function main(){

    function generateRandomImage(imgPath) {
      const img = document.createElement("img");
      img.src = imgPath;
      img.classList.add("random-img");

      // random position inside viewport
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);

      const rotation = Math.random() * 90 - 45;

      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.style.transform = `rotate(${rotation}deg)`;

      document.body.appendChild(img);
    }


    let cake1 = new Cake(stage.width()/2, stage.height()/2, 2);
    cake1.cakeGen();

   

    

    // coolConfetti();

    

   

  };

  main();


});