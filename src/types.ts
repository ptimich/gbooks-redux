interface BookApi {
  id: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    imageLinks?: {
      smallThumbnail: string;
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
  kind: string;
  totalItems: number;
  items: BookApi[];
}

export type { BookApi, Book, VolumesApiResponse };
