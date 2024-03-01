import managementBooksApi from "./mockedResponseManagement.ts";
import jsBooksApi from "./mockedResponseJs.ts";
import { bookMapper } from "../Books/utils.ts";
import { Book, searchTerm } from "../types.ts";

const jsBooks = jsBooksApi.items.map(bookMapper);
const managementBooks = managementBooksApi.items.map(bookMapper);

const bySearchTerm: Record<searchTerm, Book[]> = {
  javascript: jsBooks,
  management: managementBooks,
};

const byId = [...jsBooks, ...managementBooks].reduce(
  (acc, next) => ({ ...acc, [next.id]: next }),
  {} as Record<string, Book>,
);

function searchBooks(term: searchTerm) {
  return bySearchTerm[term];
}

function getBook(id: string) {
  return byId[id];
}

export { searchBooks, getBook };
