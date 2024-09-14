import React from 'react'


// this code is for component render-----------------------------------

// function MyComeponent() {
//   return(
//     <>
//     <div key="first">First</div>
//     <div key="second">Second</div>
//     </>
//   );
// }

// function App() {
//   return(
//     <div>
//     <MyComeponent key="first"/>
//     <MyComeponent key="second"/>
//   </div>
//   )
// }

// export default App;






// this code is for output when this component is rendered--------------------------------
const MyComeponent = ({children}) => {
  React.Children.forEach(children, child => {
    console.log(child.type);
  });

  return 
    <div>{children}</div>
};


function App(){
  return (

    <MyComeponent>
      <p>First Child</p>
      <p>Second Child</p>
    </MyComeponent>
  );
}

export default App;