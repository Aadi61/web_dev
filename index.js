const rootElement = document.getElementById('root')
    
class ShoppingList extends React.Component { 
  
render() { 
    return (
    <div className="shopping-list">
    <h1>Shopping List for {this.props.name}</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
    </div>
  );
  } 
}

function App(){
return(
<div>
<ShoppingList name="@luispagarcia on Dev.to!"/>
</div>
)
}


ReactDOM.render(
  <App />,
  rootElement
)