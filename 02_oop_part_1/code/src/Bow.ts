import Weapon from "./Weapon";

export default class Bow extends Weapon {
    constructor(value: number, weight: number, baseDamage: number, baseDurability: number) {
        super("bow", value, weight, baseDamage, baseDurability);
    }

    polish() {
        const polishedDurabilityModifier = this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE;
        const newDurabilityModifier = polishedDurabilityModifier >= Weapon.MAXIMUM_DURABILITY_MODIFIER
            ? Weapon.MAXIMUM_DURABILITY_MODIFIER
            : polishedDurabilityModifier;
        this.setDurabilityModifier(newDurabilityModifier);
    }
}