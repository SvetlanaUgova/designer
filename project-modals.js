const projectModalSliderOne = document.querySelector('#personal-project-slider-one');
const projectModalDragAndDrop = document.querySelector('#personal-project-drag-and-drop');
const projectModaSliderTwo = document.querySelector('#personal-project-slider-two');
const projectModalPixes = document.querySelector('#personal-project-pixes');
const projectModalClickerGame = document.querySelector('#personal-project-clicker-game');



const projectOpenBtnSliderOne = document.querySelector('#personal-project-slider-one-btn');
const projectOpenBtnDragAndDrop = document.querySelector('#personal-project-drag-and-drop-btn');
const projectOpenBtnSliderTwo = document.querySelector('#personal-project-slider-two-btn');
const projectOpenBtnPixes = document.querySelector('#personal-project-pixes-btn');
const projectOpenBtnClickerGame = document.querySelector('#personal-project-clicker-game-btn')



const projectModals = [ projectModalSliderOne, projectModalDragAndDrop, projectModaSliderTwo, projectModalPixes, projectModalClickerGame];
const projectBtns = [ projectOpenBtnSliderOne, projectOpenBtnDragAndDrop, projectOpenBtnSliderTwo, projectOpenBtnPixes, projectOpenBtnClickerGame];

projectBtns.forEach((btn, index) => {
    const projectModal = projectModals[index];

    if (btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            projectModal.classList.add(MODAL_ACTIVE_CLASS);

            document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
        })
    }
});