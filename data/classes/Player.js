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
        this.arm = 100
        this.stats()
    }
    stats(){
        if (this.race && this.role) {
            const a = this.race.bonus
            const str = this.str
            const agl = this.agl
            const int = this.int
            const end = this.end
            this.str += Math.floor((str/100)*(a.str || 0))
            this.agl += Math.floor((agl/100)*(a.agl || 0))
            this.int += Math.floor((int/100)*(a.int || 0))
            this.end += Math.floor((end/100)*(a.end || 0))

            const b = this.role.bonus
            console.log(b);
            this.str += Math.floor((str/100)*(b.str || 0))
            this.agl += Math.floor((agl/100)*(b.agl || 0))
            this.int += Math.floor((int/100)*(b.int || 0))
            this.end += Math.floor((end/100)*(b.end || 0))
            this.arm += Math.floor((this.arm/100)*(b.arm || 0))

            this.hp = Math.floor(this.end*9.9)
            this.damage = Math.floor(this.str*0.9)
            this.mindamage = Math.floor(this.damage - (this.damage/100)*15)
            this.mag = Math.floor(this.int*0.9)
            this.phresistance = Math.floor((this.arm * 100)/(this.arm + 1450)) // УБАЛАНСИТЬ ПОЗЖЕ 
            this.crete = Math.floor((this.agl * 100)/(this.agl + 1450))
            this.mag += Math.floor((this.mag/100)*(b.mag || 0))
        }
    }  
}
const player = new Player ("Вурдалак", RACES.highelf, CLASS.mage, 15, 15, 15, 15, LOCATION.okalonia)
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
  ❣️ Физ. сопротивление: ${player.phresistance}
  💥 Крит. шанс:        ${player.crete}
  💠 Маг. урон:        ${player.mag}


  📍 Локация:     ${player.location.q[0]}

╚══════════════════════════════════════╝
`);
