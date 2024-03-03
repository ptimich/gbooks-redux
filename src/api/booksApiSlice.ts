import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book, BookApi, VolumesApiResponse } from "../types.ts";
import { bookMapper } from "../Books/utils.ts";

export const booksApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: " https://www.googleapis.com/books/v1/volumes",
  }),
  reducerPath: "booksApi",
  tagTypes: ["Books", "Book"],
  endpoints: (build) => ({
    getBooks: build.query<Book[], string>({
      query: (searchTerm: string) =>
        `?fields=items(id,volumeInfo(title,subtitle,imageLinks/thumbnail),searchInfo/textSnippet)&q=${searchTerm}`,
      transformResponse: (response: VolumesApiResponse) => {
        return response.items.map(bookMapper);
      },
      providesTags: (_result, _error, searchTerm) => {
        return [{ type: "Books", searchTerm }];
      },
    }),
    getBook: build.query<Book, string>({
      query: (id: string) =>
        `/${id}?fields=id,volumeInfo(title,subtitle,imageLinks/thumbnail),searchInfo/textSnippet`,
      transformResponse: (response: BookApi) => {
        return bookMapper(response);
      },
      providesTags: (_result, _error, id) => {
        return [{ type: "Book", id }];
      },
    }),
  }),
});

export const { useGetBooksQuery } = booksApiSlice;
