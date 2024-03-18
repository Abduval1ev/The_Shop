const ulLists = document.querySelector('[data-tab-menu]');
const subMenu = document.querySelector('.sub_menu');
console.log(ulLists, subMenu);

ulLists.addEventListener('click', openSubMenu)

function openSubMenu() {
    subMenu.classList.toggle('hidden')
}