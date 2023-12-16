import "./filterbar.css";

const Filterbar = () => {
  const sortingOptions = [
    "RECOMENDED",
    "NEWST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  return (
    <>
      <div className="filterbarContainer">
        <div>
          <p>HIDE FILTER</p>
        </div>
        <div className="vertical-Line"></div>
        <div>
          <select name="sort" id="sortDropDown" value={sortingOptions[0]}>
            {sortingOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Filterbar;
