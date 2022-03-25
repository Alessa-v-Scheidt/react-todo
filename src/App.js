import TodoElement from "./TodoElement";
import {useState} from "react";
import background from "./images/banana-g1d33f2aa5_1920.jpg";

function App() {
  // const [] erstellt mir direkt eine Liste an Variablen, die sofort benannt werden
  // useState hat als Rückgabetyp eine Liste an Variablen
  // initialState in useState ist der Startzustand der Liste (todos)
  // setTodos kann verwendet werden um die Liste todos upzudaten
  const [todos, setTodos] = useState(["Mittagessen", "React lernen"])

  // um an Inhalt des Textfeldes zu kommen
  // der Inhalt wird in der Variable newTodoText gespeichert
  const [newTodoText, setNewTodoText] = useState("")

  // Funktion um neuen Text per Click ins Array einzufügen
  function handleAdd() {
    if (newTodoText === "") return
    // Erzeugen einer neuen Liste
    const newTodos = [...todos, newTodoText]
    // die Komponenten auf der Seite werden nach setTodos aktualisiert
    setTodos(newTodos)
    setNewTodoText("")
  }

  // der Text im Eingabefeld wird in der Variable todoText gespeichert
  function handleChange(event){
    const todoText = event.target.value
    setNewTodoText(todoText)
  }

  // um bei Click entsprechendes Element zu löschen
  function deleteTodoAt(index){
    const newTodos = [...todos]
    // löscht Elemente ab einer bestimmten Stelle
    // Anzahl der zu löschenden Elemente wird mit angegeben
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div  className="main-container">
        <h1 className="header-text">
          Todo - App
        </h1>
        {
          // für jeden Text wird ein Element angelegt
          todos.map((todo, index) => {
            return <TodoElement todoText={todo} key={index} handleDelete={() => deleteTodoAt(index)} />
          })
        }
        <div className="add-container">
          <button onClick={handleAdd} className="add-button">+</button>
          <input className="eingabefeld" type="text" value={newTodoText} onChange={handleChange} />
        </div>
      </div>
    </div>
  )
}

export default App
