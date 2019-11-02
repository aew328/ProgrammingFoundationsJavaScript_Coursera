var img = new SimpleImage("rodger.png");
//less than 1/3 R = 255
// 1/3 - 2/3 G = 255
//>2/3 B = 255
for (var pixel of img.values()) {
    if (pixel.getX() < img.getWidth() /3) {
        pixel.setRed(255);
    }
    else if (pixel.getX() > 2 *img.getWidth() / 3) {
        pixel.setBlue(255); 
    } 
    else {
        pixel.setGreen(255); 
    }
}
print(img) 