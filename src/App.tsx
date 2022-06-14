import { FormAdd } from "./components/FormAdd";
import { UsePeopleList } from "./reducers/peopleList";

const App = () => {
  const [list, listDispatch] = UsePeopleList();

  const handleAddForm = (inputName: string) => {
    listDispatch({
      type: 'ADD',
      payload: {
        name: inputName
      }
    })
  }

  const deletePerson = (id: string) => {
    listDispatch({
      type: 'DEL',
      payload: { id }
    });
  }

  const handleOrderButton = () => {
    listDispatch({
      type: 'ORDER'
    });
  }

  return ( 
    <div>
      <hr/>

      <FormAdd onData={handleAddForm}/>
      
      <button className="border-solid border-2 text-[20px] p-1" onClick={handleOrderButton}>Ordenar</button>
      <br/>
      Lista de pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name}
          <button className="border-1 bg-red-600 p-0.25 ml-3" onClick={() => deletePerson(item.id)}>[ Remove ]</button>
          
          </li>     
        ))}
      </ul>
    </div>
  );
}

export default App;