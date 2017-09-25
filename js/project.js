var row = [
  [9,21,14,43],
  [11,5,27],
  [29,17,6],
  [29,1,5,9],
];

var rowCounter;
var TabelGen;

(function() {
  rowCounter = {
    /**
     * Counts all values from a roe
     * @param  {int} [rowNumber=false] [The number of the row]
     * @return {[int / float]}                    [on succes we return the total amount]
     */
    oneRow: function(rowNumber = false) {
      if (rowNumber != false) {
        if (rowNumber < row.length -1) {
          var teller = 0;
          row[rowNumber].forEach(function(value, index, arr) {
            teller = teller + parseFloat(value);
          });
          return(teller);
        }

        else {
          console.log("We don't have that place in our array!");
        }

      }

      else {
        console.log("No number");
      }

    },

    /**
     * Counts all numbers of the array
     * @return {[int / float]} [The total amount of the array]
     */
    allRows: function() {
      var teller = 0;
      row.forEach(function(rowArray, index, arr) {
        // To loop trough the multi array

        rowArray.forEach(function(value, index, arr) {
          // To loop trough all the values of the selected row

          teller = teller + parseFloat(value);
        });
      });
      return(teller);
    }
  }
})();

(function() {
  TabelGen = {
    maximumCols: function() {
      var currentMax = 0;
      row.forEach(function(rowArray, index, arr) {
          if (currentMax < rowArray.length) {
            currentMax = rowArray.length;
          }
      });
      return(currentMax);
    },
    maximumRows: function() {
      return(row.length);
    },

    header: function() {
      var content = '';
      for (var i = 0; i < TabelGen.maximumRows() + 1; i++) {
        content += "<th>" + i + "</th>";
      }
      return(content);
    },

    content: function() {
      var content = '';
      row.forEach(function(rowArray, index, arr) {
        content += '<tr>';
        content += '<th>' + index + '</th>';
        rowArray.forEach(function(value, index, arr) {
          content += '<td>' + value +  '</td>';
        });
        content += '</tr>';
      });
      return(content);
    },

    generate: function() {
      var table = '<table>';
      table += '<tr>';
      table += TabelGen.header();
      table += '</tr>';
      table += TabelGen.content();
      table += '</table>';
      return(table);
    }
  }
})();

select("#test").innerHTML = TabelGen.generate();
