import Circle from "./RandomStuffForRenderProps/Circle";
import Box from "./RandomStuffForRenderProps/Box";
import Button from "./RandomStuffForRenderProps/Button";
import Draggable from "./DraggableRenderProp";

export default () => (
  <div className="humlebuks">
    <Draggable render={(props) => <Circle draggable={props} />} />
    <Draggable render={(props) => <Box draggable={props} />} />
    <Draggable render={(props) => <Button draggable={props} />} />
  </div>
);
