import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout.tsx";
import { BookDetails } from "./Books/BookDetails.tsx";
import { BookSearchLayout } from "./Books/BookSearchLayout.tsx";
import { BooksList } from "./Books/BooksList.tsx";
import { FavoriteBooksList } from "./Favorites/FavoriteBooksList.tsx";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/books" />} />
          <Route path="books" element={<BookSearchLayout />}>
            <Route path=":searchTerm" element={<BooksList />} />
          </Route>
          <Route path="books/:searchTerm/:id" element={<BookDetails />} />
          <Route path="favorites" element={<FavoriteBooksList />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
