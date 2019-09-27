function findGaps(ranges) {
    const blocks = new Array(101);
    ranges.forEach(r => {
        for (let i = r.from; i <= r.to; i++) {
            blocks[i] = true;
        }
    });

    let currentIndex = 0;
    const gaps = [];

    for (let i = 0; i <= 100; i++) {
        const isUsed = blocks[i];
        if (!isUsed && !gaps[currentIndex]) {
            gaps[currentIndex] = { from: i };
        } else if (isUsed && !!gaps[currentIndex]) {
            gaps[currentIndex].to = i - 1;
            currentIndex += 1;
        }
    }

    if (gaps.length > 0 && !!gaps[currentIndex]) {
        gaps[currentIndex].to = 100;
    }

    return gaps;
}

module.exports = { findGaps };