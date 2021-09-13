import {Item} from "./Item";

export default abstract class Weapon extends Item {
    static MODIFIER_CHANGE_RATE = 0.05;
    static MAXIMUM_DAMAGE_MODIFIER = 0.25;
    static MAXIMUM_DURABILITY_MODIFIER = 1;
    private baseDamage: number;
    private damageModifier: number;
    private baseDurability: number;
    private durabilityModifier: number;

    constructor(name: string, value: number, weight: number, baseDamage: number, baseDurability: number) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.damageModifier = Weapon.MODIFIER_CHANGE_RATE;
        this.baseDurability = baseDurability;
        this.durabilityModifier = Weapon.MODIFIER_CHANGE_RATE;
    }

    getBaseDamage() {
        return this.baseDamage;
    }

    setBaseDamage(baseDamage: number) {
        this.baseDamage = baseDamage;
    }

    getDamageModifier() {
        return this.damageModifier;
    }

    setDamageModifier(damageModifier: number) {
        this.damageModifier = damageModifier;
    }

    getBaseDurability() {
        return this.baseDurability;
    }

    setBaseDurability(baseDurability: number) {
        this.baseDurability = baseDurability;
    }

    getDurabilityModifier() {
        return this.durabilityModifier;
    }

    setDurabilityModifier(durabilityModifier: number) {
        this.durabilityModifier = durabilityModifier;
    }

    getDamage() {
        return parseFloat((this.baseDamage + this.damageModifier).toFixed(2));
    }

    getDurability() {
        return parseFloat(((this.baseDurability + this.durabilityModifier) * 100).toFixed(2));
    }

    use(): string {
        let message;
        if (this.getDurability() <= 0) {
            message = `You can't use the ${this.getName()}, it is broken.`;
        } else {
            message = `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.`;
            this.baseDurability -= Weapon.MODIFIER_CHANGE_RATE;
            if (this.getDurability() <= 0) message += ` The ${this.getName()} breaks`;
        }
        return message;
    };

    toString(): string {
        return `${super.toString()}, Damage : ${this.getDamage()}, Durability : ${this.getDurability()}%`;
    }

    abstract polish(): void;
}