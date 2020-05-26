# Seeing Stars


Astronomy, Astrophysics, Astrometry, Astrodynamics, AAAA

Here is the output from a CCD Camera from a star tracker, identify as many stars as you can! (in image reference coordinates) Note: The camera prints pixels in the following order (x,y): (0,0), (1,0), (2,0)... (0,1), (1,1), (2,1)…

Note that top left corner is (0,0).


---

![1](https://github.com/Nukki/hack-a-sat/blob/master/Seeing_Stars/png/image1.png)
![2](https://github.com/Nukki/hack-a-sat/blob/master/Seeing_Stars/png/image2.png)
![3](https://github.com/Nukki/hack-a-sat/blob/master/Seeing_Stars/png/image3.png)
![4](https://github.com/Nukki/hack-a-sat/blob/master/Seeing_Stars/png/image4.png)
![5](https://github.com/Nukki/hack-a-sat/blob/master/Seeing_Stars/png/image5.png)

---


## The JavaScript Solution

* uses Node.js `net` to stablish TCP connection to server
* uses [Jimp](https://www.npmjs.com/package/jimp) to generate images from data
* saves image data in `data` folder
* saves generated images in `png` folder


### Run the solution
1. Install Jimp dependency:
```
$ npm install
```

2. Get the flag:
```
$ node index.js
```

3. Make star images:
```
$ node makeImages.js
```
