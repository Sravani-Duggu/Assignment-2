import React from 'react'

function ParentComponent() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log('Effect triggered:', count);
        setCount(count + 1);
    }, []);
  return 
    <div>
      {count}
    </div>;
  
}

export default ParentComponent
