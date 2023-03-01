window.onclick = function(e) {
    if (e.target == document.getElementById('popup_vpl_1_0_1')) {
        document.getElementById('popup_vpl_1_0_1').style.bottom = '-410px'
    }
}
document.getElementById('popup-close').addEventListener('click', () => {
    if (document.getElementById('popup_vpl_1_0_1').style.bottom === '-410px') {
        document.getElementById('popup_vpl_1_0_1').style.bottom = '0px'
        document.querySelector('.popup_vpl_1_0_1 #popup-close').style.transform = 'rotate(90deg)'
    } else {
        document.getElementById('popup_vpl_1_0_1').style.bottom = '-410px'
        document.querySelector('.popup_vpl_1_0_1 #popup-close').style.transform = 'rotate(-90deg)'

    }
})