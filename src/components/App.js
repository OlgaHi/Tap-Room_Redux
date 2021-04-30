import React from "react";
import KegControl from "./KegControl";
import Header from "./Header";

function App(){
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <KegControl />
      </div>
    </React.Fragment>
  )
}

export default App;