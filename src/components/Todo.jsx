import Button from './Button'

const Todo = ({ todo, del, complete }) => {
    const handleKeyPress = (event) => {
        if (event.key === "Backspace") {
          del(todo.id);
        }
        if (event.key === "Enter") {
            complete(todo.id);
        }
    };

    return (
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : "" ,
        color: todo.isCompleted ? "green" : "" }}
            tabIndex={0}
            onKeyDown={handleKeyPress}
        >
            <div className="content">
                <h3>{todo.text}</h3>
                <p className="category">{todo.category}</p>
            </div>
            <div>
            <Button del={del} complete={complete} todo={todo} />
            </div>
        </div>
    );
};

export default Todo;
