// ;(function(){
//    let ceta = document.querySelector('.ceta');
//    let contador = heigth_da_tela;
//    ceta.addEventListener('click',()=>{

//         let a = setInterval(()=>{
//             if (contador > 0) {
//                 scroll(0,contador)
//                 contador= contador-20;
//             }else{
//                 clearInterval(a); 
//                 contador = 1450;
//             }
//         }, 20);
//    })
    
// })()

;(function(){
    let ceta_para_cards = document.querySelector('.ceta-header');
    let contador = 0;
    ceta_para_cards.addEventListener("click",function(){
        // window.scrollTo(0, 831)

        let a = setInterval(()=>{
            if (contador <= heigth_da_tela) {
                window.scrollTo(0, contador)
                contador= contador+30;
            }else{
                clearInterval(a); 
                contador = 0;
            }
        }, 20);
    })
     
 })()