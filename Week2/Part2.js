var myImg = new SimpleImage (200, 200);
//print(myImg);
for (var pixel of myImg.values()) {
    if (pixel.getX() < myImg.getWidth() / 2 && pixel.getY() < myImg.getHeight() / 2) {
        pixel.setRed(255);
    }
    else if (pixel.getX() >= myImg.getWidth() / 2 && pixel.getY() >= myImg.getHeight() / 2) {
        pixel.setBlue(255);
    }
    else if (pixel.getX() >= myImg.getWidth() / 2 && pixel.getY() < myImg.getHeight() / 2) {
        pixel.setGreen(255);
    }
    else {
        pixel.setRed(255);
        pixel.setBlue(255);
    }
}
print(myImg);