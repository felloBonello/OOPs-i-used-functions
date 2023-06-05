abstract class Animal{
    public abstract speak(): void
}

class Cat extends Animal{
    public speak() {
        console.log('meow')
    }
}

class Dog extends Animal{
    public speak() {
        console.log('bark')
    }
}

class Fox extends Animal{
    public speak() {
        console.log('Ring-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding!')
    }
}

let catInstance = new Cat()
catInstance.speak()

let dogInstance = new Dog()
dogInstance.speak()

let foxInstance = new Fox()
foxInstance.speak()

