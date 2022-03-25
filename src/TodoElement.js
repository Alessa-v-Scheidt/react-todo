function TodoElement(props){

  // neue Variable "todoText"
  const { todoText, handleDelete } = props
  /*
  const todoText = props.todoText
  */

  return(
    <div className="todo-element">
      <button className="todo-button" onClick={handleDelete}/>
      <span className="todo-text">
        {todoText}
      </span>
    </div>
  )
}

export default TodoElement
