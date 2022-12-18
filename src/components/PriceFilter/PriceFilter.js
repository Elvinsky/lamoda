import './PriceFilter.css';
export default function PriceFilter(props) {
    const handleFilter = (e) => {
        props.onPriceFilter(e.target);
    };
    return (
        <div className="pricerange-wrap">
            <input
                type="number"
                min="0"
                max="9999"
                placeholder="FROM"
                id="min"
                step="10"
                onInput={handleFilter}
            />
            -
            <input
                type="number"
                min="0"
                max="9999"
                placeholder="TO"
                id="max"
                step="10"
                onInput={handleFilter}
            />
        </div>
    );
}
