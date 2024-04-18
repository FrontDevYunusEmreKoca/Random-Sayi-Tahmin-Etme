var tahminet = document.querySelector(".tahmin_et");

var randomNumber = Math.floor(Math.random() * 100) + 1;



tahminet.onclick = function sayiTahminEt (){
   
    kalan_hak = 5;
    var input_sayi = document.getElementById("input_number").value;
    console.log(input_sayi);  

  
  
    // for (var i=1; i <= kalan_hak.length; i++){
        if (input_sayi < randomNumber){
            document.getElementById("randomSayiSonuc").innerText = "Girdiğiniz Sayı Random Üretilen Sayıdan Küçüktür."
        }
        else if (input_sayi > randomNumber) {
            document.getElementById("randomSayiSonuc").innerText = "Girdiğiniz Sayı Random Üretilen Sayıdan büyüktür."
        }
        else {
            document.getElementById("randomSayiSonuc").innerText = "Random Sayıyı Bildiniz."
        }
    }
    console.log(randomNumber) 
       
    // }


     

    
     
 


