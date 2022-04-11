class Student {
    constructor(name) {
        this.name = name;
    }

    printNameNormalFunction() {
        setTimeout(function () {
            console.log(`Normal`, this.name);
        });
    }

    printNameArrowFunction() {
        setTimeout(() => console.log(`Arrow`, this.name));
    }
}
