const MAX_ATTACK_POINTS= 8;
const MAX_STR_ATTACK_POINTS = 18;
const MAX_MONSTER_ATTACK_POINTS = 14;
const HEAL_POINTS = 12;
const ATTACK = 'Attack';
const STRONG_ATTACK = 'Strong Attack';;
const MONSTER_ATTACK = 'Monster Attack';
const PLAYER_HEAL = 'Heal Player';
const GAME_OVER = 'Game Over';

let maxHealthPoints;
let userInput = parseInt(prompt('Choose the maximum health points to use: ', '100'));

if(isNaN(userInput) || userInput <=0 ) {
    maxHealthPoints = 100;
} else {
    maxHealthPoints = userInput;
}

let currentMonsterHealth = maxHealthPoints;
let currentPlayerHealth = maxHealthPoints;
let bonusLife = true;

let battleLog = [];

//set the progress bars to use the maximum health points chosen
adjustHealthBars(maxHealthPoints);


//add event listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', heal);
logBtn.addEventListener('click', showLog);

//event handlers
function attackHandler() { 
    attack(ATTACK);
}

function strongAttackHandler() {
    attack(STRONG_ATTACK);
}

function attack(attackMode) {
    let monsterDamagePoints;
    
    if(attackMode === ATTACK) {
        monsterDamagePoints = dealMonsterDamage(MAX_ATTACK_POINTS);
    } else if (attackMode === STRONG_ATTACK) {
        monsterDamagePoints = dealMonsterDamage(MAX_STR_ATTACK_POINTS);
    }
    currentMonsterHealth -= monsterDamagePoints;
    logMove(attackMode, monsterDamagePoints, currentMonsterHealth, currentPlayerHealth);
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
    logMove(PLAYER_HEAL, HEAL_POINTS, currentMonsterHealth, currentPlayerHealth);
    endRound();
}

function endRound() {
    const playerDamagePoints = dealPlayerDamage(MAX_MONSTER_ATTACK_POINTS);
    currentPlayerHealth -= playerDamagePoints;
    logMove(MONSTER_ATTACK, playerDamagePoints, currentMonsterHealth, currentPlayerHealth);
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

function logMove(eventType, value, monsterHealth, playerHealth) {
    let logEntry = {
        event: eventType,
        value: value,
        monsterHealth: monsterHealth,
        playerHealth: playerHealth
    }
    battleLog.push(logEntry);
}

function showLog() {
    for(const log of battleLog) {
        if(log.event === ATTACK || log.event === STRONG_ATTACK) {
            console.log(`You attacked the monster and it took - ${log.value} - damage points! :D\nYou: ${log.playerHealth} Monster: ${log.monsterHealth}`);
        } else if(log.event === MONSTER_ATTACK) {
            console.log(`The monster attacked you and you took - ${log.value} - damage points! >:(\nYou: ${log.playerHealth} Monster: ${log.monsterHealth}`);
        }
        else if(log.event === PLAYER_HEAL) {
            console.log(`You healed yourself and gained - ${log.value} - health points! <3\nYou: ${log.playerHealth} Monster: ${log.monsterHealth}`);
        }
    }
}

function reset() {
    resetGame(maxHealthPoints);
    currentPlayerHealth = maxHealthPoints;
    currentMonsterHealth = maxHealthPoints;
    bonusLife = true;
    toggleBonusLife(true);
}