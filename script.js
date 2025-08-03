// Your media data - Based on your actual GitHub files
const mediaData = [
    // Your actual image files from GitHub repo
    { id: 1, type: 'video', src: 'IMG_0001.MOV', thumbnail: 'IMG_0001.MOV' },
    { id: 2, type: 'photo', src: 'IMG_0002.JPG', thumbnail: 'IMG_0002.JPG' },
    { id: 3, type: 'video', src: 'IMG_0002.MOV', thumbnail: 'IMG_0002.MOV' },
    { id: 4, type: 'photo', src: 'IMG_0003.JPG', thumbnail: 'IMG_0003.JPG' },
    { id: 5, type: 'photo', src: 'IMG_0004.HEIC', srcAlt: 'IMG_0004.JPG', thumbnail: 'IMG_0004.HEIC' },
    { id: 6, type: 'photo', src: 'IMG_0005.JPG', thumbnail: 'IMG_0005.JPG' },
    { id: 7, type: 'photo', src: 'IMG_0006.JPG', thumbnail: 'IMG_0006.JPG' },
    { id: 8, type: 'photo', src: 'IMG_0007.JPG', thumbnail: 'IMG_0007.JPG' },
    { id: 9, type: 'photo', src: 'IMG_0008.JPG', thumbnail: 'IMG_0008.JPG' },
    { id: 10, type: 'photo', src: 'IMG_0009.JPG', thumbnail: 'IMG_0009.JPG' },
    { id: 11, type: 'photo', src: 'IMG_0010.JPG', thumbnail: 'IMG_0010.JPG' },
    { id: 12, type: 'photo', src: 'IMG_0011.JPG', thumbnail: 'IMG_0011.JPG' },
    { id: 13, type: 'photo', src: 'IMG_0012.JPG', thumbnail: 'IMG_0012.JPG' },
    { id: 14, type: 'photo', src: 'IMG_0013.JPG', thumbnail: 'IMG_0013.JPG' },
    { id: 15, type: 'photo', src: 'IMG_0014.JPG', thumbnail: 'IMG_0014.JPG' },
    { id: 16, type: 'photo', src: 'IMG_0015.JPG', thumbnail: 'IMG_0015.JPG' },
    { id: 17, type: 'photo', src: 'IMG_0016.JPG', thumbnail: 'IMG_0016.JPG' },
    { id: 18, type: 'photo', src: 'IMG_0017.JPG', thumbnail: 'IMG_0017.JPG' },
    { id: 19, type: 'photo', src: 'IMG_0018.JPG', thumbnail: 'IMG_0018.JPG' },
    { id: 20, type: 'photo', src: 'IMG_0019.JPG', thumbnail: 'IMG_0019.JPG' },
    { id: 21, type: 'photo', src: 'IMG_0020.JPG', thumbnail: 'IMG_0020.JPG' },
    { id: 22, type: 'photo', src: 'IMG_0021.JPG', thumbnail: 'IMG_0021.JPG' },
    { id: 23, type: 'photo', src: 'IMG_0022.JPG', thumbnail: 'IMG_0022.JPG' },
    { id: 24, type: 'photo', src: 'IMG_0023.JPG', thumbnail: 'IMG_0023.JPG' },
    { id: 25, type: 'photo', src: 'IMG_0024.JPG', thumbnail: 'IMG_0024.JPG' },
    { id: 26, type: 'photo', src: 'IMG_0025.JPG', thumbnail: 'IMG_0025.JPG' },
    { id: 27, type: 'photo', src: 'IMG_0026.JPG', thumbnail: 'IMG_0026.JPG' },
    { id: 28, type: 'photo', src: 'IMG_0027.JPG', thumbnail: 'IMG_0027.JPG' },
    { id: 29, type: 'photo', src: 'IMG_0028.JPG', thumbnail: 'IMG_0028.JPG' },
    { id: 30, type: 'photo', src: 'IMG_0029.JPG', thumbnail: 'IMG_0029.JPG' },
    { id: 31, type: 'photo', src: 'IMG_0030.JPG', thumbnail: 'IMG_0030.JPG' },
    { id: 32, type: 'photo', src: 'IMG_0031.JPG', thumbnail: 'IMG_0031.JPG' },
    { id: 33, type: 'photo', src: 'IMG_0032.JPG', thumbnail: 'IMG_0032.JPG' },
    { id: 34, type: 'photo', src: 'IMG_0033.JPG', thumbnail: 'IMG_0033.JPG' },
    { id: 35, type: 'photo', src: 'IMG_0034.JPG', thumbnail: 'IMG_0034.JPG' },
    { id: 36, type: 'photo', src: 'IMG_0035.JPG', thumbnail: 'IMG_0035.JPG' },
    { id: 37, type: 'photo', src: 'IMG_0036.JPG', thumbnail: 'IMG_0036.JPG' },
    { id: 38, type: 'photo', src: 'IMG_0037.JPG', thumbnail: 'IMG_0037.JPG' },
    { id: 39, type: 'photo', src: 'IMG_0038.JPG', thumbnail: 'IMG_0038.JPG' },
    { id: 40, type: 'photo', src: 'IMG_0039.JPG', thumbnail: 'IMG_0039.JPG' },
    { id: 41, type: 'photo', src: 'IMG_0040.JPG', thumbnail: 'IMG_0040.JPG' },
    { id: 42, type: 'photo', src: 'IMG_0041.JPG', thumbnail: 'IMG_0041.JPG' },
    { id: 43, type: 'photo', src: 'IMG_0042.JPG', thumbnail: 'IMG_0042.JPG' },
    { id: 44, type: 'photo', src: 'IMG_0043.JPG', thumbnail: 'IMG_0043.JPG' },
    { id: 45, type: 'photo', src: 'IMG_0044.JPG', thumbnail: 'IMG_0044.JPG' },
    { id: 46, type: 'photo', src: 'IMG_0045.JPG', thumbnail: 'IMG_0045.JPG' },
    { id: 47, type: 'photo', src: 'IMG_0046.JPG', thumbnail: 'IMG_0046.JPG' },
    { id: 48, type: 'photo', src: 'IMG_0047.JPG', thumbnail: 'IMG_0047.JPG' },
    { id: 49, type: 'photo', src: 'IMG_0048.JPG', thumbnail: 'IMG_0048.JPG' },
    { id: 50, type: 'photo', src: 'IMG_0049.JPG', thumbnail: 'IMG_0049.JPG' },
    { id: 51, type: 'photo', src: 'IMG_0050.JPG', thumbnail: 'IMG_0050.JPG' },
    { id: 52, type: 'photo', src: 'IMG_0051.JPG', thumbnail: 'IMG_0051.JPG' },
    { id: 53, type: 'photo', src: 'IMG_0052.JPG', thumbnail: 'IMG_0052.JPG' },
    { id: 54, type: 'photo', src: 'IMG_0053.JPG', thumbnail: 'IMG_0053.JPG' },
    { id: 55, type: 'photo', src: 'IMG_0054.JPG', thumbnail: 'IMG_0054.JPG' },
    { id: 56, type: 'photo', src: 'IMG_0055.JPG', thumbnail: 'IMG_0055.JPG' },
    { id: 57, type: 'photo', src: 'IMG_0056.JPG', thumbnail: 'IMG_0056.JPG' },
    { id: 58, type: 'photo', src: 'IMG_0057.JPG', thumbnail: 'IMG_0057.JPG' },
    { id: 59, type: 'photo', src: 'IMG_0058.JPG', thumbnail: 'IMG_0058.JPG' },
    { id: 60, type: 'photo', src: 'IMG_0059.JPG', thumbnail: 'IMG_0059.JPG' },
    { id: 61, type: 'photo', src: 'IMG_0060.JPG', thumbnail: 'IMG_0060.JPG' },
    { id: 62, type: 'photo', src: 'IMG_0061.JPG', thumbnail: 'IMG_0061.JPG' },
    { id: 63, type: 'photo', src: 'IMG_0062.JPG', thumbnail: 'IMG_0062.JPG' },
    { id: 64, type: 'photo', src: 'IMG_0063.JPG', thumbnail: 'IMG_0063.JPG' },
    { id: 65, type: 'photo', src: 'IMG_0064.JPG', thumbnail: 'IMG_0064.JPG' },
    { id: 66, type: 'photo', src: 'IMG_0065.JPG', thumbnail: 'IMG_0065.JPG' },
    { id: 67, type: 'photo', src: 'IMG_0066.JPG', thumbnail: 'IMG_0066.JPG' },
    { id: 68, type: 'photo', src: 'IMG_0067.JPG', thumbnail: 'IMG_0067.JPG' },
    { id: 69, type: 'photo', src: 'IMG_0068.JPG', thumbnail: 'IMG_0068.JPG' },
    { id: 70, type: 'photo', src: 'IMG_0069.JPG', thumbnail: 'IMG_0069.JPG' },
    { id: 71, type: 'photo', src: 'IMG_0070.JPG', thumbnail: 'IMG_0070.JPG' },
    { id: 72, type: 'photo', src: 'IMG_0071.JPG', thumbnail: 'IMG_0071.JPG' },
    { id: 73, type: 'photo', src: 'IMG_0072.JPG', thumbnail: 'IMG_0072.JPG' },
    { id: 74, type: 'photo', src: 'IMG_0073.JPG', thumbnail: 'IMG_0073.JPG' },
    { id: 75, type: 'photo', src: 'IMG_0074.JPG', thumbnail: 'IMG_0074.JPG' },
    { id: 76, type: 'photo', src: 'IMG_0075.JPG', thumbnail: 'IMG_0075.JPG' },
    { id: 77, type: 'photo', src: 'IMG_0076.JPG', thumbnail: 'IMG_0076.JPG' },
    { id: 78, type: 'photo', src: 'IMG_0077.JPG', thumbnail: 'IMG_0077.JPG' },
    { id: 79, type: 'photo', src: 'IMG_0078.JPG', thumbnail: 'IMG_0078.JPG' },
    { id: 80, type: 'photo', src: 'IMG_0079.JPG', thumbnail: 'IMG_0079.JPG' },
    { id: 81, type: 'photo', src: 'IMG_0080.JPG', thumbnail: 'IMG_0080.JPG' },
    { id: 82, type: 'photo', src: 'IMG_0081.JPG', thumbnail: 'IMG_0081.JPG' },
    { id: 83, type: 'photo', src: 'IMG_0082.JPG', thumbnail: 'IMG_0082.JPG' },
    { id: 84, type: 'photo', src: 'IMG_0083.JPG', thumbnail: 'IMG_0083.JPG' },
    { id: 85, type: 'photo', src: 'IMG_0084.JPG', thumbnail: 'IMG_0084.JPG' },
    { id: 86, type: 'photo', src: 'IMG_0085.JPG', thumbnail: 'IMG_0085.JPG' },
    { id: 87, type: 'photo', src: 'IMG_0086.JPG', thumbnail: 'IMG_0086.JPG' },
    { id: 88, type: 'photo', src: 'IMG_0087.JPG', thumbnail: 'IMG_0087.JPG' },
    { id: 89, type: 'photo', src: 'IMG_0088.JPG', thumbnail: 'IMG_0088.JPG' },
    { id: 90, type: 'photo', src: 'IMG_0089.JPG', thumbnail: 'IMG_0089.JPG' },
    { id: 91, type: 'photo', src: 'IMG_0090.JPG', thumbnail: 'IMG_0090.JPG' },
    { id: 92, type: 'photo', src: 'IMG_0091.JPG', thumbnail: 'IMG_0091.JPG' },
    { id: 93, type: 'photo', src: 'IMG_0092.JPG', thumbnail: 'IMG_0092.JPG' },
    { id: 94, type: 'photo', src: 'IMG_0093.JPG', thumbnail: 'IMG_0093.JPG' },
    { id: 95, type: 'photo', src: 'IMG_0094.JPG', thumbnail: 'IMG_0094.JPG' },
    { id: 96, type: 'photo', src: 'IMG_0095.JPG', thumbnail: 'IMG_0095.JPG' },
    { id: 97, type: 'photo', src: 'IMG_0096.JPG', thumbnail: 'IMG_0096.JPG' },
    { id: 98, type: 'photo', src: 'IMG_0097.JPG', thumbnail: 'IMG_0097.JPG' },
    { id: 99, type: 'photo', src: 'IMG_0098.JPG', thumbnail: 'IMG_0098.JPG' },
    { id: 100, type: 'photo', src: 'IMG_0099.JPG', thumbnail: 'IMG_0099.JPG' },
    { id: 101, type: 'photo', src: 'IMG_0100.JPG', thumbnail: 'IMG_0100.JPG' },
    { id: 102, type: 'photo', src: 'IMG_0101.JPG', thumbnail: 'IMG_0101.JPG' },
    { id: 103, type: 'photo', src: 'IMG_0102.JPG', thumbnail: 'IMG_0102.JPG' },
    { id: 104, type: 'photo', src: 'IMG_0103.JPG', thumbnail: 'IMG_0103.JPG' },
    { id: 105, type: 'photo', src: 'IMG_0104.JPG', thumbnail: 'IMG_0104.JPG' },
    { id: 106, type: 'photo', src: 'IMG_0105.JPG', thumbnail: 'IMG_0105.JPG' },
    { id: 107, type: 'photo', src: 'IMG_0106.JPG', thumbnail: 'IMG_0106.JPG' },
    { id: 108, type: 'photo', src: 'IMG_0107.JPG', thumbnail: 'IMG_0107.JPG' },
    { id: 109, type: 'photo', src: 'IMG_0108.JPG', thumbnail: 'IMG_0108.JPG' },
    { id: 110, type: 'photo', src: 'IMG_0109.JPG', thumbnail: 'IMG_0109.JPG' },
    { id: 111, type: 'photo', src: 'IMG_0110.JPG', thumbnail: 'IMG_0110.JPG' },
    { id: 112, type: 'photo', src: 'IMG_0111.JPG', thumbnail: 'IMG_0111.JPG' },
    { id: 113, type: 'photo', src: 'IMG_0112.JPG', thumbnail: 'IMG_0112.JPG' },
    { id: 114, type: 'photo', src: 'IMG_0113.JPG', thumbnail: 'IMG_0113.JPG' },
    { id: 115, type: 'photo', src: 'IMG_0114.JPG', thumbnail: 'IMG_0114.JPG' },
    { id: 116, type: 'photo', src: 'IMG_0115.JPG', thumbnail: 'IMG_0115.JPG' },
    { id: 117, type: 'photo', src: 'IMG_0116.JPG', thumbnail: 'IMG_0116.JPG' },
    { id: 118, type: 'photo', src: 'IMG_0117.JPG', thumbnail: 'IMG_0117.JPG' },
    { id: 119, type: 'photo', src: 'IMG_0118.JPG', thumbnail: 'IMG_0118.JPG' },
    { id: 120, type: 'photo', src: 'IMG_0119.JPG', thumbnail: 'IMG_0119.JPG' },
    { id: 121, type: 'photo', src: 'IMG_0120.JPG', thumbnail: 'IMG_0120.JPG' },
    { id: 122, type: 'photo', src: 'IMG_0121.JPG', thumbnail: 'IMG_0121.JPG' },
    { id: 123, type: 'photo', src: 'IMG_0122.JPG', thumbnail: 'IMG_0122.JPG' },
    { id: 124, type: 'photo', src: 'IMG_0123.JPG', thumbnail: 'IMG_0123.JPG' },
    { id: 125, type: 'photo', src: 'IMG_0124.JPG', thumbnail: 'IMG_0124.JPG' },
    { id: 126, type: 'photo', src: 'IMG_0125.JPG', thumbnail: 'IMG_0125.JPG' },
    { id: 127, type: 'photo', src: 'IMG_0126.JPG', thumbnail: 'IMG_0126.JPG' },
    { id: 128, type: 'photo', src: 'IMG_0127.JPG', thumbnail: 'IMG_0127.JPG' },
    { id: 129, type: 'photo', src: 'IMG_0128.JPG', thumbnail: 'IMG_0128.JPG' },
    { id: 130, type: 'photo', src: 'IMG_0129.JPG', thumbnail: 'IMG_0129.JPG' },
    { id: 131, type: 'photo', src: 'IMG_0130.JPG', thumbnail: 'IMG_0130.JPG' },
    { id: 132, type: 'photo', src: 'IMG_0131.JPG', thumbnail: 'IMG_0131.JPG' },
    { id: 133, type: 'photo', src: 'IMG_0132.JPG', thumbnail: 'IMG_0132.JPG' },
    { id: 134, type: 'photo', src: 'IMG_0133.JPG', thumbnail: 'IMG_0133.JPG' },
    { id: 135, type: 'photo', src: 'IMG_0134.JPG', thumbnail: 'IMG_0134.JPG' },
    { id: 136, type: 'photo', src: 'IMG_0135.JPG', thumbnail: 'IMG_0135.JPG' },
    { id: 137, type: 'photo', src: 'IMG_0136.JPG', thumbnail: 'IMG_0136.JPG' },
    { id: 138, type: 'photo', src: 'IMG_0137.JPG', thumbnail: 'IMG_0137.JPG' },
    { id: 139, type: 'photo', src: 'IMG_0138.JPG', thumbnail: 'IMG_0138.JPG' },
    { id: 140, type: 'photo', src: 'IMG_0139.JPG', thumbnail: 'IMG_0139.JPG' },
    { id: 141, type: 'photo', src: 'IMG_0140.JPG', thumbnail: 'IMG_0140.JPG' },
    { id: 142, type: 'photo', src: 'IMG_0141.JPG', thumbnail: 'IMG_0141.JPG' },
    { id: 143, type: 'photo', src: 'IMG_0142.JPG', thumbnail: 'IMG_0142.JPG' },
    { id: 144, type: 'photo', src: 'IMG_0143.JPG', thumbnail: 'IMG_0143.JPG' },
    { id: 145, type: 'photo', src: 'IMG_0144.JPG', thumbnail: 'IMG_0144.JPG' },
    { id: 146, type: 'photo', src: 'IMG_0145.JPG', thumbnail: 'IMG_0145.JPG' },
    { id: 147, type: 'photo', src: 'IMG_0146.JPG', thumbnail: 'IMG_0146.JPG' },
    { id: 148, type: 'photo', src: 'IMG_0147.JPG', thumbnail: 'IMG_0147.JPG' },
    { id: 149, type: 'photo', src: 'IMG_0148.JPG', thumbnail: 'IMG_0148.JPG' },
    { id: 150, type: 'photo', src: 'IMG_0149.JPG', thumbnail: 'IMG_0149.JPG' },
    { id: 151, type: 'photo', src: 'IMG_0150.JPG', thumbnail: 'IMG_0150.JPG' },
    { id: 152, type: 'photo', src: 'IMG_0151.JPG', thumbnail: 'IMG_0151.JPG' },
    { id: 153, type: 'photo', src: 'IMG_0152.JPG', thumbnail: 'IMG_0152.JPG' },
    { id: 154, type: 'photo', src: 'IMG_0153.JPG', thumbnail: 'IMG_0153.JPG' },
    { id: 155, type: 'photo', src: 'IMG_0154.JPG', thumbnail: 'IMG_0154.JPG' },
    { id: 156, type: 'photo', src: 'IMG_0155.JPG', thumbnail: 'IMG_0155.JPG' },
    { id: 157, type: 'photo', src: 'IMG_0156.JPG', thumbnail: 'IMG_0156.JPG' },
    { id: 158, type: 'photo', src: 'IMG_0157.JPG', thumbnail: 'IMG_0157.JPG' },
    { id: 159, type: 'photo', src: 'IMG_0158.JPG', thumbnail: 'IMG_0158.JPG' },
    { id: 160, type: 'photo', src: 'IMG_0159.JPG', thumbnail: 'IMG_0159.JPG' },
    { id: 161, type: 'photo', src: 'IMG_0160.JPG', thumbnail: 'IMG_0160.JPG' },
    { id: 162, type: 'photo', src: 'IMG_0161.JPG', thumbnail: 'IMG_0161.JPG' },
    { id: 163, type: 'photo', src: 'IMG_0162.JPG', thumbnail: 'IMG_0162.JPG' },
    { id: 164, type: 'photo', src: 'IMG_0163.JPG', thumbnail: 'IMG_0163.JPG' },
    { id: 165, type: 'photo', src: 'IMG_0164.JPG', thumbnail: 'IMG_0164.JPG' },
    { id: 166, type: 'photo', src: 'IMG_0165.JPG', thumbnail: 'IMG_0165.JPG' },
    { id: 167, type: 'photo', src: 'IMG_0166.JPG', thumbnail: 'IMG_0166.JPG' },
    { id: 168, type: 'photo', src: 'IMG_0167.JPG', thumbnail: 'IMG_0167.JPG' },
    { id: 169, type: 'photo', src: 'IMG_0168.JPG', thumbnail: 'IMG_0168.JPG' },
    { id: 170, type: 'photo', src: 'IMG_0169.JPG', thumbnail: 'IMG_0169.JPG' },
    { id: 171, type: 'photo', src: 'IMG_0170.JPG', thumbnail: 'IMG_0170.JPG' },
    { id: 172, type: 'photo', src: 'IMG_0171.JPG', thumbnail: 'IMG_0171.JPG' },
    { id: 173, type: 'photo', src: 'IMG_0172.JPG', thumbnail: 'IMG_0172.JPG' },
    { id: 174, type: 'photo', src: 'IMG_0173.JPG', thumbnail: 'IMG_0173.JPG' },
    { id: 175, type: 'photo', src: 'IMG_0174.JPG', thumbnail: 'IMG_0174.JPG' },
    { id: 176, type: 'photo', src: 'IMG_0175.JPG', thumbnail: 'IMG_0175.JPG' },
    { id: 177, type: 'photo', src: 'IMG_0176.JPG', thumbnail: 'IMG_0176.JPG' },
    { id: 178, type: 'photo', src: 'IMG_0177.JPG', thumbnail: 'IMG_0177.JPG' },
    { id: 179, type: 'photo', src: 'IMG_0178.JPG', thumbnail: 'IMG_0178.JPG' },
    { id: 180, type: 'photo', src: 'IMG_0179.JPG', thumbnail: 'IMG_0179.JPG' },
    { id: 181, type: 'photo', src: 'IMG_0180.JPG', thumbnail: 'IMG_0180.JPG' },
    { id: 182, type: 'photo', src: 'IMG_0181.JPG', thumbnail: 'IMG_0181.JPG' },
    { id: 183, type: 'photo', src: 'IMG_0182.JPG', thumbnail: 'IMG_0182.JPG' },
    { id: 184, type: 'photo', src: 'IMG_0183.JPG', thumbnail: 'IMG_0183.JPG' },
    { id: 185, type: 'photo', src: 'IMG_0184.JPG', thumbnail: 'IMG_0184.JPG' },
    { id: 186, type: 'photo', src: 'IMG_0185.JPG', thumbnail: 'IMG_0185.JPG' },
    { id: 187, type: 'photo', src: 'IMG_0186.JPG', thumbnail: 'IMG_0186.JPG' },
    { id: 188, type: 'photo', src: 'IMG_0187.JPG', thumbnail: 'IMG_0187.JPG' },
    { id: 189, type: 'photo', src: 'IMG_0188.JPG', thumbnail: 'IMG_0188.JPG' },
    { id: 190, type: 'photo', src: 'IMG_0189.JPG', thumbnail: 'IMG_0189.JPG' },
    { id: 191, type: 'photo', src: 'IMG_0190.JPG', thumbnail: 'IMG_0190.JPG' },
    { id: 192, type: 'photo', src: 'IMG_0191.JPG', thumbnail: 'IMG_0191.JPG' },
    { id: 193, type: 'photo', src: 'IMG_0192.JPG', thumbnail: 'IMG_0192.JPG' },
    { id: 194, type: 'photo', src: 'IMG_0193.JPG', thumbnail: 'IMG_0193.JPG' },
    { id: 195, type: 'photo', src: 'IMG_0194.JPG', thumbnail: 'IMG_0194.JPG' },
    { id: 196, type: 'photo', src: 'IMG_0195.JPG', thumbnail: 'IMG_0195.JPG' },
    { id: 197, type: 'photo', src: 'IMG_0196.JPG', thumbnail: 'IMG_0196.JPG' },
    { id: 198, type: 'photo', src: 'IMG_0197.JPG', thumbnail: 'IMG_0197.JPG' },
    { id: 199, type: 'photo', src: 'IMG_0198.JPG', thumbnail: 'IMG_0198.JPG' },
    { id: 200, type: 'photo', src: 'IMG_0199.JPG', thumbnail: 'IMG_0199.JPG' },
    { id: 201, type: 'photo', src: 'IMG_0200.JPG', thumbnail: 'IMG_0200.JPG' },
    { id: 202, type: 'photo', src: 'IMG_0201.JPG', thumbnail: 'IMG_0201.JPG' },
    { id: 203, type: 'photo', src: 'IMG_0202.JPG', thumbnail: 'IMG_0202.JPG' },
    { id: 204, type: 'photo', src: 'IMG_0203.JPG', thumbnail: 'IMG_0203.JPG' },
    { id: 205, type: 'photo', src: 'IMG_0204.JPG', thumbnail: 'IMG_0204.JPG' },
    { id: 206, type: 'photo', src: 'IMG_0205.JPG', thumbnail: 'IMG_0205.JPG' },
    { id: 207, type: 'photo', src: 'IMG_0206.JPG', thumbnail: 'IMG_0206.JPG' },
    { id: 208, type: 'photo', src: 'IMG_0207.JPG', thumbnail: 'IMG_0207.JPG' },
    { id: 209, type: 'photo', src: 'IMG_0208.JPG', thumbnail: 'IMG_0208.JPG' },
    { id: 210, type: 'photo', src: 'IMG_0209.JPG', thumbnail: 'IMG_0209.JPG' },
    { id: 211, type: 'photo', src: 'IMG_0210.JPG', thumbnail: 'IMG_0210.JPG' },
    { id: 212, type: 'photo', src: 'IMG_0211.JPG', thumbnail: 'IMG_0211.JPG' },
    { id: 213, type: 'photo', src: 'IMG_0212.JPG', thumbnail: 'IMG_0212.JPG' },
    { id: 214, type: 'photo', src: 'IMG_0213.JPG', thumbnail: 'IMG_0213.JPG' },
    { id: 215, type: 'photo', src: 'IMG_0214.JPG', thumbnail: 'IMG_0214.JPG' },
    { id: 216, type: 'photo', src: 'IMG_0215.JPG', thumbnail: 'IMG_0215.JPG' },
    { id: 217, type: 'photo', src: 'IMG_0216.JPG', thumbnail: 'IMG_0216.JPG' },
    { id: 218, type: 'photo', src: 'IMG_0217.JPG', thumbnail: 'IMG_0217.JPG' },
    { id: 219, type: 'photo', src: 'IMG_0218.JPG', thumbnail: 'IMG_0218.JPG' },
    { id: 220, type: 'photo', src: 'IMG_0219.JPG', thumbnail: 'IMG_0219.JPG' },
    { id: 221, type: 'photo', src: 'IMG_0220.JPG', thumbnail: 'IMG_0220.JPG' },
    { id: 222, type: 'photo', src: 'IMG_0221.JPG', thumbnail: 'IMG_0221.JPG' },
    { id: 223, type: 'photo', src: 'IMG_0222.JPG', thumbnail: 'IMG_0222.JPG' },
    { id: 224, type: 'photo', src: 'IMG_0223.JPG', thumbnail: 'IMG_0223.JPG' },
    { id: 225, type: 'photo', src: 'IMG_0224.JPG', thumbnail: 'IMG_0224.JPG' },
    { id: 226, type: 'photo', src: 'IMG_0225.JPG', thumbnail: 'IMG_0225.JPG' },
    { id: 227, type: 'photo', src: 'IMG_0226.JPG', thumbnail: 'IMG_0226.JPG' },
    { id: 228, type: 'photo', src: 'IMG_0227.JPG', thumbnail: 'IMG_0227.JPG' },
    { id: 229, type: 'photo', src: 'IMG_0228.JPG', thumbnail: 'IMG_0228.JPG' },
    { id: 230, type: 'photo', src: 'IMG_0229.JPG', thumbnail: 'IMG_0229.JPG' },
    { id: 231, type: 'photo', src: 'IMG_0230.JPG', thumbnail: 'IMG_0230.JPG' },
    { id: 232, type: 'photo', src: 'IMG_0231.JPG', thumbnail: 'IMG_0231.JPG' },
    { id: 233, type: 'photo', src: 'IMG_0232.JPG', thumbnail: 'IMG_0232.JPG' },
    { id: 234, type: 'photo', src: 'IMG_0233.JPG', thumbnail: 'IMG_0233.JPG' },
    { id: 235, type: 'photo', src: 'IMG_0234.JPG', thumbnail: 'IMG_0234.JPG' },
    { id: 236, type: 'photo', src: 'IMG_0235.JPG', thumbnail: 'IMG_0235.JPG' },
    { id: 237, type: 'photo', src: 'IMG_0236.JPG', thumbnail: 'IMG_0236.JPG' },
    { id: 238, type: 'photo', src: 'IMG_0237.JPG', thumbnail: 'IMG_0237.JPG' },
    { id: 239, type: 'photo', src: 'IMG_0238.JPG', thumbnail: 'IMG_0238.JPG' },
    { id: 240, type: 'photo', src: 'IMG_0239.JPG', thumbnail: 'IMG_0239.JPG' }
];

