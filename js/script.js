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
li.addClass("strike");// Creates a new item in the list
function newItem (){

    // Declare variable and delegation
    let inputValue = $('#input').val();
    let li = $('<li></li>');
    li.append(inputValue);

    // Make sure some value is inserted
    if (inputValue === ''){
        alert('please write something');
    }
    else {
        $('#list').append(li);
    
    // Cross out some item in the list
    function crossOut (){
        li.toggleClass('strike');
    }
    li.on("dblclick", crossOut);

    // Create delete button and delete item
    let crossOutButton = $('<button>X</button>');
    li.append(crossOutButton);
    

    crossOutButton.on('click', deleteListItem);
    function deleteListItem (){
        li.addClass('delete');
    }

}
