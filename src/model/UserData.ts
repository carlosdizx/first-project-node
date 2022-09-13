export class UserData {
  public static from(json: any) {
    return Object.assign(new UserData(), json);
  }
  public id: string;
  public name: string;
}
