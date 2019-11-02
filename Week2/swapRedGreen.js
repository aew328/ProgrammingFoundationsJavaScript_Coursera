var img = new SimpleImage("smallhands.png");

function swapRedGreen(img) {
    for (var pixel of img.values()) {
       pixel.setRed(pixel.getGreen());
       pixel.setGreen(pixel.getRed()); 
    }
    return img
}
var img2 = swapRedGreen(img);
print(img2);