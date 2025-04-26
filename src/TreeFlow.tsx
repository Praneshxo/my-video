import { MainBox } from "./MainBox";

import { VerticalLine } from "./VerticalLine";

import { HorizontalSplitter } from "./HorizontalSplitter";

import { ChildBox } from "./ChildBox";



export const TreeFlow: React.FC = () => {

return (

<div>

<MainBox />

<VerticalLine />

<HorizontalSplitter

position="left"

startFrame={50}


/>

<HorizontalSplitter

position="right"

startFrame={50}


/>

<ChildBox label={`A`} position="left" startFrame={60} />

<ChildBox label={`B`} position="center" startFrame={70} />

<ChildBox label={`C`} position="right" startFrame={80} />


</div>

);

};



export default TreeFlow;