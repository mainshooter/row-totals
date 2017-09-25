var row = [
  [9,21,14],
  [11,5,27],
  [29,17,6],
];

var rowCounter;
var TableFlip;
var TabelGen;



(function() {
  TableFlip = {

    flipArray: function() {
      var tmpTable = [];
      // Create the one dept array
      console.log(tmpTable);
      for (var i = 0; i < row.length; ++i) {
        tmpTable[i] = [];
        // Create the 2 depth array
        for (var t = 0; t < row[i].length; ++t) {
          tmpTable[i][t] = row[t][i];
          // To place the flip value
        }
      }
      return(tmpTable);
    }
  }
})();

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
      for (var i = 0; i < TabelGen.maximumRows(); i++) {
        content += "<th>" + i + "</th>";
      }
      return(content);
    },

    content: function() {
      var content = '';
      row.forEach(function(rowArray, index, arr) {
        content += '<tr>';
          // content += '<th>' + index + '</th>';
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
      // table += TabelGen.header();
      table += '</tr>';
      table += TabelGen.content();
      table += '</table>';
      return(table);
    }
  }
})();

// select("#test").innerHTML = TabelGen.generate();
