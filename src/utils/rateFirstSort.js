export default function rateFirstSort(init) {
    let rateFirst = init;
    rateFirst.sort((item1, item2) => {
        if (item1.rating > item2.rating) {
            return -1;
        }
        if (item1.rating < item2.rating) {
            return 1;
        }
        return 0;
    });
    return rateFirst;
}
