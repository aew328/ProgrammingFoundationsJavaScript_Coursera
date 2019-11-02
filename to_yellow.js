var img = new SimpleImage (200, 200);
print(img);
for (var pixel in img.values()) {
    var newR = 255 - pixel.getRed();
    var newG = 255 - pixel.getGreen();
    pixel.setRed(newR);
    pixel.setGreen(newG);
}
print(img);