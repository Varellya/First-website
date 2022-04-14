/*---------- Btn Country list ----------*/

const btnList = document.querySelector('.btn_list');

btnList.addEventListener('click', function() {

    let countries = document.querySelector('.country_list');

    if (btnList.hasAttribute("activeList")) {
        countries.classList.remove('full_list');
        btnList.removeAttribute("activeList", "false");
        btnList.innerHTML = 'View all';
    } else {
        countries.classList.add('full_list');
        btnList.setAttribute("activeList", "true");
        btnList.innerHTML = 'Remove';
    }
})

