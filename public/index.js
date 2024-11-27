const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden', 'opacity-0', 'translate-y-[-20px]',  'transition-all', 'duration-500','ease-out');
    }else{
        menu.classList.add('opacity-100', 'translate-y-0', 'hidden');
    }
})