function imgTheme(path, tag) {
    let x = document.querySelectorAll(tag);
    for (let item of x) {
        let src = item.getAttribute('src');
        src = path + src;
        item.setAttribute('src', src);
    }
}

function sourceTheme(path, tag) {
    let x = document.querySelectorAll(tag);
    for (let item of x) {
        let srcset = item.getAttribute('srcset');
        srcset = path + srcset;
        item.setAttribute('srcset', srcset);
    }
}