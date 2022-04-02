import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Dropdown } from "../components/Dropdown";

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
    <div>
      <h1>This is for {type}</h1>
      <Dropdown
        items={["a", "b", "c", "d"]}
        name={"Hello"}
        onSelectItem={() => {
          console.log("h");
        }}
      />
    </div>
  );
};
