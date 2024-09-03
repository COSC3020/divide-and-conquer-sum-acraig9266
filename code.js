function divideAndConquerSum(a) {
    var sum = 0;
    if (a.length == 0) {
        return 0;
    }
    sum = summify(a, Math.floor(a.length / 3), 2 * Math.floor(a.length / 3), sum);

    return sum;
}

function summify(a, cut1, cut2, sum) {
    if (a.length == 2) {
        return a[0] + a[1];
    } else if (a.length == 1) {
        return a[0];
    } else {
        cut1 = Math.floor(a.length / 3);
        cut2 = 2 * Math.floor(a.length / 3);
        sum = summify(a.slice(0, cut1), cut1, cut2, sum) + summify(a.slice(cut1, cut2), cut1, cut2, sum) + summify(a.slice(cut2, a.length), cut1, cut2, sum);
        return sum;
    }
}