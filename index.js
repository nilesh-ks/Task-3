(function(){
    const btnMenu = document.querySelector('.menu-button')
    const menu = document.querySelector(".dropdown")
    const search = document.querySelector(".search-button")
    const dropdownSearch = document.querySelector(".dropdown-search")
    
    btnMenu.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
    })
    search.addEventListener("click", ()=>{
        dropdownSearch.classList.toggle("hidden")
        //menu.classList.toggle("hidden")
    })
    
    })();