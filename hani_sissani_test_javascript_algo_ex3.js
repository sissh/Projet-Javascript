var faultyRows = []
var faultyColumns = []
var faultyRegions = []
//F31
function checkTableRows (table) {
    for (var i = 0; i < table.length; i++) {
        if (!isDistinct(table[i])) {
            document.body.appendChild(document.createTextNode("Ligne " + i + " incorrecte : " + table[i]))
            document.body.appendChild(document.createElement("br"))
            faultyRows.push(table[i])
        }
    }
}

function getColumn(table, n) {
    column = table.map(table => table[n])
    return column
}

//F32
function checkTableColumns (table) {
    for (var i = 0; i < table.length; i++) {
        column = getColumn(table, i)
        if (!isDistinct(column)) {
            document.body.appendChild(document.createTextNode("Colonne " + i + " incorrecte : " + column))
            document.body.appendChild(document.createElement("br"))
            faultyColumns.push(column)
        }
    }
}

//Create regions with data from the table. Probably not the best solution for this problem as it involves multiple nested loops.
function createRegions(table) {
    var stepRow = 0
    var stepColumn = 0
    var regionIndex = 0
    var listeRegions = []
    for (var i = 0; i < 3; i++) {
        stepColumn = 0
        for (var j = 0; j < 3; j++) {
            var region = new Array(9)
            regionIndex = 0
            for (var k = 0; k < 3; k++) {
                for (var l = 0; l < 3; l++) {
                    region[regionIndex] = table[k + stepRow][l + stepColumn]
                    regionIndex++
                }
            }
            listeRegions.push(region)
            stepColumn += 3
        }
        //this check prevents the index from going farther that what the array can hold
        if(stepRow < 6) {
            stepRow += 3
        }
    }
    return listeRegions
}

//F33 
function checkTableRegions (table) {
    listeRegions = createRegions(table)
    for (var i = 0; i < 9; i++) {
        if(!isDistinct(listeRegions[i])) {
            document.body.appendChild(document.createTextNode("Région " + i + " incorrecte : " + listeRegions[i]))
            document.body.appendChild(document.createElement("br"))
            faultyRegions.push(listeRegions[i])
        }
    }
}

document.body.appendChild(document.createElement("br"))
document.body.appendChild(document.createTextNode("Exercice 3"))
document.body.appendChild(document.createElement("br"))
document.body.appendChild(document.createElement("br"))

checkTableRows(to_verify)
checkTableColumns(to_verify)
checkTableRegions(to_verify)
console.log(faultyColumns)
console.log(faultyRegions)
console.log(faultyRows)