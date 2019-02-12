abreModal();
function abreModal(){
	let cards_Criados = document.querySelectorAll(".card");
	
	// Adiciona evento ao clicar no card
	  cards_Criados.forEach((card)=>{
		  
		card.addEventListener('click',function(){

			scroll(0,0)
			let carro = buscaCarro(this.children[2].children[0].textContent);
	
	
	
			modal.style.display = "block";
	
			modal.innerHTML =  `
			
			<i class="fas fa-window-close icon-close"></i>
				<div class="box-modal">
				
					<div class="modal-div-interna">
						<div class="modal-div-interna-left">
							<img src="${carro.imgModal}" alt="foto do carro" class="img-carro">		
						</div>
		
						<div class="modal-div-interna-rigth">
							<iframe width="100%" height="100%" src="${carro.url_video}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>

						
					</div>
					
					<div class="modal-texto">
							<h2 class="title-modal">${carro.nome}</h2>
							<p class ="modal-paragrafo">${carro.texto.paragrafo_um}</p>
							<p class ="modal-paragrafo">${carro.texto.paragrafo_dois}</p>
					</div>
				</div>
			`
					   
			document.querySelector(".icon-close").addEventListener("click",()=>{
                modal.style.display = "none";
                modal.innerHTML = "";
			})
				  
		})
		
	  })
	
	
	function buscaCarro(carro){
		for (let i = 0; i < cars.length; i++) {
			if (cars[i].nome == carro) {
				return cars[i]
			}
			
		}
	}

	

	
}

