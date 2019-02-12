;(function(){
    let itens_menu_top_header = document.querySelectorAll('.item-menu a');
    let valor_da_ancora;
    let valor_do_tipo;

    itens_menu_top_header.forEach(function(a){
        a.addEventListener("click",()=>{


            titulo_descricao.textContent = a.textContent;  
            event.preventDefault();
            scroll(0,heigth_da_tela);
                
            valor_da_ancora = a.textContent;
            section_box_cards.innerHTML = "";  

            cars.forEach(function(x){
                
                if (x.tipo == valor_da_ancora) {                   
                                   
                    cria_card(x.url,x.nome,x.descricao,x.view);                   
                }                  
            })
                       
            abreModal();        
        })           
    })

 
})()