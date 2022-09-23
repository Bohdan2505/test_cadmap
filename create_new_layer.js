var file_content;

function set_elements_new_layer_events () {
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

var attributes_table = `
    <tr>
        <th>Назва атрибуту</th>
        <th>Тип атрибуту</th>
    </tr> 
`
for (let i = 1; i < 11; i++) {
    attributes_table +=`<tr>
            <td> 
                <input type="text" id="property_name_${i}">
            </td>
            <td> 
                <select id="property_type_${i}">
                    <option value='text'>Текстовий</option>
                    <option value='number'>Числовий</option>
                </select>
            </td>
        </tr>`
};
document.getElementById('attributes_table').innerHTML = `<table>${attributes_table}</table>`
}

function get_attributes () {
    var attributes_dict = {}
    for (let i = 1; i < 11; i++) {
        if (document.getElementById('property_name_' + i).value.replace(' ', '').length >0) {
            attributes_dict[document.getElementById('property_name_' + i).value] = document.getElementById('property_type_' + i).value
        }
    }
    return attributes_dict
} 

function get_new_layer_options_values() {
//     if (file_content) {
        
        var layer_options = {
            snapIgnore: !document.getElementById("snapIgnore").checked,
            layername: document.getElementById("layer_name").value,
            data_attributes: get_attributes()
            }
            

        if (document.getElementById("stripe_checkbox").checked && get_active_stripe_radio()) {
                layer_options['stripeId'] = get_active_stripe_radio().id;
                layer_options['stripeColor'] = document.getElementById("strokeColor").value;
            }
        layer_options['style'] =  {color: document.getElementById("borderColor").value, fillOpacity: document.getElementById("transparency").value*0.01, weight: 5, fillColor: document.getElementById("fillColor").value,}
//     }
    console.log(layer_options)
    create_new_layer(layer_options)
}
