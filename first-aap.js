//console.log('Hello World');

// const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
// console.log(fruits.map(array => array === ' ' ? 'empty string' :array));

console.log('a');
console.log('b');

const fetchDataOfC = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('c');
        }, 3000);
    });
};

const fetchDataOfD = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('d');
        }, 0);
    });
};

fetchDataOfC()
    .then((resultC) => {
        console.log(resultC);
        return fetchDataOfD();
    })
    .then((resultD) => {
        console.log(resultD); 
        console.log('e');
    });
