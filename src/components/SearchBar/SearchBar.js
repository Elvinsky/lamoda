import './SearchBar.css';
export default function SearchBar(props) {
    return (
        <div className="search-wrapper">
            <input
                className="search-bar"
                onChange={props.onChange}
                value={props.value}
            />
            <button className="search-btn" onClick={props.onSearch} />
        </div>
    );
}
