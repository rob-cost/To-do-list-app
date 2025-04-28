// Creates a new item in the list
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
    // Empty the input text bar
    $('#input').val('');

    // Allows to sort items in the list
    $('#list').sortable();
    
}




