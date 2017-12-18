// Select color input
var selectedCol = $('#colorPicker').val();
// Select size input
var hSize = $('#input_height').val();
var vSize = $('#input_height').val();

// When size is submitted by the user, call makeGrid()
function makeGrid(row, col) {
  $('#pixel_canvas').children().remove();
  for(var r = 0; r < row; r++)
    { var $curRow = $('<tr></tr>');
      $('#pixel_canvas').append($curRow);
      for(var c = 0; c < col; c++)
          $curRow.append('<td></td>');
    }
}
//event listener for submit
$( '#sizePicker' ).on( 'click', 'input', function(event) {
    if(event.target.type === 'submit')
      {hSize = $('#input_height').val();
       vSize = $('#input_width').val();
       event.preventDefault();
       makeGrid(hSize, vSize);
      }
});
//event listener for table
$( '#pixel_canvas' ).on( 'click', 'td', function(event) {
  var currCol = this.style.backgroundColor;
  var selColRGB = 'rgb(';
  selectedCol = $('#colorPicker').val();
  selColRGB += parseInt(selectedCol.substr(1,2),16) + ', ' +
               parseInt(selectedCol.substr(3,2),16) + ', ' +
               parseInt(selectedCol.substr(5,2),16) + ')';
  if(currCol === selColRGB)
     $(this).css('backgroundColor','');
  else
     $(this).css('backgroundColor',selectedCol);
});
