var fgImg = new SimpleImage("drewRobert.png");
var bgImg = new SimpleImage("dinos.png");
var output = new SimpleImage(fgImg.getWidth(), fgImg.getHeight());

for (var pixel of fgImg.values()) {
    if (pixel.getGreen() >= pixel.getBlue() + pixel.getRed()){
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImg.getPixel(x, y);
        output.setPixel(x, y, bgPixel);
    }
    else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
}
print(output)