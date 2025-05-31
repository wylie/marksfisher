import React from "react";

import { StyledDiv } from "./styled.js";

const Page = ({ children }) => (
  <StyledDiv>
    <div class="back">
      <a href="https://www.fisherillustration.com" class="anchor illustration"><span class="imagewrap"></span></a>
      <a href="https://www.particle17.com" class="anchor comix"><span class="imagewrap"></span></a>
    </div>
  </StyledDiv>
);

export default Page;
