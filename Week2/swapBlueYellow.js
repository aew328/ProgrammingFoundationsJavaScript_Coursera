var img = new SimpleImage("duke_blue_devil.png");
print(img)

function swapBlueYellow(img) {
    for (var pixel of img.values()) {
        if (pixel.getRed() < 255) {
            pixel.setRed(255); 
            pixel.setBlue(0);
            pixel.setGreen(255);
            
        }
    }
    return img;
}

print(swapBlueYellow(img));