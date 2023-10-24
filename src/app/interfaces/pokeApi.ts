export interface Response{
  count: number;
  next: string;
  previus: string;
  results: Results[];
}

export interface Results{
  name: string;
  url: string;
}
