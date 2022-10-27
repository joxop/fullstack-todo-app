
function App() {
  return (
    <div className="App">
      <h1>Welcome, Jay</h1>
      <h4>Your Tasks</h4>

      <div className="todos">
        <div className="todo">
        <div className="checkbox"></div>

        <div className="text"> My First Task</div>


          <div className="delete-todo">x</div>
          </div>

          <div className="todo is-complete">
            <div className="checkbox"></div>

            <div className="text">My Second Task"</div>
          <div className="delete-todo">x</div>
          </div>
          </div>
    </div>
  );
}

export default App;
