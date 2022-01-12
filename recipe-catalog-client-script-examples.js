//Catalog client scripts- client side


//email
var test = g_form.getReference('requested_for');
g_form.setValue('email', test.email);
//var test = g_form.getValue('requested_for');


//Maxlen
var str = newValue;
var str = g_form.getValue('variable_name')
var len = str.length;
if (len > 40) {
        g_form.setValue('recipe_name', '');
		// if required make the filed to clear the value
        alert('Please enter maximum of 40');
    }
