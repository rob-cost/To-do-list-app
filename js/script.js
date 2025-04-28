// Create a var for the ordered list
let list = $('#list');
// Create a variabe for the elements in the list
let li = $('<li></li>');
// Append the elements to the list
list.append(li);
// Store the value of the input to a variable
let inputValue = $('#input').val();
// Append the value to the element
li.append(inputValue);
li.addClass("strike");