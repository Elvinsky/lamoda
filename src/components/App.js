import './App.css';
import './SearchBar/SearchBar.js';
import SearchBar from './SearchBar/SearchBar.js';
import React, {useEffect, useState} from 'react';
import Item from './Item/Item';
import generateItems from '../utils/generateItems';
import SortLine from './SortLine/SortLine';
import cheapFirstSort from '../utils/cheapFirstSort';
import expFirstSort from '../utils/expFirstSort';
import rateFirstSort from '../utils/rateFirstSort';
import ColorFilter from './ColorFilter/ColorFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import TotalCount from './TotalCount/TotalCount';

const INIT_ITEMS = generateItems(220);
const App = () => {
    //STATES
    const [content, setContent] = useState('');
    const [items, setItems] = useState(INIT_ITEMS);
    const [sortType, setSortType] = useState('');
    const [searchedItems, setSearchedItems] = useState([]);
    const [colors, setColors] = useState([]);
    const [colorFilter, setColorFilter] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(9999);

    //GETTING DISTINCT DOLORS

    useEffect(() => {
        const notUniqueColors = [];
        searchedItems.length === 0
            ? INIT_ITEMS.map((item) => notUniqueColors.push(item.color))
            : searchedItems.map((item) => notUniqueColors.push(item.color));
        setColors(Array.from(new Set(notUniqueColors))); //If iw works... It works
    }, [searchedItems]);

    //SEARCHING WITH SEARCH BAR

    const handleSearch = useEffect(() => {
        const bufSearchedItems = INIT_ITEMS.filter((item) =>
            item.name.toLocaleLowerCase().includes(content.toLocaleLowerCase())
        );
        setItems(bufSearchedItems);
        setSearchedItems(bufSearchedItems);
    }, [content]);

    //SORTING IN SORT LINE

    const handleSort = (arg) => {
        setSortType(arg);
        setTimeout((arg) => setSortType(arg), 100); //Same stuff. Idk why, just let it be
    };

    //SETTING COLOR FILTER

    const handleColorFilter = (arg) => {
        if (!colorFilter.includes(arg)) {
            setColorFilter((prevFilter) => {
                return [...prevFilter, arg];
            });
        } else {
            console.log(arg);
            setColorFilter(
                colorFilter.filter((color) => {
                    return color !== arg;
                })
            );
            console.log(colorFilter);
        }
    };

    //FILTERING WITH COLOR FILTRATION

    useEffect(() => {
        if (colorFilter.length === 0 && content === '') {
            setItems(INIT_ITEMS);
            return;
        }
        if (colorFilter.length === 0 && searchedItems.length !== 0) {
            setItems(searchedItems);
            return;
        }
        if (searchedItems.length === 0) {
            setItems(items.filter((item) => colorFilter.includes(item.color)));
        } else {
            setItems(
                searchedItems.filter((item) => colorFilter.includes(item.color))
            );
        }
    }, [colorFilter, searchedItems]);

    //SORTING

    useEffect(() => {
        if (sortType === 'cheapfirst') {
            let cheapFirst = cheapFirstSort(items);
            setItems(cheapFirst);
        }
        if (sortType === 'expfirst') {
            let expFirst = expFirstSort(items);
            setItems(expFirst);
        }
        if (sortType === 'ratedfirst') {
            let rateFirst = rateFirstSort(items);
            setItems(rateFirst);
        }
    }, [sortType, searchedItems, items]);

    //GETTING MIN AND MAX

    const handlePriceFilter = (target) => {
        target.id === 'min' ? setMin(target.value) : setMax(target.value);
    };

    //FILTERING WITH MIN AND MAX PRICES (BUGS)
    //1. When hitting backspace\decreasing value with buttons items aint rerendered

    useEffect(() => {
        setTimeout(() => {
            setItems(
                items.filter((item) => item.price >= min && item.price <= max)
            );
        }, 1000);
    }, [min, max]);

    //JSX
    return (
        <div className="general-wrap">
            <SearchBar
                onChange={(e) => {
                    setContent(e.target.value);
                }}
                onSearch={handleSearch}
                value={content}
            />
            <SortLine onSort={handleSort} />
            <div className="ui-wrap">
                <div className="sidemenu-wrap">
                    <div className="filter-wrapper__color">
                        <div className="filter-head__color">
                            <h1>BY COLOR</h1>
                        </div>
                        {colors.map((color) => (
                            <ColorFilter
                                color={color}
                                onCheck={handleColorFilter}
                            />
                        ))}
                    </div>
                    <div className="filter-wrapper__price">
                        <div className="filter-head__price">
                            <h1>BY PRICE</h1>
                            <PriceFilter onPriceFilter={handlePriceFilter} />
                        </div>
                    </div>
                    <TotalCount count={items.length} />
                </div>
                <div className="items-wrapper">
                    {items.length !== 0 ? (
                        items.map((item) => (
                            <Item
                                name={item.name}
                                color={item.color}
                                rating={item.rating}
                                desc={item.desc}
                                price={item.price}
                                key={item.id}
                            />
                        ))
                    ) : (
                        <p>No Results</p>
                    )}
                </div>
            </div>
        </div>
    );
};
export default React.memo(App);
