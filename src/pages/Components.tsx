import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { Dropdown } from "../components/Dropdown";
import { DropdownCheckbox } from "../components/DropdownCheckbox";

import { Dropdowns } from "../component-examples/Dropdowns";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";

interface ComponentRouteParams {
  type: string;
}

const NextComponent = lazy(() =>
  import("../components/Dropdown").then(({ Dropdown }) => ({
    default: Dropdown,
  }))
);

export const Components = () => {
  let { type } = useParams<ComponentRouteParams>();

  return (
    <>
      <h1>This is for {type}</h1>

      {Dropdowns.map((dropdown: IComponentExampleConfiguration) => (
        <Card component={dropdown.jsx}></Card>
      ))}
    </>
  );
};
