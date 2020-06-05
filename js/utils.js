function copy(text) {
    if (!window.clipboardData)
        return false;
    window.clipboardData.setData("text", text);
}

function paste() {
    if (!window.clipboardData)
        return false;
    return window.clipboardData.getData("text");
}

function scriptVersion() {
    ver = ScriptEngine() + ' V ';
    ver += ScriptEngineMajorVersion() + '.';
    ver += ScriptEngineMinorVersion() + '.';
    ver += ScriptEngineBuildVersion();
    alert(ver);
    return ver;
}

function isExist(value) {
    return (value == undefined || value == null || value == '')? false : true;
}

function getElementValue(element) {
    var obj = document.getElementById(element);
    return obj.value;
}

function setElementValue(element, value) {
    var obj = document.getElementById(element);
    obj.value = value;
}

function removeStrings(text, removes) {
    removes.forEach(function (remove, index, removes) {
        text = text.replace(remove, '');
    })
    return text;
}