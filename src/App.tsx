import "./App.css";
import { BooksList } from "./Books/BooksList.tsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout.tsx";
import { BookDetails } from "./Books/BookDetails.tsx";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/search" />} />
          <Route path="search" element={<BooksList />} />
          <Route path="details/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
