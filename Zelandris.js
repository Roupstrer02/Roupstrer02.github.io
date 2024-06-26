function hoverStatDisplayer(buttonInList) {
    let formulaDisplayer = document.getElementById("FormulaDisplayer");

    switch(buttonInList) {
        case 1:
            formulaDisplayer.innerText = "Max health = 100 + 25 * (Vitality - 1) + Total_Equipment_Max_Health * (1 + Vitality/100)";
            break;
        case 2:
            formulaDisplayer.innerText = "Healing Received% = 100 + Resilience \n HealthRegen/s = (1 + (Resilience - 1)/5 + Total_Equipment_HealthRegen) * Healing_Received%/100";
            break;
        case 3:
            formulaDisplayer.innerText = "Damage = Strength + Total_Equipment_Damage * (Strength/100)";
            break;
        case 4:
            formulaDisplayer.innerText = "MovementSpeed% = 100 + Dexterity/100 + Total_Equipment_MoveSpeed% \n MultiHit% = Dexterity/100 + Total_Equipment_MultiHit%";
            break;
        case 5:
            formulaDisplayer.innerText = "Max Mana = 20 + (Intelligence - 1) * 8 + Total_Equipment_Max_Mana";
            break;
        case 6:
            formulaDisplayer.innerText = "Base Spell Damage = Wisdom * (Wand_Offense_Affiniy% / 100)";
            break;
        case 7:
            formulaDisplayer.innerText = "A certain level of Artisan is required for using new crafting recipes and stations";
            break;
        default:
          formulaDisplayer.innerText = "Undefined Button Behaviour";    
      }

}