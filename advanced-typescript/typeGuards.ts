const getIdentification= (id: string | number):void => {
    if(typeof id === "number") {
        console.log(id)
    } else {
        console.log(id.toUpperCase())
    }
}

getIdentification("ab12")

// instance of

class Fish {
    tellFishSpecies():void { console.log("This is a Fish") }
}
class Bird {
    tellBirdSpecies():void { console.log("This is a Bird") }
}

const myFunction = (species: Fish | Bird): void => {
    if(species instanceof Fish) {
        species.tellFishSpecies()
    } else {
        species.tellBirdSpecies()
    }
}

myFunction(new Fish);

// is keyword

interface Dog { bark : () => void }
interface Cat { meow : () => void }

function isDog(pet: Dog | Cat): pet is Dog {
    return (pet as Dog).bark !== undefined
}

function makeSound(pet: Dog | Cat) {
    if (isDog(pet)) {
        console.log("This is a dog")
    } else {
        console.log("This is a cat")
    }
}

const obj: Dog = {
    bark: ()=> console.log("Bark")
}

makeSound(obj);