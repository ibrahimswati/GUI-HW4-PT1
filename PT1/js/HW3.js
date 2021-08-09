//
// File: HW3.js
// GUI Assignment: Multiplication Table
// Ibrahim Swati, UMass Lowell Computer Science, iswati@cs.uml.edu
// Copyright (c) 2021 by Ibrahim. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
// updated by IS on August 9, 2021 at 5:46PM
//


function getdataforcolrows() {   //Declare all variables needed for table

  debugger
  var cols = $("#col").val();
  var rows = $("#rows").val();
  var colstart = $("#colstart").val();
  var rowstart = $("#rowstart").val();
  var tr = '';
  var table = "";
  var ab = 0;
  var cd = 0;


  if (!isNaN(cols) && cols < 1000 && !isNaN(rows) && rows < 1000 && !isNaN(colstart) && !isNaN(rowstart)) {   //Make sure values are mnumeric
    debugger;
    $("#tabled").html('');
    var flag = false;
    var colflag = false;
    var hideflag = false;
    for (var i = 0; i < rows; i++) {  //Draw rows
      table += '<tr>';
      var rowcount = i + parseInt(rowstart);  //Row starting value
      if (flag == true) {
        table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;background-color: black;color: white;">' + rowcount + '</td>';
      }
      else
        table += '<td style="color:white;">' + i + '</td>';

      for (var j = 0; j < cols; j++) {    //Draw columns
        var jcol = j + parseInt(colstart);      //Column starting value
        if (hideflag == false) {
          if (j == 0 && colflag == false) {

            table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;background-color: black;color: white;">' + jcol + '</td>';
            flag = true;
            colflag = true;
            i = -1;
          }
          else
            table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;background-color: black;color: white;">' + jcol + '</td>';
        }
        else {
          var tmp = (j + parseInt(colstart)) * (i + parseInt(rowstart));
          console.log(tmp)
          table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;color:black">' + tmp + '</td>';
        }

      }
      hideflag = true;
      table += '</tr>';

    }

    $("#tabled").append(table);  //Append table inorder to display values
  }


  else {                        //Else to handle errors such as not numberic value
    $("#tabled").html('');
    var table = '<tr><td>Please enter numeric value or enter a value less than 1000.</td></tr>';
    $("#tabled").append(table);
  }
  

}
