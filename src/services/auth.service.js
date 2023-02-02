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
  console.log("signing up");
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

const getAllPlayersNames = async () => {
  const players = await storageService.load(STORAGE_KEY_PLAYERS);
  return players.map((player) => player.name);
};

const searchFriends = async (searchBy, playerId) => {
  const players = await storageService.load(STORAGE_KEY_PLAYERS);
  return players
    .filter(
      ({ _id, name }) =>
        name.toLowerCase().includes(searchBy.toLowerCase()) && _id !== playerId
    )
    .map(({ _id, name }) => ({ _id, name }));
};

const getPlayer = async (playerId) => {
  const players = await storageService.load(STORAGE_KEY_PLAYERS);
  return players.find((player) => player._id === playerId);
};

export const authService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getAllPlayersNames,
  searchFriends,
  getPlayer,
};

// (async () => {
//   await signup({ name: "michal", email: "michal@gmail.com", password: "123" });
//   await signup({ name: "dudi99", email: "dudi99@gmail.com", password: "123" });
//   await signup({ name: "עופר", email: "ofer@gmail.com", password: "123" });
//   await signup({ name: "K מאסטר", email: "masterK@gmail.com", password: "123" });
//   await signup({ name: "ran ran", email: "ranran@gmail.com", password: "123" });
//   await signup({ name: "alush", email: "alush@gmail.com", password: "123" });
//   await signup({ name: "BaLaGaN", email: "balagan@gmail.com", password: "123" });
//   await signup({ name: "AMY", email: "amy@gmail.com", password: "123" });
//   await signup({ name: "wawa wiwa", email: "wawi@gmail.com", password: "123" });
//   await signup({ name: "רירי", email: "riri@gmail.com", password: "123" });
//   await signup({ name: "A-exp", email: "aexp@gmail.com", password: "123" });
//   await signup({ name: "doWhat", email: "youwant@gmail.com", password: "123" });
//   await signup({ name: "2002abc", email: "a02@gmail.com", password: "123" });
//   await signup({ name: "taltul", email: "tal@gmail.com", password: "123" });
//   await signup({ name: "בילי", email: "bili@gmail.com", password: "123" });
// })();
