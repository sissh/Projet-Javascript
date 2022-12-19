var to_verify = new Array(9)
for (var i=0; i<9; i++) {
    to_verify[i] = new Array(9)
}

//F11
function fillTable() {
    for (var i=0; i<9; i++) {
        for (var j=0; j<9; j++) {
            //filling to_verify with provided array
            to_verify[i][j] = array_number[i].split(' ')[j]

            //filling to_verify with testing array
            //to_verify[i][j] = testing_array[i].split(' ')[j]
        }
    }
}

//F12
function displayTable () {
    var table = document.createElement("table")
    var tableBody = document.createElement("tbody")

    for (var i=0; i<9; i++) {
        var row = document.createElement("tr")
        
        for(var j=0; j<9; j++) {
            var cell = document.createElement("td")
            var number = document.createTextNode(to_verify[i][j])
            cell.appendChild(number)
            row.appendChild(cell)
        }

        tableBody.appendChild(row)
    }

    table.appendChild(tableBody)
    table.setAttribute("border", "2")
    document.body.appendChild(document.createTextNode("Exercice 1: "))
    document.body.appendChild(table)
}

fillTable()
displayTable()