$( document ).ready(function() {
    

    

    //add event listener to score column and call sorting function on clicking the score column
   
    document.getElementById("playerScoreCol").addEventListener("click", sortByScore,false);

     //add event listener to button and insert the score to the table
    document.getElementById("sendScore").addEventListener("click", insertScore, false);

    function insertScore(){
        let playerName = document.getElementById('playerName').value;
        let playerScore = document.getElementById('playerScore').value;
        
        if(playerName != "" && playerScore != ""){
            let tr = document.createElement("tr");
            let tdPlayer = document.createElement("td");
            let tdScore = document.createElement("td");

            tdPlayer.scope="row";

            tdPlayer.innerHTML = playerName
            tdScore.innerHTML = playerScore

            tr.appendChild(tdPlayer);
            tr.appendChild(tdScore);
        
            
            document.getElementById('playersAndScores').appendChild(tr);
        }        
    }
    function sortByScore(){
        let table, i, rowData1, rowData2, switchRows; 
        table = document.getElementById("scoreboard"); 
        let sorting = true; 

        // Loops until no sorting is done 
        while (sorting) { 
            sorting = false; 
            let rows = table.rows; 

            // Loops through all rows 
            for (i = 1; i < (rows.length - 1); i++) { 
                switchRows = false; 

                //get the data from the <td> and parse it to integer
                rowData1 = rows[i].getElementsByTagName("TD")[1]; 
                rowData2 = rows[i + 1].getElementsByTagName("TD")[1]; 
                rowData1 = parseInt(rowData1.innerHTML);
                rowData2 = parseInt(rowData2.innerHTML);
              

                // Check if 2 rows need to be switched 
                if (rowData1 < rowData2) 
                    { 

                    // If switched break the for loop and continue the while loop 
                    switchRows = true; 
                    break; 
                } 
            } 
            if (switchRows) { 
                // Sort values and keep while loop going
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
                sorting = true; 
            } 
        } 
    } 
    

});