function openGitHub() {
    open(
        document
            .URL
            .replace(location.origin, "https://github.com/andrew-selvia")
            .replace("journal/", "journal/edit/main/")
            .replace(".html", ".md"))
}

// https://stackoverflow.com/a/33499348/6073927
let getStyle = function(e, styleName) {
    let styleValue = "";
    if (document.defaultView && document.defaultView.getComputedStyle) {
        styleValue = document.defaultView.getComputedStyle(e, "").getPropertyValue(styleName);
    } else if (e.currentStyle) {
        styleName = styleName.replace(/-(\w)/g, function(strMatch, p1) {
            return p1.toUpperCase();
        });
        styleValue = e.currentStyle[styleName];
    }
    return styleValue;
}
window.onload = function(){
    let main = document.getElementById('main');
    document.documentElement.style.setProperty('--main-offset-left', `${main.offsetLeft}px`);
    document.documentElement.style.setProperty('--main-padding-left', getStyle(main, 'padding-left'));
    document.documentElement.style.setProperty('--main-padding-right', getStyle(main, 'padding-right'));
    document.documentElement.style.setProperty('--ul-padding-left', getStyle(Array.from(document.getElementsByTagName('ul')).filter(function(element) { return element.className === "" })[0], 'padding-left'));
}
