// табы контакты
let tabs = document.querySelectorAll('.contact__navigation__btn');
let tabsItem = document.querySelectorAll('.tabs__item');


tabs.forEach((item) =>{
    item.addEventListener('click', () =>{
        let tabId = item.getAttribute('data-tab');
        let tabGet = document.querySelector(tabId);
        tabs.forEach((item) =>{
            item.classList.remove('active')
        })
        
        tabsItem.forEach((item) =>{
            item.classList.remove('tabs__active')
        })

        item.classList.toggle('active')
        tabGet.classList.toggle('tabs__active')
    })
})

document.querySelector('.contact__navigation__btn').click()