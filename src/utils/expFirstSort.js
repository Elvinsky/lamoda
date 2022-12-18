export default function expFirstSort(init) {
    let expFirst = init;
    expFirst.sort((item1, item2) => {
        if (item1.price > item2.price) {
            return -1;
        }
        if (item1.price < item2.price) {
            return 1;
        }
        return 0;
    });
    return expFirst;
}
