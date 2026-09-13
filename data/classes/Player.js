import { RACES } from "./Races.js";
import { LOCATION } from "./Location.js";
import { CLASS } from "./Class.js";
class Player {
    hp = 10
    damage = 0
    magdamage = 0
    armor = 0
    crete = 0
    phresistance = 0
    constructor(name, race, role, strength, agility, intelligence, endurance, location) {
        this.name = name
        this.race = race
        this.role = role
        this.str = strength
        this.agl = agility
        this.int = intelligence
        this.end = endurance
        this.location = location
        this.mag = 0
        this.arm = 100
        this.aplyBonus()
        this.stats()
    }
    stats(){
        this.hp = Math.floor(this.end*9.9)
        this.damage = Math.floor(this.str*0.9)
        this.mindamage = Math.floor(this.damage - (this.damage/100)*15)
        this.mag = Math.floor(this.int*0.9)
        this.phresistance = Math.floor((this.armor * 100)/(this.armor + 1450)) // УБАЛАНСИТЬ ПОЗЖЕ 
        this.crete = Math.floor((this.agl * 100)/(this.agl + 1450))
    }
    aplyBonus(){
        if (this.race) {
            const a = this.race.bonus
            this.str += Math.floor((this.str/100)*a.str)
            this.agl += Math.floor((this.agl/100)*a.agl)
            this.int += Math.floor((this.int/100)*a.int)
            this.end += Math.floor((this.end/100)*a.end)
        }
        if (this.role) {
            const a = this.role.bonus
            console.log(a);
            this.str += Math.floor((this.str/100)*a.str)
            this.agl += Math.floor((this.agl/100)*a.agl)
            this.int += Math.floor((this.int/100)*a.int)
            this.end += Math.floor((this.end/100)*a.end)
            this.mag += Math.floor((this.mag/100)*a.mag)
            this.arm += Math.floor((this.arm/100)*a.arm)
        }
    }
}
const player = new Player ("Вурдалак", RACES.undead, CLASS.knightofdecay, 15, 15, 15, 15, LOCATION.okalonia)
console.log(`
╔══════════════════════════════════════╗
║           🎮 ПЕРСОНАЖ                ║
╠══════════════════════════════════════╣

  📛 Имя:         ${player.name}
  🧬 Раса:        ${player.race.name}
  ⚔️  Класс:       ${player.role.name}
  
  🪓 Урон:         ${player.mindamage+"-"+player.damage}
  💖 Здоровье:     ${player.hp}

  💪 Сила:        ${player.str}
  🏃 Ловкость:    ${player.agl}
  🧠 Интеллект:   ${player.int}
  ❤️ Выносливость: ${player.end}

  🛡️ Броня:        ${player.arm}
  💥 Крит. шанс:        ${player.crete}
  💠 Маг. урон:        ${player.mag}


  📍 Локация:     ${player.location.q[0]}

╚══════════════════════════════════════╝
`);
