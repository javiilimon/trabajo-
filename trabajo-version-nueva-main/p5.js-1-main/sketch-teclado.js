let img = "";
let bg = "";
let imga = "";
function setup(){
    console.log("setup()");
    createCanvas(1265,840);
    img = loadImage("https://i.ibb.co/FV06Lhv/ndice.jpg");
    bg = loadImage("https://i.ibb.co/VvyQH9R/nintendo-zoom-animal-crossing-1943759.webp");
    imga = loadImage("https://i.ibb.co/FBz4xq4/6689dc331be27e66349ce9a4d15ddff3.gif")
}


function draw(){
    console.log("draw()"+frameCount);
    background(bg);
    console.log("teclaPulsada: "+keyCode );
    

    switch (keyCode) {
        case 40:
            
            image(img, frameCount%400, frameCount%600);
            break;
        case 38:
           image(imga,frameCount%1265,75);
            break;
        case 37:
         text("izquierda",40,100);
         break;
        case 39:
         text("derecha",125,100);
           break;
        default:
            break;
    }


}
