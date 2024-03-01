import "./App.css";
import { Header } from "./Header/Header.tsx";
import { BooksList } from "./Books/BooksList.tsx";

function App() {
  return (
    <main>
      <section className="app__header">
        <Header />
      </section>
      <section className="app__main">
        <BooksList />
      </section>
    </main>
  );
}

export default App;
