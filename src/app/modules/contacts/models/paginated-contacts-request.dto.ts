export interface PaginatedContactsRequestDto {
  pageNumber: number | undefined;
  size: number;
  sortBy: "handle" | "firstName" | "lastName" | undefined;
  ascending: boolean | undefined;
  searchKey: string | null | undefined;
  myContactsOnly: boolean | undefined;
}