class MediaGallery {
    constructor() {
        this.currentFilter = 'all';
        this.currentLightboxIndex = 0;
        this.filteredMedia = [...mediaData];
        
        this.init();
    }
    
    init() {
        this.renderGallery();
        this.bindEvents();
        this.preloadImages();
    }
    
    renderGallery() {
        const grid = document.getElementById('galleryGrid');
        grid.innerHTML = '';
        
        // Check if there's no media data
        if (this.filteredMedia.length === 0) {
            grid.innerHTML = `
                <div style="
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 60px 20px;
                    color: var(--text-secondary);
                    font-size: 1.2rem;
                ">
                    <div style="font-size: 4rem; margin-bottom: 20px; opacity: 0.3;">📸</div>
                    <h3 style="margin-bottom: 15px; color: var(--text-primary);">No media found</h3>
                    <p>Add your photos and videos to the <strong>mediaData</strong> array in script.js</p>
                    <p style="margin-top: 10px; font-size: 0.9rem; opacity: 0.8;">
                        Check the comments in the code for the correct format!
                    </p>
                </div>
            `;
            return;
        }
        
        // Add loading animation
        grid.innerHTML = '<div class="loading"></div>';
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            grid.innerHTML = '';
            
            this.filteredMedia.forEach((item, index) => {
                const mediaElement = this.createMediaElement(item, index);
                grid.appendChild(mediaElement);
            });
            
            // Animate items in
            this.animateItemsIn();
        }, 500);
    }
    
    createMediaElement(item, index) {
        const mediaItem = document.createElement('div');
        mediaItem.className = 'media-item';
        mediaItem.setAttribute('data-type', item.type);
        mediaItem.setAttribute('data-index', index);
        
        const isVideo = item.type === 'video';
        const mediaTag = isVideo ? 'video' : 'img';
        const playButton = isVideo ? '<div class="play-button"><i class="fas fa-play"></i></div>' : '';
        
        // Handle HEIC files (browsers don't support HEIC)
        const errorHandler = item.src.includes('.HEIC') ? 
            `this.onerror = function() { 
                console.log('HEIC file not supported by browsers: ${item.src}');
                this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjE0Ij5IRUFDIE5vdCBTdXBwb3J0ZWQ8L3RleHQ+Cjwvc3ZnPg=='; 
                this.alt='HEIC format not supported by browsers'; 
            };` :
            (item.src.includes('.MOV') ?
            `this.onerror = function() { 
                console.log('MOV file may not play in all browsers: ${item.src}');
                this.style.display = 'none';
            };` :
            `this.onerror = function() { 
                console.log('Image failed to load: ${item.src}');
                this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjE0Ij5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPg=='; 
                this.alt='Image not found'; 
            };`);
        
        mediaItem.innerHTML = `
            <div class="media-content">
                <${mediaTag} 
                    src="${item.thumbnail || item.src}" 
                    alt="Gallery media" 
                    ${isVideo ? 'muted loop' : ''}
                    onerror="${errorHandler}"
                >
                </${mediaTag}>
                ${playButton}
                <div class="media-type-indicator">
                    <i class="fas fa-${isVideo ? 'video' : 'camera'}"></i>
                    ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </div>
            </div>
        `;
        
        // Add click event to open lightbox
        mediaItem.addEventListener('click', () => this.openLightbox(index));
        
        // Auto-play video on hover
        if (isVideo) {
            const video = mediaItem.querySelector('video');
            mediaItem.addEventListener('mouseenter', () => {
                video.play().catch(e => console.log('Video play failed:', e));
            });
            mediaItem.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
        
        return mediaItem;
    }
    
    animateItemsIn() {
        const items = document.querySelectorAll('.media-item');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    filterMedia(filter) {
        this.currentFilter = filter;
        
        if (filter === 'all') {
            this.filteredMedia = [...mediaData];
        } else {
            this.filteredMedia = mediaData.filter(item => item.type === filter);
        }
        
        this.renderGallery();
    }
    
    openLightbox(index) {
        this.currentLightboxIndex = index;
        const lightbox = document.getElementById('lightbox');
        const item = this.filteredMedia[index];
        
        this.renderLightboxContent(item);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add keyboard navigation
        document.addEventListener('keydown', this.handleKeyboardNav.bind(this));
    }
    
    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Remove keyboard navigation
        document.removeEventListener('keydown', this.handleKeyboardNav.bind(this));
        
        // Pause any playing video
        const video = document.querySelector('#lightboxMediaContainer video');
        if (video) {
            video.pause();
        }
    }
    
    renderLightboxContent(item) {
        const container = document.getElementById('lightboxMediaContainer');
        
        const isVideo = item.type === 'video';
        const mediaTag = isVideo ? 'video' : 'img';
        // For videos in lightbox, don't mute so you can hear audio
        const videoAttrs = isVideo ? 'controls autoplay' : '';
        
        // Handle HEIC files (browsers don't support HEIC)
        const errorHandler = item.src.includes('.HEIC') ? 
            `this.onerror = function() { 
                console.log('HEIC file not supported by browsers: ${item.src}');
                this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMjIyIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjI0Ij5IRUFDIE5vdCBTdXBwb3J0ZWQ8L3RleHQ+Cjwvc3ZnPg=='; 
                this.alt='HEIC format not supported by browsers'; 
            };` :
            `this.onerror = function() { 
                console.log('Media failed to load: ${item.src}');
                this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMjIyIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjI0Ij5NZWRpYSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPg=='; 
                this.alt='Media not found'; 
            };`;
        
        container.innerHTML = `
            <${mediaTag} 
                class="lightbox-media" 
                src="${item.src}" 
                alt="Gallery media"
                ${videoAttrs}
                onerror="${errorHandler}"
            ></${mediaTag}>
        `;
        
        // Update navigation visibility
        this.updateNavigationVisibility();
    }
    
    updateNavigationVisibility() {
        const prevBtn = document.getElementById('lightboxPrev');
        const nextBtn = document.getElementById('lightboxNext');
        
        prevBtn.style.display = this.currentLightboxIndex > 0 ? 'flex' : 'none';
        nextBtn.style.display = this.currentLightboxIndex < this.filteredMedia.length - 1 ? 'flex' : 'none';
    }
    
    navigateLightbox(direction) {
        const newIndex = this.currentLightboxIndex + direction;
        
        if (newIndex >= 0 && newIndex < this.filteredMedia.length) {
            this.currentLightboxIndex = newIndex;
            const item = this.filteredMedia[this.currentLightboxIndex];
            this.renderLightboxContent(item);
        }
    }
    
    handleKeyboardNav(e) {
        switch(e.key) {
            case 'Escape':
                this.closeLightbox();
                break;
            case 'ArrowLeft':
                this.navigateLightbox(-1);
                break;
            case 'ArrowRight':
                this.navigateLightbox(1);
                break;
        }
    }
    
    preloadImages() {
        // Preload first few images for smooth navigation
        const preloadCount = Math.min(20, mediaData.length);
        
        for (let i = 0; i < preloadCount; i++) {
            const item = mediaData[i];
            if (item.type === 'photo' && !item.src.includes('.HEIC')) {
                const img = new Image();
                img.src = item.src;
                if (item.thumbnail && item.thumbnail !== item.src) {
                    const thumb = new Image();
                    thumb.src = item.thumbnail;
                }
            }
        }
    }
    
    bindEvents() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update active state
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter media
                const filter = btn.getAttribute('data-filter');
                this.filterMedia(filter);
            });
        });
        
        // Lightbox controls
        document.getElementById('lightboxClose').addEventListener('click', () => this.closeLightbox());
        document.getElementById('lightboxPrev').addEventListener('click', () => this.navigateLightbox(-1));
        document.getElementById('lightboxNext').addEventListener('click', () => this.navigateLightbox(1));
        
        // Close lightbox when clicking outside content
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') {
                this.closeLightbox();
            }
        });
        
        // Smooth scroll for any anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MediaGallery();
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optional: Add infinite scroll functionality
function addInfiniteScroll() {
    let isLoading = false;
    
    window.addEventListener('scroll', debounce(() => {
        if (isLoading) return;
        
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
        if (scrollTop + clientHeight >= scrollHeight - 1000) {
            // Load more content here
            // This is where you'd typically fetch more data from an API
            console.log('Loading more content...');
        }
    }, 100));
}

// Function to dynamically add media (useful for adding content via JavaScript)
function addMedia(newMediaItem) {
    // Validate the media item has required properties
    if (!newMediaItem.id || !newMediaItem.type || !newMediaItem.src) {
        console.error('Media item must have id, type, and src properties');
        return false;
    }
    
    mediaData.push(newMediaItem);
    
    // Re-render gallery if it exists
    const gallery = window.mediaGallery;
    if (gallery) {
        gallery.filteredMedia = [...mediaData];
        gallery.renderGallery();
    }
    
    return true;
}

// Function to remove media by ID
function removeMedia(mediaId) {
    const index = mediaData.findIndex(item => item.id === mediaId);
    if (index > -1) {
        mediaData.splice(index, 1);
        
        // Re-render gallery if it exists
        const gallery = window.mediaGallery;
        if (gallery) {
            gallery.filteredMedia = [...mediaData];
            gallery.renderGallery();
        }
        
        return true;
    }
    return false;
}

// Make gallery instance globally accessible for helper functions
window.addEventListener('DOMContentLoaded', () => {
    window.mediaGallery = new MediaGallery();
});
