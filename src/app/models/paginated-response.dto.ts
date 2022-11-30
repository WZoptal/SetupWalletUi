import {PageableDto} from './pageable.dto';
import {SortDto} from './sort.dto';

export interface PaginatedResponseDto<T> {
  content: T[];
  pageable: PageableDto;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: SortDto;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
