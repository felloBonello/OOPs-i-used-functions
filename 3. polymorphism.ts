class Animal{
    public speak() {
        console.log('not available')
    }
}

class Mouse extends Animal{}

class Cat extends Animal{
    public speak() {
        console.log('meow')
    }
}


class Fox extends Animal{
    public speak() {
        console.log('Ring-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding!')
    }
}

let animalInstance = new Animal()
animalInstance.speak()
//animalInstance.speak('tacos')

let mouseInstance = new Mouse()
mouseInstance.speak()

let catInstance = new Cat()
catInstance.speak()

let foxInstance = new Fox()
foxInstance.speak()
