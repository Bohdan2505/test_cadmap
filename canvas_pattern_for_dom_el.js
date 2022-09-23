function hexToRGB(h, opacity) {
//         if (!opacity) {opacity=0.2}
        
var hex_colors_dict = {
   'aliceblue':'#f0f8ff',
'antiquewhite':'#faebd7',
'aqua':'#00ffff',
'aquamarine':'#7fffd4',
'azure':'#f0ffff',
'beige':'#f5f5dc',
'bisque':'#ffe4c4',
'black':'#000000',
'blanchedalmond':'#ffebcd',
'blue':'#0000ff',
'blueviolet':'#8a2be2',
'brown':'#a52a2a',
'burlywood':'#deb887',
'cadetblue':'#5f9ea0',
'chartreuse':'#7fff00',
'chocolate':'#d2691e',
'coral':'#ff7f50',
'cornflowerblue':'#6495ed',
'cornsilk':'#fff8dc',
'crimson':'#dc143c',
'cyan':'#00ffff',
'darkblue':'#00008b',
'darkcyan':'#008b8b',
'darkgoldenrod':'#b8860b',
'darkgray':'#a9a9a9',
'darkgreen':'#006400',
'darkgrey':'#a9a9a9',
'darkkhaki':'#bdb76b',
'darkmagenta':'#8b008b',
'darkolivegreen':'#556b2f',
'darkorange':'#ff8c00',
'darkorchid':'#9932cc',
'darkred':'#8b0000',
'darksalmon':'#e9967a',
'darkseagreen':'#8fbc8f',
'darkslateblue':'#483d8b',
'darkslategray':'#2f4f4f',
'darkslategrey':'#2f4f4f',
'darkturquoise':'#00ced1',
'darkviolet':'#9400d3',
'deeppink':'#ff1493',
'deepskyblue':'#00bfff',
'dimgray':'#696969',
'dimgrey':'#696969',
'dodgerblue':'#1e90ff',
'firebrick':'#b22222',
'floralwhite':'#fffaf0',
'forestgreen':'#228b22',
'fuchsia':'#ff00ff',
'gainsboro':'#dcdcdc',
'ghostwhite':'#f8f8ff',
'gold':'#ffd700',
'goldenrod':'#daa520',
'gray':'#808080',
'green':'#008000',
'greenyellow':'#adff2f',
'grey':'#808080',
'honeydew':'#f0fff0',
'hotpink':'#ff69b4',
'indianred':'#cd5c5c',
'indigo':'#4b0082',
'ivory':'#fffff0',
'khaki':'#f0e68c',
'lavender':'#e6e6fa',
'lavenderblush':'#fff0f5',
'lawngreen':'#7cfc00',
'lemonchiffon':'#fffacd',
'lightblue':'#add8e6',
'lightcoral':'#f08080',
'lightcyan':'#e0ffff',
'lightgoldenrodyellow':'#fafad2',
'lightgray':'#d3d3d3',
'lightgreen':'#90ee90',
'lightgrey':'#d3d3d3',
'lightpink':'#ffb6c1',
'lightsalmon':'#ffa07a',
'lightseagreen':'#20b2aa',
'lightskyblue':'#87cefa',
'lightslategray':'#778899',
'lightslategrey':'#778899',
'lightsteelblue':'#b0c4de',
'lightyellow':'#ffffe0',
'lime':'#00ff00',
'limegreen':'#32cd32',
'linen':'#faf0e6',
'magenta':'#ff00ff',
'maroon':'#800000',
'mediumaquamarine':'#66cdaa',
'mediumblue':'#0000cd',
'mediumorchid':'#ba55d3',
'mediumpurple':'#9370db',
'mediumseagreen':'#3cb371',
'mediumslateblue':'#7b68ee',
'mediumspringgreen':'#00fa9a',
'mediumturquoise':'#48d1cc',
'mediumvioletred':'#c71585',
'midnightblue':'#191970',
'mintcream':'#f5fffa',
'mistyrose':'#ffe4e1',
'moccasin':'#ffe4b5',
'navajowhite':'#ffdead',
'navy':'#000080',
'oldlace':'#fdf5e6',
'olive':'#808000',
'olivedrab':'#6b8e23',
'orange':'#ffa500',
'orangered':'#ff4500',
'orchid':'#da70d6',
'palegoldenrod':'#eee8aa',
'palegreen':'#98fb98',
'paleturquoise':'#afeeee',
'palevioletred':'#db7093',
'papayawhip':'#ffefd5',
'peachpuff':'#ffdab9',
'peru':'#cd853f',
'pink':'#ffc0cb',
'plum':'#dda0dd',
'powderblue':'#b0e0e6',
'purple':'#800080',
'red':'#ff0000',
'rosybrown':'#bc8f8f',
'royalblue':'#4169e1',
'saddlebrown':'#8b4513',
'salmon':'#fa8072',
'sandybrown':'#f4a460',
'seagreen':'#2e8b57',
'seashell':'#fff5ee',
'sienna':'#a0522d',
'silver':'#c0c0c0',
'skyblue':'#87ceeb',
'slateblue':'#6a5acd',
'slategray':'#708090',
'slategrey':'#708090',
'snow':'#fffafa',
'springgreen':'#00ff7f',
'steelblue':'#4682b4',
'tan':'#d2b48c',
'teal':'#008080',
'thistle':'#d8bfd8',
'tomato':'#ff6347',
'turquoise':'#40e0d0',
'violet':'#ee82ee',
'wheat':'#f5deb3',
'white':'#ffffff',
'whitesmoke':'#f5f5f5',
'yellow':'#ffff00',
'yellowgreen':'#9acd32'
    
}         
        if (h[0] !=='#') {
            h = hex_colors_dict[h]
        }
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
//   console.log("rgb("+ +r + "," + +g + "," + +b + "," + opacity +")")
  return "rgb("+ +r + "," + +g + "," + +b + "," + opacity +")";
  
}

