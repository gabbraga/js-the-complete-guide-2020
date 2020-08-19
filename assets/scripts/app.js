const MAX_ATTACK_POINTS= 10;
const MAX_STR_ATTACK_POINTS = 20;
const MAX_HEAL_POINTS = 10;

let maxHealthPoints = 100;
let currentMonsterHealth = maxHealthPoints;
let currentPlayerHealth = maxHealthPoints;

//set the progress bars to use the maximum health points chosen
adjustHealthBars(maxHealthPoints);


//add event listeners
attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', heal);
logBtn.addEventListener('click', logMoves);

//event handlers
function attack() {
    const damagePoints = dealMonsterDamage(MAX_ATTACK_POINTS);
    currentMonsterHealth -= damagePoints;
    // logMoves(damagePoints);
}

function strongAttack() {
    // dealMonsterDamage(MAX_STR_ATTACK_POINTS);
    
}

function heal() {

}

function logMoves() {

}