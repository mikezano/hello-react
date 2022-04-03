import { lazy } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { Dropdowns } from "../component-examples/Dropdowns";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import "../scss/Components.scss";

interface ComponenProps {
  description: string;
  jsx: JSX.Element;
  title: string;
  type: string;
}

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
    <div className="components">
      <h1 className="components__header">This is for {type}</h1>
      <div className="components__examples">
        {Dropdowns.map((dropdown: IComponentExampleConfiguration) => (
          <Card
            component={dropdown.jsx}
            description={dropdown.description}
            title={dropdown.title}
          ></Card>
        ))}
      </div>
    </div>
  );
};
