(function (window, document, undefined) {
    if (L.Canvas) {
        L.Canvas.include({
            _fillStroke: function (ctx, layer) {

                var options = layer.options

                if (options.fill) {
                    ctx.globalAlpha = options.fillOpacity
                    ctx.fillStyle = options.fillColor || options.color

                    ctx.fill(options.fillRule || 'evenodd')
                }

                if (options.stroke && options.weight !== 0) {
                    if (ctx.setLineDash) {
                        ctx.setLineDash(layer.options && layer.options._dashArray || [])
                    }

                    ctx.globalAlpha = options.opacity
                    ctx.lineWidth = options.weight
                    ctx.strokeStyle = options.color
                    ctx.lineCap = options.lineCap
                    ctx.lineJoin = options.lineJoin
                    ctx.stroke()
                    if (options.stripeId) {

                        var stripe = document.getElementById(options.stripeId)
                        ctx.save() // so we can remove the clipping
                        ctx.clip()
                        var bounds = layer._rawPxBounds
                        var size = bounds.getSize()
                        
                        var pattern_canvas = document.createElement("canvas")
                        
                        var canvas_size = 16
                        pattern_canvas.width = canvas_size;
                        pattern_canvas.height = canvas_size;
                        var pctx = pattern_canvas.getContext('2d');
                    
                        pctx.lineWidth = 4;
                        
                        delta_border = canvas_size/pctx.lineWidth // Розрахунок відступу, щоб не було видно переходу ліній при відображенні
                        pctx.strokeStyle = options.stripeColor;
                        
                        if (options.stripeId == 'diagonal_left_up_to_right_down') {
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
                        
                        if (options.stripeId == 'diagonal_left_down_to_right_up') {
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
                        
                        if (options.stripeId == 'crossing') {
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
                        
                        
                        
                        
                        if (options.stripeId == 'horizontal') {
                            var x0 = 0;
                            var x1 = canvas_size;
                            var y0 = delta_border;
                            var y1 = canvas_size;
                            var offset = canvas_size;

                            pctx.beginPath();
                            pctx.moveTo(x0, y0+delta_border);
                            pctx.lineTo(x1, y0+delta_border);
                            pctx.stroke();
                            
                        }
                        
                        if (options.stripeId == 'vertical') {
                            var x0 = delta_border;
                            var x1 = canvas_size;
                            var y0 = 0;
                            var y1 = canvas_size;
                            var offset = canvas_size;

                            pctx.beginPath();
                            pctx.moveTo(x0, y0);
                            pctx.lineTo(x0, y1);
                            pctx.stroke();
                            
                        }
                        
                        

                        ctx.fillStyle = ctx.createPattern(pattern_canvas,'repeat');
                        ctx.fillRect(bounds.min.x, bounds.min.y, size.x, size.y)
                        ctx.restore()
                        
                        
                    }
                }
            }
        })
    }
}(this, document)) 
