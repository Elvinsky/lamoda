import './SortLine.css';
export default function SortLine(props) {
    const handleSort = (e) => {
        props.onSort(e.target.id);
    };
    return (
        <div className="sortline-wrapper">
            <button onClick={handleSort} id="cheapfirst">
                Cheap first
            </button>
            <button onClick={handleSort} id="expfirst">
                Expensive first
            </button>
            <button onClick={handleSort} id="ratedfirst">
                Rated first
            </button>
        </div>
    );
}
