import SwapiSearch from "./components/SwapiSearch";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <h1>SWAPI + Redux Thunk + TODO</h1>
      <SwapiSearch />
      <TodoList />
      <Footer />
    </div>
  );
}
