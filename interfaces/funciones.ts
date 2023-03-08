(() => {

    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumbers: addTwoNumbers = () => {
        return 10;
    }


})()