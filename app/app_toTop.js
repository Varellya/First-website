/*---------- Btn to Top ----------*/

const btnBlocks = document.querySelectorAll('a[href*="#"]');

for (let btnBlock of btnBlocks) {
    btnBlock.addEventListener('click', function(event) {
        event.preventDefault();
        const blockId = btnBlock.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth", block: "start"
        })
    })
}

