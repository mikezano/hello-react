import { useState } from "react";
import "../scss/Dropdown.scss";

export const Dropdown = () => {
  const [isShowingItems, setIsShowingItems] = useState(false);
  const toggleItems = () => {
    setIsShowingItems(!isShowingItems);
  };
  return (
    <div className="dropdown" onClick={toggleItems}>
      <div className="dropdown__selected-item">
        <span className="dropdown__selected-text"> Dropdown</span>
      </div>
      {isShowingItems ? (
        <ul className="dropdown__list">
          <li className="dropdown__list-item">Item 1</li>
          <li className="dropdown__list-item">Item 2</li>
          <li className="dropdown__list-item">Item 3</li>
          <li className="dropdown__list-item">Item 4</li>
          <li className="dropdown__list-item">Item 5</li>
        </ul>
      ) : null}
    </div>
  );
};
