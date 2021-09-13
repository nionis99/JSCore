import Weapon from "./Weapon";


export default class Sword extends Weapon {
    constructor(value: number, weight: number, baseDamage: number, baseDurability: number) {
        super("sword", value, weight, baseDamage, baseDurability);
    }

    polish() {
        const polishedDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;
        const newDamageModifier = polishedDamageModifier >= Weapon.MAXIMUM_DAMAGE_MODIFIER
            ? Weapon.MAXIMUM_DAMAGE_MODIFIER
            : polishedDamageModifier;
        this.setDamageModifier(newDamageModifier);
    }
}