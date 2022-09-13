import { User } from "./src/model/User";
import { UserData } from "./src/model/UserData";

const mapThat = ({...domain}, {...data}) => {
  Object.keys(domain).forEach((key) => {
    if (typeof domain[key] === "object") {
      mapThat(domain[key], data);
    } else {
      data[key.toLowerCase()] = domain[key];
    }
  });
  return data;
};

const user: User = new User("1", "carlos");
const userData: UserData = new UserData("2", "ernesto");

console.log(user);
console.log(userData);

const dest = mapThat(user, userData);
console.log(dest);
console.log(userData);
