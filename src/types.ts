interface BookApi {
  id: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
  searchInfo?: {
    textSnippet: string;
  };
}

interface Book {
  id: string;
  title: string;
  subtitle: string | undefined;
  thumbnail: string | undefined;
  searchInfo: string | undefined;
}

interface VolumesApiResponse {
  items: BookApi[];
}

// TEMP for mocked data
type searchTerm = "javascript" | "management";

export type { BookApi, Book, VolumesApiResponse, searchTerm };
