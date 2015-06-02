var fs = require('fs')
  , gm = require('gm').subClass({ imageMagick : true })
  , readline = require('readline');

// 设置前景色
var forColor = "#ff0000";


// 将一个RGB色值变成颜色修改矩阵
function convertColorToMatrix(color){
	var colorString = color.replace('#','');
	var colorArray = [colorString.substring(0,2), colorString.substring(2,4), colorString.substring(4,6)];
	return parseInt(colorArray[0], 16)/41 + " 0 0, " + parseInt(colorArray[1], 16)/41 + " 0 0, " 
	+ parseInt(colorArray[2], 16)/41 + " 0 0 ";
}

// 设置颜色
function setColor(grayScaleImage, color){
	var colorMatrixString = convertColorToMatrix(color);
	console.log(color + ": " + colorMatrixString);
	grayScaleImage.recolor(colorMatrixString)
	.write('tmp/' + color +'.png', function(err){
		if (err) conosle.log(err);
	});

}

//读取front-color.txt，并输出到
var rd = readline.createInterface({
    input: fs.createReadStream('front-color.txt'),
    output: process.stdout,
    terminal: false
});

rd.on('line', function(line){
	var grayScaleImage = gm('front-image/game_challenge@2x.png');
	setColor(grayScaleImage, line);
});

rd.on('close', function() {
	console.log('Have a great day!');
});