const runningAverage = () => {
    let count = 0;
    let sum = 0;
    return (value) => {
        sum += value;
        count++;
        return sum / count;
    }
}

const rAvg = runningAverage();
rAvg(10);
rAvg(11);
rAvg(12);