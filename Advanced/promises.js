//  how to write promises
const promiseOne = new Promise(function (resolve, reject) {
  // Do any task lets say DB connection or api calls
  setTimeout(function () {
    console.log("ASYNC-1 COMPLETED");
    resolve();
  }, 2000);
});

// consuming this promise above
promiseOne.then(function () {
  console.log("Promise One Consumed");
});

// Creating Promise without variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise -2 Completed");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promises two Consumed");
});

// Passing some parameters to resolve

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise -3 Completed");
    resolve({ username: "Dipanshu", useremail: "Dipanshu@gmail.com" });
  }, 2000);
});

promiseThree.then(function ({ username }) {
  console.log(username);
  console.log("Promise three consumed");
});

// Usage of reject / Catch method
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Dipanshu", useremail: "Dipanshu@gmail.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});
// Chaining of then and finally -{finally is used to tell either promise is reject or resolved}
promiseFour
  .then(function (user) {
    console.log(user);
    return user.useremail;
  })
  .then((useremail) => {
    console.log(useremail);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either consumed or resolved");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ languageName: "JavaScript", techStack: "MERN" });
    } else {
      reject("ERROR: Language not Found");
    }
  }, 2000);
});

// consuming promise with async await we need to use try and catch also 

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// Use of fetch behind the seen for next video better understanding

fetch('https://catfact.ninja/fact')
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  })