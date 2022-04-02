import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group"; // ES6
import "../scss/LayoutSidebarMain.scss";

type DropdownProps = {
  sidebar: JSX.Element;
  main: JSX.Element;
};

export const LayoutSidebarMain = ({ sidebar, main }: DropdownProps) => {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true);

  return (
    <div className="layout">
      {isShowingSidebar && (
        <>
          <aside className="layout__sidebar">{sidebar}</aside>
          <button
            className="layout__hide-sidebar"
            onClick={() => setIsShowingSidebar(false)}
          >
            Hide
          </button>
        </>
      )}

      {!isShowingSidebar && (
        <button
          className="layout__show-sidebar"
          onClick={() => setIsShowingSidebar(true)}
        >
          Show
        </button>
      )}

      <main className="layout__main">{main}</main>
    </div>
  );
};
