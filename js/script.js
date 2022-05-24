window.addEventListener("load", function(){
    console.log('страница загружена')
    const swiper = new Swiper('.swiper-s1', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
    })
    
    const swiper2 = new Swiper('.swiper-s2',{
        slidesPerView: 3,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          },
        breakpoints: {
            1201: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 2
            },
            100: {
                slidesPerView: 1
            }
        }
    })
    
    const swiper3 = new Swiper('.swiper-s3', {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-next-s3",
            prevEl: ".swiper-prev-s3",
          },
    })
    
    
    
    
    let burger = document.querySelector(".header__inner_item_burger")
    
    let burgerMenu = document.querySelector(".header__burger_list")
    
    burger.addEventListener("click", function(){
        burger.classList.toggle("header__inner_item_burger_active")
        burgerMenu.classList.toggle("header__burger_list_active")
        document.querySelector("body").classList.toggle("lock")
    })
    
    
    let image = document.querySelector(".help__right_image")
    let imgClose = document.querySelector(".help__right_image_block_close")
    let modal = document.querySelector(".help__right_image_block")
    image.addEventListener("click", function(e){
        modal.classList.add("help__right_image_block_active")
    })
    
    imgClose.addEventListener("click", function(){
        modal.classList.remove("help__right_image_block_active")
    })
    
    
    window.addEventListener("click", function(e) {
        if (e.target == modal) {
            modal.classList.remove("help__right_image_block_active")
        }
    })
    
    let menu = document.querySelector(".header__menu_wrapper")
    
    menu.addEventListener("click", function(e){
        if (e.target.dataset.id) {
            e.preventDefault()
            let target = document.querySelector(e.target.hash)
            let pos = target.offsetTop
            window.scrollTo({
                top: pos,
                behavior: "smooth"
            })
        }
        
    })
    let arrow = document.querySelector(".arrowUp")
    window.addEventListener("scroll", function(){
        if (scrollY >= 350) {
            arrow.classList.add("arrowUp__active")
        } else {
            arrow.classList.remove("arrowUp__active")
        }
    })
    
    
    arrow.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
    
    
    let exm = document.querySelectorAll(".example__item_blocks_block")
    
    
    exm.forEach(function(e){
        console.log(e)
        e.addEventListener("click", function(){
            exm.forEach(function(e){
                e.classList.remove("example__item_blocks_block_active")
            })
            e.classList.add("example__item_blocks_block_active")
        })
    })
    
    let header = document.querySelector(".header")
    
    window.addEventListener("scroll", function(){
        if (scrollY >= 1) {
            header.classList.add('header__active')
            document.querySelector(".button--header").classList.add("button--header_active")
            document.querySelector(".header__inner_item_adress_image").classList.add("header__inner_item_adress_image_active")
        } else {
            header.classList.remove('header__active')
            document.querySelector(".button--header").classList.remove("button--header_active")
            document.querySelector(".header__inner_item_adress_image").classList.remove("header__inner_item_adress_image_active")
        }
    })
    
    let logo = document.querySelector(".header__inner_item_logo")
    
    logo.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
})