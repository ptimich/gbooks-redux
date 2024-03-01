import { Book, BookApi } from "../types.ts";

const bookMapper = ({ id, volumeInfo, searchInfo }: BookApi): Book => {
  return {
    id,
    title: volumeInfo.title,
    subtitle: volumeInfo.subtitle,
    thumbnail: volumeInfo.imageLinks?.thumbnail,
    searchInfo: searchInfo?.textSnippet,
  };
};

export { bookMapper };
