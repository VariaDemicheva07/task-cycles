export function rangeSum(start, end) {
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    let sum = 0;

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

export function iterationCount(a) {
    let current = a;
    let count = 0;

    while (current > 0.1) {
        current /= 2;
        count++;
    }

    return count;
}

export function symbolsReplace(message) {
    if (message.length === 0) return message;

    let result = '';
    let i = 0;

    do {
        result += (i + 1) % 3 === 0 ? '_' : message[i];
        i++;
    } while (i < message.length);

    return result;
}
