export type TodoItem = {
  id: string;
  name: string;
  createDate: string;
  status: TodoStatus;
};

export enum TodoStatus {
  Active = 1,
  Completed = 2,
}
