import { SearchInput } from "../SearchInput/SearchInput.tsx";
import { Outlet } from "react-router-dom";

function BookSearchLayout() {
  return (
    <div>
      <SearchInput />
      <Outlet />
    </div>
  );
}

export { BookSearchLayout };
