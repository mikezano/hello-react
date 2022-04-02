import { Dropdown } from "../components/Dropdown";
import { LayoutSidebarMain } from "../components/LayoutSidebarMain";

export const HelloWorld = () => {
  const selectItem = (item: string) => {
    console.log(`Select Item ${item}`);
  };
  return (
    <div className="hello-world">
      <Dropdown
        items={["a", "b", "c", "d"]}
        name={"Hello"}
        onSelectItem={selectItem}
      />
      <LayoutSidebarMain sidebar={<div>Sidebar</div>} main={<h1>Main</h1>} />
    </div>
  );
};
