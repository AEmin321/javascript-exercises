const fibonacci = function(num) {
    const fibo=[1,1,2];
    const maxFib=25;
    for (let i=2;i<=maxFib;i++){
        fibo.push((i-1)+(i-2));
    }
    return fibo[num];
};

// Do not edit below this line
module.exports = fibonacci;
