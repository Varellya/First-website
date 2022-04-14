/*---------- Choose comfort ----------*/

const allBtnComfort = document.querySelectorAll('.comfort_level');

for (let btnComfort of allBtnComfort) {
    btnComfort.addEventListener('click', function(event) {

        let $this = event.currentTarget;
        let activeBtn = document.querySelector('.active_button_choose');
        let btnChoose = $this.querySelector('.ico_choose');
        let activeComfort = document.querySelector('[choise_comfort]')

        activeBtn.classList.remove('active_button_choose');
        btnChoose.classList.add('active_button_choose');
        btnComfort.setAttribute("choise_comfort", "true");
        activeComfort.removeAttribute("choise_comfort");
    })
}

