import { ResponseDto } from "../response-dto";

export interface BookResponseDto extends ResponseDto {
    name: string;
    price: number,
    author: string,
    genre: string,
    publicationYear: number,
    isbn: string,
    language: string,
    rating: number
}