overlayrb
=========

1. First install either [GraphicsMagick](http://www.graphicsmagick.org/) or [ImageMagick](http://www.imagemagick.org/). Then:

> npm install gm

2. 把要改变颜色的纯色图标放在front-image文件夹中（图片格式为png或jpg）

3. 要修改为哪些颜色，每行一个写在front-color.txt中。

## 尚未解决的问题

由#开头的16进制颜色表中，颜色转换为RGB变换矩阵时存在缺陷，无法计算原图标的基准值，所以暂时硬编码为41（好糟糕）。