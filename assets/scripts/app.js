const MAX_ATTACK_POINTS= 10;
const MAX_STR_ATTACK_POINTS = 20;
const MAX_MONSTER_ATTACK_POINTS = 14;
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
    const monsterDamagePoints = dealMonsterDamage(MAX_ATTACK_POINTS);
    currentMonsterHealth -= monsterDamagePoints;
    if(currentMonsterHealth <= 0) {
        alert('you win!');
    }
    const playerDamagePoints = dealPlayerDamage(MAX_MONSTER_ATTACK_POINTS);
    currentPlayerHealth -= playerDamagePoints;
    if (currentPlayerHealth <=0) {
        alert('you lose!');
    }
    // logMoves(damagePoints);
}

function strongAttack() {
    // dealMonsterDamage(MAX_STR_ATTACK_POINTS);
    
}

function heal() {

}

function logMoves() {

}