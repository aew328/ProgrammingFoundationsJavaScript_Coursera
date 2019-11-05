var img = new SimpleImage ("smallpanda.png"); 
print(img)
for (var pxl of img.values()) {
    if (pxl.getX() < 10 || pxl.getX() > img.getWidth() - 10) {
        pxl.setGreen(0);
        pxl.setRed(0);
        pxl.setBlue(0);
    }
    if (pxl.getY() < 10 || pxl.getY() > img.getHeight()-10) {
        pxl.setGreen(0);
        pxl.setRed(0);
        pxl.setBlue(255);    
    }
}
print(img);