const benefit_vpl_1_0_0_handleOpenModal = (src) => {
    document.querySelector('body').insertAdjacentHTML("beforeend", benefit_vpl_1_0_0_PicModal(src))
}

const benefit_vpl_1_0_0_handleCloseModal = () => {
    document.querySelector('.modalVideo_vpl_1_0_0').remove()
}
const benefit_vpl_1_0_0_PicModal = (src) => {
    return `<div class="modalVideo_vpl_1_0_0">
    <div class="modalVideo_vpl_1_0_0__box">
        <div class="modalVideo_vpl_1_0_0__close" onclick="benefit_vpl_1_0_0_handleCloseModal()">×</div>
        <div class="modalVideo_vpl_1_0_0__wrapper">
        <iframe src="https://www.youtube.com/embed/${src}?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</div>`
}