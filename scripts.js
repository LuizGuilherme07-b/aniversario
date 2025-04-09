window.onload = function(){
    document.getElementById("gallery").style.display = "none";
  
}

/*
document.getElementById("btn_1").onclick = function(){
    document.getElementById("gallery").style.display = "none";
}
document.getElementById("btn_2").onclick = function(){
    document.getElementById("gallery").style.display = "none";
}
document.getElementById("btn_3").onclick = function(){
    document.getElementById("gallery").style.display = "none";
}
document.getElementById("btn_4").onclick = function(){
    document.getElementById("gallery").style.display = "none";
}
*/
// Função para mudar a aba exibida
/*
function showTab(tabName) {
    const tabs = document.querySelectorAll('.content');
    tabs.forEach(tab => tab.classList.remove('active')); // Remove a classe ativa de todas as abas
    document.getElementById(tabName).classList.add('active'); // Adiciona a classe ativa à aba clicada
}*/

// Mostra a primeira aba por padrão
document.getElementById('moments').classList.add('active');


document.getElementById("btnGaleria").onclick = function(){
    document.getElementById("gallery").style.display = "block";
    document.getElementById("moments").style.display = "none";
    document.getElementById("first-meeting").style.display = "none";
    document.getElementById("our-date").style.display = "none";
    document.getElementById("plans").style.display = "none";
    document.getElementById("about-us").style.display = "none";
    //document.getElementById(tabName).classList.add('active')
}

document.getElementById("btn_1").onclick = function(){
   
    document.getElementById("moments").style.display = "block";
    document.getElementById("first-meeting").style.display = "none";
    document.getElementById("our-date").style.display = "none";
    document.getElementById("plans").style.display = "none";
    document.getElementById("about-us").style.display = "none";
    document.getElementById("gallery").style.display = "none";
}
document.getElementById("btn_2").onclick = function(){
    document.getElementById("moments").style.display = "none";
    document.getElementById("first-meeting").style.display = "block";
    document.getElementById("our-date").style.display = "none";
    document.getElementById("plans").style.display = "none";
    document.getElementById("about-us").style.display = "none";
    document.getElementById("gallery").style.display = "none";
}
document.getElementById("btn_3").onclick = function(){
    document.getElementById("moments").style.display = "none";
    document.getElementById("first-meeting").style.display = "none";
    document.getElementById("our-date").style.display  = "block";
    document.getElementById("plans").style.display = "none";
    document.getElementById("about-us").style.display = "none";
    document.getElementById("gallery").style.display = "none";
}
document.getElementById("btn_4").onclick = function(){
    document.getElementById("moments").style.display = "none";
    document.getElementById("first-meeting").style.display = "none";
    document.getElementById("our-date").style.display  = "none";
    document.getElementById("plans").style.display = "block";
    document.getElementById("about-us").style.display = "none";
    document.getElementById("gallery").style.display = "none"
}
document.getElementById("btn_5").onclick = function(){
    document.getElementById("moments").style.display = "none";
    document.getElementById("first-meeting").style.display = "none";
    document.getElementById("our-date").style.display  = "none";
    document.getElementById("plans").style.display = "none";
    document.getElementById("about-us").style.display = "block";
    document.getElementById("gallery").style.display = "none"
}
