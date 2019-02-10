function convertText() {
    let inputText = document.getElementById('inputText').value
    let text = inputText + ''

    if (document.getElementById('radioToUpperCase').checked) {
        text = text.toUpperCase()
    } else if (document.getElementById('radioToLowerCase').checked) {
        text = text.toLowerCase()
    } else if (document.getElementById('radioSwapCase').checked) {
        text = swapCase(text)
    }

    if (document.getElementById('checkboxReplace').checked) {
        let find = document.getElementById('textReplaceFrom').value
        let replace = document.getElementById('textReplaceTo').value
        text = replaceText(text, find, replace)
    }

    if (document.getElementById('checkboxReverse').checked) {
        text = reverseText(text)
    }

    if (document.getElementById('checkboxShuffle').checked) {
        text = shuffleText(text)
    }

    if (document.getElementById('checkboxRepeat').checked) {
        let repeat = parseInt(document.getElementById('numberRepeat').value)
        if (isNaN(repeat)) {
            repeat = 1
        }
        text = repeatText(text, repeat)
    }
    document.getElementById('outputText').value = text
}

function deleteText() {
    document.getElementById('inputText').value = ''
    document.getElementById('outputText').value = ''
}

function swapCase(text) {
    let output = ''
    for (let s of text) {
        if (s === s.toLowerCase()) {
            output += s.toUpperCase()
        } else if (s === s.toUpperCase()) {
            output += s.toLowerCase()
        }
    }
    return output
}

function replaceText(text, find, replace) {
    let output = text + ''
    if (find === '') {
        return text
    }
    while (output.indexOf(find) > -1) {
        output = output.replace(find, replace)
    }
    return output
}

function reverseText(text) {
    let output = ''
    for (let s of text) {
        output = s + output
    }
    return output
}

function shuffleText(text) {
    let output = ''
    for (let s of text) {
        let n = Math.round(Math.random())
        if (n) {
            output += s
        } else {
            output = s + output
        }
    }
    return output
}

function repeatText(text, repeat) {
    let output = ''
    if (repeat < 1) {
        repeat = 1
    }
    for (let i = 0; i < repeat; i++) {
        output += text + '\n'
    }
    return output
}
