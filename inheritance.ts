class Food {
    private calories: number
    private ingredients: string[]

    constructor(calories: number, ingredients: string[]) {
        this.calories = calories
        this.ingredients = ingredients
    }
}

class Pizza extends Food {
    public size: string
    public crust: string

    constructor(calories: number, ingredients: string[], size: string, crust: string) {
        super(calories, ingredients)
        this.size = size
        this.crust = crust
    }
}




