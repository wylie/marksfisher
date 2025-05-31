import { Wrap, Back, Anchor, ImageWrap } from "./styled.js";

const App = ({ children, wrap }) => (
  <Wrap>
    <Back>
      <Anchor href="https://www.fisherillustration.com" className="illustration" target="_blank">
        <ImageWrap className="illustration" />
      </Anchor>
      <Anchor href="https://www.instagram.com/marksfisher3/" className="comix" target="_blank">
        <ImageWrap className="comix" />
      </Anchor>
    </Back>
  </Wrap>
);

export default App;
