
// source part 1 :https://www.youtube.com/watch?v=7XuIZBLOF7A  
//source part 2: https://www.youtube.com/watch?v=Dg9FCdEKymc

$(document).ready(function()
{

  $("#brands").click(function(){
  sortTable(1);
  });
  $("#models").click(function(){
  sortTable(2);
  });
  $("#oses").click(function(){
    sortTable(3);
  });
  $("#screens").click(function(){
    sortTable(4);
    })
    $("#reset").click( function(){
      
      $.ajax({
        url: "https://wt.ops.labs.vu.nl/api22/cf2e9dfc/reset",
        method:"GET",
        data:"",
        datatype:"json",
        type: "DELETE"
       
    
      
        
    
      })
        
        .done(function(){
          console.log("Success !")
        })
    
        .fail(function(){
          console.log("Hmm....")
        })
    
      });

      $.ajax({
        url: "https://wt.ops.labs.vu.nl/api22/cf2e9dfc/",
        method:"GET",
        data:"",
        datatype:"json",
      
      })
      .done(function(data){
        $("table").append("<td>" +"<img width=200, high src="+ data[0].image + ">"+"</td>");
        $("table").append("<td>"+data[0].brand+"</td>");
        $("table").append("<td>"+data[0].model+"</td>");
        $("table").append("<td>"+data[0].os+"</td>");
        $("table").append("<td>"+data[0].screensize+"</td>");

       
      })
  
      .fail(function(data){
        console.log("Hmm....")
      });
  
    });





//https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable(n)
{
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable2");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
