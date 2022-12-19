//F21
function isDistinct (array) {
    bufferArray = new Array(array.length)

    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i]) || bufferArray.includes(array[i])) {
            return false
        }

        bufferArray[i] = array[i]
    }
    return true
}

document.body.appendChild(document.createTextNode("Exercice 2: "))
document.body.appendChild(document.createTextNode(isDistinct(to_verify[0])))
