var tahminet = document.querySelector(".tahmin_et");
document.querySelector(".tekrar-oyna ").style.display = "none";

heart = 4;
var randomSayi = Math.floor(Math.random() * 101);

tahminet.onclick = function sayiTahminEt (){
    var input_sayi = document.getElementById("input_number").value;
    
   
   

// if (heart == 5){
//     if (input_sayi == ""){
//         document.getElementById("randomSayiSonuc").innerText = "Lutfen bir sayi tahmin ediniz."
//     }
 
//     else {
//         var randomSayi = Math.floor(Math.random() * 101);
        
//     }
//     if (input_sayi == randomSayi){
//         document.getElementById("randomSayiSonuc").innerText = " Random Sayiyi Dogru bildiniz"
//     }
    
//     else 
//     {
//         if (input_sayi > randomSayi ){
//             document.getElementById("randomSayiSonuc").innerText = " Girdiginiz Sayi Random Sayidan buyuktur"
//             heart--;
//         }
//         else {
//             document.getElementById("randomSayiSonuc").innerText = " Girdiginiz Sayi Random Sayidan kucuktur"
//             heart--
//         }
//         if (heart == 0){
//             document.getElementById("randomSayiSonuc").innerText = " Tahmin hakkkiniz kalmamistir"
//         }
//     }
// }
if (heart != 0 ){
   
    if (input_sayi == ""){
        document.getElementById("randomSayiSonuc").innerText = "  Lutfen bir tam sayi giriniz";
    }
    else {
        if (input_sayi > 100 && input_sayi < 0){
            document.getElementById("randomSayiSonuc").innerText = "  Random Sayı 0 ile 100 arasındadır Lütfen geçerli bir sayı giriniz ";
        }
        else{
            console.log("random sayi " + randomSayi);
            if (randomSayi == input_sayi){
                document.getElementById("randomSayiSonuc").innerText = "Random sayıyı bildiniz."
            }
            else {
                if (randomSayi > input_sayi){
                    document.getElementById("randomSayiSonuc").innerText = "Random sayı girdiğiniz sayıdan büyüktür.";
                    var element_heart = document.querySelectorAll(".hak > i ")[heart];
                    element_heart.classList.remove("text-danger");
                    element_heart.classList.add("text-light");

                    heart--;
                    document.getElementById("kalan_hak").innerHTML = `<span> Kalan hakkınız <b>${heart +1}<b/>`
                    return;
                }
                if (input_sayi >randomSayi){
                    document.getElementById("randomSayiSonuc").innerText = "Random sayı girdiğiniz sayıdan küçüktür." 
                    var element_heart = document.querySelectorAll(".hak > i ")[heart ];
                    element_heart.classList.remove("text-danger");
                    element_heart.classList.add("text-light");

                 
                    heart--;
                    document.getElementById("kalan_hak").innerHTML = `<span> Kalan hakkınız <b>${heart +1}<b/>`
                    return;
                }
                }
        }


     
       
    }
   
   
}
else {
    document.getElementById("randomSayiSonuc").style.display = "none"; 
    document.getElementById("kalan_hak").innerHTML = `<span> Tahmin Etme Hakkınız Bitmiştir. </span>`
    document.getElementById("kalan_hak").style.paddingBottom = "20px"
    document.querySelector(".hak").style.display = "none"
    document.querySelector(".tekrar-oyna ").style.display = "block";
    document.querySelector(".tahmin_et ").style.display = "none";
}
var tekrar_oyna = document.querySelector(".tekrar-oyna ");
tekrar_oyna.addEventListener("click", function (){
    location.reload();
})


}
   
    

       
    // }


     

    
     
 


