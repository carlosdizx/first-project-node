export class User {
  public static from(json: any) {
    return Object.assign(new User(), json);
  }
  public readonly id: string;
  public readonly name: string;
}
