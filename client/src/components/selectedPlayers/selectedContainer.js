import React from "react";
import SelectedCard from "./selectedCards";
import { SelectedBar } from "./selectedStyles";

const SelectedContainer = props => {
  const selected = props.selected.list;
  console.log("From SLCont", selected)
  return (
    <SelectedBar>
      {selected.map(player => 
        <SelectedCard selected={player} />
      )}
    </SelectedBar>
  );
};

export default SelectedContainer;
