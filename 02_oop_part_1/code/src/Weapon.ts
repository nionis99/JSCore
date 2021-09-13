import {Item} from "./Item";

export default abstract class Weapon extends Item {
    static MODIFIER_CHANGE_RATE = 0.05;
    private baseDamage: number;
    private damageModifier: number;
    private baseDurability: number;
    private durabilityModifier: number;

    constructor(name: string, baseDemage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.baseDamage = baseDemage;
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
        return (this.baseDamage + this.damageModifier).toPrecision(2);
    }

    getDurability() {
        return (100 * (this.baseDurability + this.durabilityModifier)).toPrecision(2);
    }

    use(): string {
        return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage`;
    };

    toString(): string {
        return `${super.toString()}, Damage : ${this.getDamage()}, Durability : ${this.getDurability()}%`;
    }

    abstract polish(): void;
}