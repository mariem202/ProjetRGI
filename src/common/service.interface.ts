export interface IService<T> {
  getAll(): Promise<T[]>;
  findByUsername(username: string): Promise<T | undefined>;

}
