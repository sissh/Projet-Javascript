//F31
function checkTableRows (table) {
    for (var i = 0; i < table.length; i++) {
        if (!isDistinct(table[i])) {
            document.body.appendChild(document.createTextNode("Ligne " + i + " incorrecte : " + table[i]))
            document.body.appendChild(document.createElement("br"))
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
        colonne = getColumn(table, i)
        if (!isDistinct(colonne)) {
            document.body.appendChild(document.createTextNode("Colonne " + i + " incorrecte : " + colonne))
            document.body.appendChild(document.createElement("br"))
        }
    }
}

//Was part of a solution I tried.
function instantiateRegionList(table) {
    listeRegions = new Array(9)
    for (var i = 0; i < table.length; i++) {
        region = new Array(table.length/3)
        for (var j=0; j<table.length/3; j++) {
            region[i] = new Array(table.length/3)
        }
        listeRegions[i] = region
    }
    return listeRegions
}

//F33 - Could not be done on time.
function checkTableRegions (table) {
    listeRegions = fillRegions(table, instantiateRegionList(table))

    console.log(listeRegions)
}

document.body.appendChild(document.createElement("br"))
document.body.appendChild(document.createElement("br"))
document.body.appendChild(document.createTextNode("Exercice 3"))
document.body.appendChild(document.createElement("br"))
checkTableRows(to_verify)
checkTableColumns(to_verify)
checkTableRegions(to_verify)