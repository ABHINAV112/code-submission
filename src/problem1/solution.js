var sum_to_n_a = function (n) {
    // your code here
    return n * (n + 1) / 2;
};

var sum_to_n_b = function (n) {
    // your code here
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_c = function (n) {
    // your code here
    if (n == 1) {
        return 1;
    }
    return n + sum_to_n_c(n - 1);
};

console.log("Solution A ", sum_to_n_a(5));

console.log("Solution B ", sum_to_n_b(5));

console.log("Solution C ", sum_to_n_c(5));