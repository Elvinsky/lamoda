export default function cheapFirstSort(init) {
    let cheapFirst = init;
    cheapFirst.sort((item1, item2) => {
        if (item1.price > item2.price) {
            return 1;
        }
        if (item1.price < item2.price) {
            return -1;
        }
        return 0;
    });
    return cheapFirst;
}
