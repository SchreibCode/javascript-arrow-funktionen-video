class Student {
    constructor(name) {
        this.name = name;
    }
    printNameNormalFunction() {
        setTimeout(function () {
            console.log("Normal", this.name);
        });
    }
    printNameArrowFunction() {
        setTimeout(() => console.log("Arrow", this.name));
    }
}

const marie = new Student("Marie");
marie.printNameNormalFunction();
marie.printNameArrowFunction();


