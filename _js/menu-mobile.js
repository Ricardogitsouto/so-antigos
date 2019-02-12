;(function(){
    
    let icon_menu_mobile = document.querySelector('.div-menu-hamburger');
    let itens_menu_mobile = document.querySelectorAll(".item-menu-mobile");
    let menu_mobile = document.querySelector('.box-menu');
    let aberto = false;

    

    icon_menu_mobile.addEventListener('click',()=>{
        abre_fecha()  
    })


    itens_menu_mobile.forEach(function(x){
        x.addEventListener("click",function(){    
            abre_fecha()   
        })   
    })

    function abre_fecha(){
        if (aberto == false) {
            menu_mobile.className = "box-menu-show"; 
            aberto = true;
        }else{
            menu_mobile.className = "box-menu";
            aberto = false;
        }
    }

})() 


