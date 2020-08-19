const MAX_ATTACK_POINTS= 10;
const MAX_STR_ATTACK_POINTS = 18;
const MAX_MONSTER_ATTACK_POINTS = 14;
const MAX_HEAL_POINTS = 10;

let maxHealthPoints = 100;
let currentMonsterHealth = maxHealthPoints;
let currentPlayerHealth = maxHealthPoints;

//set the progress bars to use the maximum health points chosen
adjustHealthBars(maxHealthPoints);


//add event listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', heal);
logBtn.addEventListener('click', logMoves);

//event handlers
function attack(attackMode) {
    let monsterDamagePoints;
    
    if(attackMode === 'attack') {
        monsterDamagePoints = dealMonsterDamage(MAX_ATTACK_POINTS);
    } else if (attackMode === 'strongAttack') {
        monsterDamagePoints = dealMonsterDamage(MAX_STR_ATTACK_POINTS);
    }
    currentMonsterHealth -= monsterDamagePoints;
    if(currentMonsterHealth <= 0) {
        alert('you win!');
    }
    const playerDamagePoints = dealPlayerDamage(MAX_MONSTER_ATTACK_POINTS);
    currentPlayerHealth -= playerDamagePoints;
    if (currentPlayerHealth <=0) {
        alert('you lose!');
    }
}

function attackHandler() { 
    attack('attack');
}

function strongAttackHandler() {
    attack('strongAttack');
}

function heal() {

}

function logMoves() {

}