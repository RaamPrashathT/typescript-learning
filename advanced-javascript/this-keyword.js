var name = 20

const user = {
    name: 'Alex',
    getGreet() {
        return () => {
            console.log(this.name)
        }
    }
};

const greet = user.getGreet();
greet()