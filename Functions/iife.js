//  Immediately Invoked Function Expression
// Named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})();
// here the function declaration id wrapped in () and then to immediately call it we add another (); semicolon is added to end the function call

((name) => {
    console.log(`DB CONNECTED ${name}`);
})('Dipanshu');

// Since we have written 2 IIfI therefore we have added semicolon