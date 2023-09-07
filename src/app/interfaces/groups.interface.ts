export interface IStudent {
  id: number,
  name: string,
  date: Date
}

export interface IGroup {
  id: number,
  number: string,
  students: IStudent[],
  dateOfCreation: Date
}
