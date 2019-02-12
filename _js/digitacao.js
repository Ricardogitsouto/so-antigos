;(function(){
    let textos = ["Os mais lindos clássicos!","A fúria dos esportivos","Aquele carrão de rally"];
    let imgs_header = ["url(./_imgs/img-header-01.jpg)","url(./_imgs/img-header-02.jpg)","url(./_imgs/background-rally-header.jpg)"];
    let header = document.querySelector('header');
    
    digita(textos[0],"txt");

    let i = [0,1];  
    // let a = 1; 

    setInterval(function(){
        if(i[0] == textos.length)i[0] = 0
        if(i[1] == imgs_header.length)i[1] =0
        header.style.backgroundImage = ""+imgs_header[i[1]]+"";      
        digita(textos[i[1]],"txt") ;  
       
        i[0]++;
        i[1]++;
       
    },4000);


    function digita(texto,classElement){
        var txt = document.querySelector("."+classElement);
        let a = texto;
        let c = 0;

        setInterval(()=>{
            if(c < a.length){txt.textContent += a[c]; c++; }
        },80);

        txt.textContent ="";
    }
})()



