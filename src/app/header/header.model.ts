export class Search {
  description: string;
  grade: number;
  id: number;
  image: string;
  name: string;
  price: number;
  volume: number;
}


export class SearchResponse {
    code: number;
    results: SearchData[]
}

export class SearchData {
    books: Search[];
    headline : string;
}