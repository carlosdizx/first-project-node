import { User } from "./src/model/User";
import { UserData } from "./src/model/UserData";

const mapThat = ({ ...domain }, { ...data }) => {
  Object.keys(domain).forEach((key) => {
    if (typeof domain[key] === "object") {
      mapThat(domain[key], data);
    } else {
      data[key.toLowerCase()] = domain[key];
    }
  });
  return data;
};

const user: User = User.from({ id: "1", name: "Carlos" });
const userData: UserData = UserData.from(user);
const userData2: UserData = new UserData();
userData2.name = "Lol";

console.log(user);
console.log(userData);
console.log(userData2);

userData.name = "xdxdxd";

console.log(userData);

console.log(user, "------");
