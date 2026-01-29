class Vehicle {
    #model_name
    _model_type

    constructor(model_name, model_type) {
        this.#model_name = model_name;
        this._model_type = model_type;
    }

    getDetails() {
        console.log(`Model Name: ${this.#model_name}, Model Type: ${this._model_type}`);
    }
}

class Car extends Vehicle {
    constructor(model_name) {
        super(model_name, "Car");
    }

    showType() {
        console.log(`Model Type: ${this._model_type}`);
    }

}

const car = new Car("Toyota")
car.getDetails();
car.showType();