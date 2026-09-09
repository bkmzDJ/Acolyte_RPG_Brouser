import { RACES } from "./Races.js";
import { LOCATION } from "./Location.js";

class Player {
    hp = 10
    damage = 0
    magdamage = 0
    armor = 100
    crete = 0
    phresistance = 0
    constructor(name, race, role, strength, agility, intelligence, endurance, location) {
        this.name = name
        this.race = race
        this.class = role
        this.str = strength
        this.agl = agility
        this.int = intelligence
        this.end = endurance
        this.location = location
        this.aplyBonus()
        this.stats()
    }
    stats(){
        this.hp = Math.floor(this.end*9.9)
        this.damage = Math.floor(this.str*0.9)
        this.magdamage = Math.floor(this.int*0.9)
        this.phresistance = Math.floor((this.armor * 100)/(this.armor + 1450)) // УБАЛАНСИТЬ ПОЗЖЕ 
        this.crete = Math.floor((this.agl * 100)/(this.agl + 1450))
    }
    aplyBonus(){
        if (this.race && this.race.bonus) {
            const a = this.race.bonus
            this.str += Math.floor((this.str/100)*a.str)
            this.agl += Math.floor((this.agl/100)*a.agl)
            this.int += Math.floor((this.int/100)*a.int)
            this.end += Math.floor((this.end/100)*a.end)
        }
    }
}
const player = new Player ("Вурдалак", RACES.tavramanez, "Воин", 15, 15, 15, 15, LOCATION.okalonia)
console.log(`
╔══════════════════════════════════════╗
║          🎮 ПЕРСОНАЖ                ║
╠══════════════════════════════════════╣

  📛 Имя:         ${player.name}
  🧬 Раса:        ${player.race.name}
  ⚔️  Класс:       ${player.class}

  💪 Сила:        ${player.str}
  🏃 Ловкость:    ${player.agl}
  🧠 Интеллект:   ${player.int}
  ❤️  Выносливость: ${player.end}

  📍 Локация:     ${player.location.settlement[0]}

╚══════════════════════════════════════╝
`);
