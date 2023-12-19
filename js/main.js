const modalViews = document.querySelectorAll('.project__modal'),
      modalBtns = document.querySelectorAll('.project__button'),
      modalClose = document.querySelectorAll('.project__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb,i)=>{
    mb.addEventListener('click',()=>{
        console.log(`Button ${i} clicked`);
        modal(i)
    })
})

modalClose.forEach((mc)=>{
    mc.addEventListener('click',()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })
    })
})