document.addEventListener("DOMContentLoaded", function () {
    //enemy stats
    const enemy = {
        attack: 10,
        hp: 50,
        defense: 5
    };
    //player stats
    const player = {
        attack: 15,
        hp: 70,
        defense: 3
    };
    //updates the stats on the page when damage is dealt/taken
    function updateStats() {
        document.getElementById("enemy-hp").textContent = enemy.hp;
        document.getElementById("enemy-attack").textContent = enemy.attack;
        document.getElementById("enemy-defense").textContent = enemy.defense;
        document.getElementById("player-hp").textContent = player.hp;
        document.getElementById("player-attack").textContent = player.attack;
        document.getElementById("player-defense").textContent = player.defense;
    }
    //enemy DPS
    function enemyAttack() {
        const damage = Math.max(0, enemy.attack - player.defense);
        player.hp -= damage;
        updateStats();
    }
    //player DPS
    function playerAttack() {
        const damage = Math.max(0, player.attack - enemy.defense);
        enemy.hp -= damage;
        updateStats();
        enemyAttack(); //enemy counterattacks immediately
    }

    document.getElementById("attack-btn").addEventListener("click", playerAttack);

    updateStats();
});
