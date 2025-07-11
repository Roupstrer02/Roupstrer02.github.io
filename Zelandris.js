function hoverStatDisplayer(buttonInList) {
    let formulaDisplayer = document.getElementById("FormulaDisplayer");

    switch(buttonInList) {
        case 1:
            formulaDisplayer.innerText = "Max health = 20 + (equipment_getMaxHealth * (1 + (0.01 * Vitality))) + (Vitality - 1) * 25";
            break;
        case 2:
            formulaDisplayer.innerText = "Healing Received% = 100 + Resilience \n HealthRegen/s = 4 * (0.25 + ((Resilience - 1) * 0.05) + equipment_HealthRegen) * Healing_Received%/100";
            break;
        case 3:
            formulaDisplayer.innerText = "Damage = Strength + Total_Equipment_Damage * (Strength/100)\n*if unarmed: Damage = 1";
            break;
        case 4:
            formulaDisplayer.innerText = "MovementSpeed% = 100 + Dexterity + Total_Equipment_MoveSpeed% \n MultiHit% = Dexterity + Total_Equipment_MultiHit%";
            break;
        case 5:
            formulaDisplayer.innerText = "Max Mana = 20 + (Intelligence - 1) * 8 + Total_Equipment_Max_Mana";
            break;
        case 6:
            formulaDisplayer.innerText = "Base Spell Damage = 2^((Wisdom/5) * 1.25)";
            break;
        case 7:
            formulaDisplayer.innerText = "A certain level of Artisan is required for using new crafting recipes and stations";
            break;
        default:
          formulaDisplayer.innerText = "Undefined Button Behaviour";    
      }

}

function updateRecipeList() {
      // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("ArtisanRecipeList");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("button")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


function toggleDisplay(target) {
    description = target.children[0]
    if (description.style.display == "none" || description.style.display == "") {
        description.style.display = "flex";
    } else {
        description.style.display = "none";
    }
}

