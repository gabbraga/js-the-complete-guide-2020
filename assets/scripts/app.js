const MAX_ATTACK_POINTS= 8;
const MAX_STR_ATTACK_POINTS = 18;
const MAX_MONSTER_ATTACK_POINTS = 14;
const HEAL_POINTS = 12;

let maxHealthPoints = 100;
let currentMonsterHealth = maxHealthPoints;
let currentPlayerHealth = maxHealthPoints;
let bonusLife = true;

//set the progress bars to use the maximum health points chosen
adjustHealthBars(maxHealthPoints);


//add event listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', heal);
logBtn.addEventListener('click', logMoves);

//event handlers
function attackHandler() { 
    attack('attack');
}

function strongAttackHandler() {
    attack('strongAttack');
}


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
        reset();
    } else {
        endRound();
    }
}

function heal() {
    increasePlayerHealth(HEAL_POINTS);
    currentPlayerHealth += HEAL_POINTS;
    if(currentPlayerHealth > maxHealthPoints) {
        currentPlayerHealth = maxHealthPoints;
    }
    endRound();
}

function endRound() {
    const playerDamagePoints = dealPlayerDamage(MAX_MONSTER_ATTACK_POINTS);
    currentPlayerHealth -= playerDamagePoints;
    if (currentPlayerHealth <=0 && !bonusLife) {
        alert('you lose!');
        reset();
    } else if (currentPlayerHealth <= 0 && bonusLife) {
        bonusLife = false;
        toggleBonusLife(false);
        currentPlayerHealth = maxHealthPoints;
        playerHealthBar.value = maxHealthPoints;
        alert('b-b-b-BONUS life saved you!!');
    }
}

function logMoves() {

}

function reset() {
    resetGame(maxHealthPoints);
    currentPlayerHealth = maxHealthPoints;
    currentMonsterHealth = maxHealthPoints;
    bonusLife = true;
    toggleBonusLife(true);
}