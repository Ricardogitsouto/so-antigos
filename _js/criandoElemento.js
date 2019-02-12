let section_box_cards = document.querySelector('.box-cards');
const item_menu = document.querySelectorAll('.item-sub-menu');
const item_menu_a = document.querySelectorAll('.sub-meu-a');
let modal = document.querySelector(".fundo-cinza");


// Previnindo o comportamento padrão da ancora do sub-menu
item_menu_a.forEach(function(i){
    i.addEventListener('click', function(event){
        scroll(0,heigth_da_tela);
        
        event.preventDefault();
    });
})


const cars_array = [];

for (var i = 0; i < cars.length; i++) {
    cars_array.push(cars[i].nome+"-"+cars[i].marca);   
}



// Criando os Cards assin que a pagina Carrega
for (var i = 0; i < cars.length; i++) {   
    cria_card(cars[i].url,cars[i].nome,cars[i].descricao,cars[i].view);
}




// adiciona Evento ao clicar no icone do menu
 item_menu.forEach((li)=>{
    li.addEventListener("click", function(){

        // fechando o modal caso esteja aberto
        modal.style.display = "none";

        section_box_cards.innerHTML = ""; //esvazindo o section-box-cards
       
        // Mudando o titulo do box cards-----------------------------------
        var a = this.textContent;
        if(a == "Todos"){
            titulo_descricao.textContent = "Todos os Modelos";
            
        }else{
            titulo_descricao.textContent = a;
        }
        

        for (var i = 0; i < cars.length; i++) {


            if (this.textContent == cars[i].marca) {
               
                cria_card(cars[i].url,cars[i].nome,cars[i].descricao,cars[i].view);
            }else if(this.textContent == "Todos"){

                for (var i = 0; i < cars.length; i++) {
                    cria_card(cars[i].url,cars[i].nome,cars[i].descricao,cars[i].view);
                }
            }           
        }


        for (var i = 0; i < item_menu.length; i++) {
            item_menu[i].className = 'remove-borda';
        }
		this.className = "adiciona-borda";				
		abreModal()     
	})
	
	
})










