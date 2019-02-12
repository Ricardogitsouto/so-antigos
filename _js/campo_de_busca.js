;(function(){

    let inputBusca = document.querySelector('#hero-demo');
    const btnPesquisa = document.querySelector('.btn-pesquisa');
    const aviso = document.querySelector(".aviso-de-falha-na-busca")
    let input = document.querySelector('#hero-demo');
    let msg_erro = document.querySelector(".div-sugestao")
    let textoMaiusculo;


        btnPesquisa.addEventListener("click",()=>{
            event.preventDefault()
            scroll(0,heigth_da_tela)
            if(input.value == 0){              
                msg_erro.textContent = 'Campo de Busca Vázio!!';
                msg_erro.className = "div-sugestao-show";
            }

            textoMaiusculo = (titleize(input.value))

            let vezesNaoEncontrado = 0;
            // ------------------------------------------
            cars.forEach(function(item){
                if(textoMaiusculo.indexOf(item.nome) != -1 || textoMaiusculo.indexOf(item.marca) != -1 ){         
                    section_box_cards.innerHTML = "";
                    msg_erro.className = "div-sugestao";
                    cria_card(item.url,item.nome,item.descricao,10);          
                }else{
                    vezesNaoEncontrado++;
                } 
                                        
            })

            if (vezesNaoEncontrado == cars.length) {
                msg_erro.className = "div-sugestao-show";                
            }
                
            inputBusca.value = "";  
            abreModal();
        })


        function titleize(text) {
            var words = text.toLowerCase().split(" ");
            for (var a = 0; a < words.length; a++) {
                var w = words[a];
                words[a] = w[0].toUpperCase() + w.slice(1);
            }
            return words.join(" ");
        }
        

})()


