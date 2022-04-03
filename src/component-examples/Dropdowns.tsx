import { Dropdown } from "../components/Dropdown";
import { DropdownCheckbox } from "../components/DropdownCheckbox";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";

export const Dropdowns: IComponentExampleConfiguration[] = [
  {
    description: "Description",
    jsx: (
      <Dropdown
        items={["a", "b", "c", "d"]}
        name={"Hello"}
        onSelectItem={() => {
          console.log("h");
        }}
      />
    ),
    title: "Title",
    type: "Type",
  },
  {
    description: "Description",
    jsx: (
      <DropdownCheckbox
        items={["a", "b", "c", "d"]}
        name={"Hello"}
        onSelectItem={() => {
          console.log("h");
        }}
      />
    ),
    title: "Title",
    type: "Type",
  },
];