function set_canvas_element_stripe (elementId, stripeId, borderColor, fillColor, fillOpacity, strokeColor) {
    
    if (!fillOpacity) {fillOpacity = 0}
    
    if (!fillColor) {fillColor = borderColor}
    
    
    
    if (elementId) {
        
        var canvas = document.getElementById(elementId)
        const ctx = canvas.getContext('2d');
        ctx.save();
        var pattern_canvas = document.createElement("canvas")
        
        
        
        var canvas_size = 50
        pattern_canvas.width = canvas_size;
        pattern_canvas.height = canvas_size;
        var pctx = pattern_canvas.getContext('2d');
    
        pctx.lineWidth = 10;
        
        delta_border = canvas_size/pctx.lineWidth // Розрахунок відступу, щоб не було видно переходу ліній при відображенні
        pctx.strokeStyle = strokeColor;
        
        if (stripeId =='diagonal_left_up_to_right_down') {
            var x0 = -1 * delta_border;
            var x1 = canvas_size + delta_border;
            var y0 = -1 * delta_border;
            var y1 = canvas_size + delta_border;
            var offset = canvas_size;

            pctx.beginPath();
            pctx.moveTo(x0, y0);
            pctx.lineTo(x1, y1);
            pctx.moveTo(x0 - offset, y0);
            pctx.lineTo(x1 - offset, y1);
            pctx.moveTo(x0 + offset, y0);
            pctx.lineTo(x1 + offset, y1);
            pctx.stroke(); 
        
        }
        
        if (stripeId =='diagonal_left_down_to_right_up') {
            var x0 = -1 * delta_border;
            var x1 = canvas_size + delta_border;
            var y0 = -1 * delta_border;
            var y1 = canvas_size + delta_border;
            var offset = canvas_size;

            
            pctx.beginPath();
            pctx.moveTo(x0, y1);
            pctx.lineTo(x1, y0);
            pctx.moveTo(x0 - offset, y1);
            pctx.lineTo(x1 - offset, y0);
            pctx.moveTo(x0 + offset, y1);
            pctx.lineTo(x1 + offset, y0);
            pctx.stroke();
            
        }
        
        if (stripeId =='crossing') {
            var x0 = -1 * delta_border;
            var x1 = canvas_size + delta_border;
            var y0 = -1 * delta_border;
            var y1 = canvas_size + delta_border;
            var offset = canvas_size;

            
            pctx.beginPath();
            pctx.moveTo(x0, y0);
            pctx.lineTo(x1, y1);
            pctx.moveTo(x0 - offset, y0);
            pctx.lineTo(x1 - offset, y1);
            pctx.moveTo(x0 + offset, y0);
            pctx.lineTo(x1 + offset, y1);
            
            pctx.moveTo(x0, y1);
            pctx.lineTo(x1, y0);
            pctx.moveTo(x0 - offset, y1);
            pctx.lineTo(x1 - offset, y0);
            pctx.moveTo(x0 + offset, y1);
            pctx.lineTo(x1 + offset, y0);
            pctx.stroke();
            
        }
        
        
        
        
        if (stripeId =='horizontal') {
            var x0 = 0;
            var x1 = canvas_size;
            var y0 = delta_border;
            var y1 = canvas_size;


            pctx.beginPath();
            pctx.moveTo(x0, y0+delta_border);
            pctx.lineTo(x1, y0+delta_border);
            pctx.stroke();
            
        }
        
        if (stripeId =='vertical') {
            var x0 = delta_border;
            var x1 = canvas_size;
            var y0 = 0;
            var y1 = canvas_size;


            pctx.beginPath();
            pctx.moveTo(x0, y0);
            pctx.lineTo(x0, y1);
            pctx.stroke();
            
        }
        ctx.fillStyle =  '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = hexToRGB(fillColor, fillOpacity);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = ctx.createPattern(pattern_canvas,'repeat');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = canvas.width/10;
        ctx.strokeStyle = borderColor;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
        ctx.restore()

    }
}

function set_canvas_element_fill_color (elementId, fillColor, fillOpacity, borderColor) {
    var canvas = document.getElementById(elementId)
    const ctx = canvas.getContext('2d');
//      console.log(elementId, fillOpacity, borderColor, fillColor)
//     console.log(canvas.style.width)
    ctx.save();
    ctx.fillStyle =  '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle =  hexToRGB(fillColor, fillOpacity);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = canvas.width/10;
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    
}


function set_canvas_element_one_line (elementId, color) {
    var canvas = document.getElementById(elementId)
//     console.log(elementId, color)
    const ctx = canvas.getContext('2d');
    ctx.save();
    var pattern_canvas = document.createElement("canvas")
        
    pattern_canvas.width = canvas.width;
    pattern_canvas.height = canvas.height;
    var pctx = pattern_canvas.getContext('2d');
    
    pctx.lineWidth = 16;

    pctx.strokeStyle = color;
        
    var x0 = 0;
    var x1 = canvas.width;
    var y0 = canvas.height/2;
    var y1 = canvas.height;


    pctx.beginPath();
    pctx.moveTo(x0, y0);
    pctx.lineTo(x1, y0);
    pctx.stroke();
        
    ctx.fillStyle = ctx.createPattern(pattern_canvas,'repeat');
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.restore()
        
}


        
