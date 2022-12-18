export default function generateItems(n = 500) {
    const INIT_DESC = generateDesc();
    const INIT_COLOR = [
        'white',
        'biege',
        'light-blue',
        'orange',
        'black',
        'red',
        'green',
        'gray',
    ];
    const randomForColor = () => {
        return Math.round(Math.random() * (INIT_COLOR.length - 1));
    };

    const generateItem = () => ({
        name: Math.random().toString(36).substring(2),
        color: INIT_COLOR[randomForColor()],
        rating: Math.round(Math.random() * (100 - 1) + 1),
        price: Math.round(Math.random() * (9999 - 10) + 10),
        desc: INIT_DESC.join(' '),
        id: Date.now + Math.random().toString(36).substring(4),
    });

    const items = [];

    for (let i = 0; i < n; i++) {
        items.push(generateItem());
    }

    return items;
}
const generateDesc = (n = 10) => {
    const desc = [];
    for (let i = 0; i < n; i++) {
        desc.push(Math.random().toString(36).substring(8));
    }
    return desc;
};
