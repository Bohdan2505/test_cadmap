var file_content;

function set_el_events () {
document.getElementById("fillColor").addEventListener('input', function () { 
  set_layer_final_view();
}); 

document.getElementById("borderColor").addEventListener('input', function () { 
  set_layer_final_view();
});            

document.getElementById("transparency").addEventListener('input', function () { 
  set_layer_final_view();
});

document.getElementById("strokeColor").addEventListener('input', function () { 
  set_layer_final_view();
});

document.getElementById('stripe_checkbox').addEventListener('load', set_stripes())

document.getElementById('layer_file').addEventListener('change', function() {
    var fr= new FileReader();
    fr.onload=function(){
    file_content = fr.result;
    
    }
    fr.readAsText(this.files[0]);
})
}

function set_stripes () {
    if (!document.getElementById("stripe_checkbox").checked) {
        radio_input_list =  document.getElementsByName('stripesRadio')
        stripe_canvas_list =  document.getElementsByName('stripe_example')

        for (x in radio_input_list) {
            if (typeof radio_input_list[x] == 'object') {
                radio_input_list[x].disabled = true
                set_canvas_element_stripe('stripe' + x, radio_input_list[x].id, '#a3a098', '#fff', 0.5, '#a3a098')
            }
        }
        
        document.getElementById("strokeColor").disabled = true
                
    }
    
    else if (document.getElementById("stripe_checkbox").checked) {
        radio_input_list =  document.getElementsByName('stripesRadio')
        for (x in radio_input_list) {
            if (typeof radio_input_list[x] == 'object') {
                radio_input_list[x].disabled = false
                set_canvas_element_stripe('stripe' + x, radio_input_list[x].id, '#000', '#fff', 1, '#000')
            }
        }
        document.getElementById("strokeColor").disabled = false
    }
    
    set_layer_final_view()
}

function get_active_stripe_radio () {
    var active_stripe_radio;
    radio_input_list =  document.getElementsByName('stripesRadio')
    for (x in radio_input_list) {
        if (radio_input_list[x].checked) 
        {active_stripe_radio=radio_input_list[x] }
    }
    return active_stripe_radio
}

function set_layer_final_view() {
    var fillColor = document.getElementById("fillColor").value;
    var borderColor = document.getElementById("borderColor").value;
    var transparency = document.getElementById("transparency").value;
    var strokeColor = document.getElementById("strokeColor").value;
    var opacity = transparency*0.01;
      
    console.log(document.getElementById("stripe_checkbox").checked, fillColor)
    if (!document.getElementById("stripe_checkbox").checked) {
        set_canvas_element_fill_color('layer_final_view', fillColor, opacity, borderColor)
    }
    else if (document.getElementById("stripe_checkbox").checked && get_active_stripe_radio()) {
        set_canvas_element_stripe('layer_final_view', get_active_stripe_radio().id, borderColor, fillColor, opacity, strokeColor)
    }
    else {
    set_canvas_element_fill_color('layer_final_view', fillColor, opacity, borderColor)
    }
}

function get_upload_values() {
    if (file_content) {
        
        var layer_options = {
//             default options
//             renderer: L.canvas({pane: 'Others'}),
            
            snapIgnore: !document.getElementById("snapIgnore").checked,
            layername: document.getElementById("layer_name").value,
            }
            
        if (!document.getElementById("pmIgnore").checked) {
                layer_options['pmIgnore'] = !document.getElementById("pmIgnore").checked
            }
//             if (!document.getElementById("snapIgnore").checked) {
//                 layer_options['snapIgnore'] = !document.getElementById("snapIgnore").checked
//             }
        if (document.getElementById("stripe_checkbox").checked && get_active_stripe_radio()) {
                layer_options['stripeId'] = get_active_stripe_radio().id;
                layer_options['stripeColor'] = document.getElementById("strokeColor").value;
//                 layer_options['pm'] = {}
//                 layer_options['pm']['options'] = {}
//                 layer_options['pm']['options']['draggable'] = true
            }
        layer_options['style'] =  {color: document.getElementById("borderColor").value, fillOpacity: document.getElementById("transparency").value*0.01, weight: 5, fillColor: document.getElementById("fillColor").value,}
    }
    console.log(file_content)
    console.log(layer_options)
    upload_layer(file_content, layer_options)
}
