import { storageService } from "./storage.service";
import { utilService } from "./util.service";

const STORAGE_KEY_PLAYERS = "player_DB";
const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser";

const login = async (name, password) => {
  const players = await storageService.load(STORAGE_KEY_PLAYERS);
  const player = players.find(
    (player) => player.name === name && player.password === password
  );
  if (player) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(player));
  }
  return player;
};

const logout = () => {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
};

const signup = async (playerToAdd) => {
  const { name, email, password } = playerToAdd;

  const newPlayer = {
    _id: utilService.makeId(),
    name,
    email,
    password,
    friends: [],
    games: { pending: [], running: [], gameOver: [] },
  };

  const players = await storageService.load(STORAGE_KEY_PLAYERS);
  players.push(newPlayer);
  storageService.save(STORAGE_KEY_PLAYERS, players);
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(newPlayer));

  return newPlayer;
};

const getLoggedinUser = () => {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER));
};

export const authService = {
  login,
  logout,
  signup,
  getLoggedinUser,
};

// (async () => {
//   await signup({ name: "michal", email: "michal@gmail.com", password: "123" });
//   await signup({ name: "yaron", email: "yaron@gmail.com", password: "123" });
//   await signup({ name: "עופר", email: "ofer@gmail.com", password: "123" });
//   // await signup({ name: "גילי", email: "gili@gmail.com", password: "123" });
// })();
