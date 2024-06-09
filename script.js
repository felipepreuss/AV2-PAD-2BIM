
document.addEventListener("DOMContentLoaded", function() {

var agility = document.querySelector("#agilidade")
var pName = document.querySelector("#nome") 
var level = document.querySelector("#nivel")
var armor= document.querySelector("#armadura")
var strength = document.querySelector("#forca") 
var power = document.querySelector ("#poder")
var defense = document.querySelector("#defesa")

function atualizaNome() {
    var nomeJog = pName.value.trim();
    var nivelJog = parseInt(level.value, 10);
    
 
    nomeJog = nomeJog.replace(/\[Veterano\]|\[Iniciante\]/gi, '').trim();

   
   
        if (nivelJog > 5) {
            nomeJog += " [Veterano]";
        } else {
            nomeJog += " [Iniciante]";
        }
    

     
    pName.value = nomeJog;
}

function Attackpower(){
     
var nivelJog = parseInt(level.value, 10);
var forcaValue = parseInt(strength.value, 10)

var attPower = (forcaValue - 10) /2 +  nivelJog/2
    


power.value = attPower;
}

function defensePoints(){
    var agilidadeValue = parseInt(agility.value, 10);
    var armorValue = parseInt(armor.value, 10);
    var def = agilidadeValue + armorValue
    
    defense.value = def;
}

pName.addEventListener("change", atualizaNome);
 
level.addEventListener("change", function() {
    atualizaNome();
    Attackpower();

})
    strength.addEventListener("change", Attackpower)
    agility.addEventListener("change", defensePoints);
    armor.addEventListener("change", defensePoints);
        }
             );
