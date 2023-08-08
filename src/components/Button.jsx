import Todo from "./Todo";

function Button ({ del, todo, complete }) {

    return(
        <div className="buttons">
              <button className="complete" onClick={() => complete(todo.id)}>Complete</button>
              <button className="remove" onClick={() => del(todo.id)}>Del</button>
        </div>
    );
};

export default Button;