import Header from "./page/layout/header";
import Routing from "./route/routings";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routing />
      </Header>
    </BrowserRouter>
  );
}

export default App;
