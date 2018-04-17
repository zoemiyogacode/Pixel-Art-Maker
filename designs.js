/**
* Pixel Art Maker
* @author Natalia Zoe Miklis
*/


/**
* @function
* @description Creates the pixel canvas based on the user's input
* @yields {table} grid of rows and columns of cells ready to colour
*/

function makeGrid() {
//Store user inputs
 const row = $('#input_height').val();
 const col = $('#input_width').val();

//Get table
const table = $('#pixel_canvas');

//Reset table if it's filled
table.children().remove();

//Create table rows
  for ( x = 0; x < row; x++) {
  	table.append('<tr></tr>');
    //Create table columns
    for ( y = 0; y < col; y++) {
    	table.children().last().append('<td></td>');
    }
  }

/**
* @function
* @description Applies chosen color from color picker to the cell when it's cliked
*/
  table.on('click', 'td', function() {
    //Get color from color picker
    let color = $('input[type="color"]').val();
    //Add color to the cell
    $(this).attr('bgcolor', color);
  });
}

/**
* @description Listens for submit clicks to makeGrid()
*/
$('input[type="submit"]').click(function(submit) {
  submit.preventDefault(); //Preventing submit button from reloading the page
  makeGrid(); //Callback function to make grid
});
