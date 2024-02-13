import React from "react";
import ReactDOM from "react-dom/client" ;



//JSX (transpiled before it reaches the JS)- PARCEL - Babel

//JSX => Babel Transpiles it to React.CreateElement => ReactElement =>JsObject => HtmlElement(render)
const title= (
    <h1 className="head">
        Namaste React using JSX
    </h1>
);

//React Components
//Component Composition
  const HeadingComponent=() => (
    <div id="container">
        {title}
        <h1>Namaste React from Functional Component </h1>
    </div>
  );

  
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
 