import { authService } from "./auth.service";
import { storageService } from "./storage.service";

const STORAGE_KEY_PLAYERS = "player_DB";

const addFriend = async (friendId) => {
  const player = authService.getLoggedinUser();
  // console.log("found user", player);
  if (player.friends.length >= 10) return;
  else {
    const newFriend = await authService.getPlayer(friendId);
    console.log("newFriend", newFriend);

    if (newFriend) {
      const { _id, name } = newFriend;
      player.friends.push({ _id, name });
    }
  }

  return await _savePlayer(player);
};

const _savePlayer = async (player) => {
  const players = await storageService.load(STORAGE_KEY_PLAYERS);
  console.log("all players", players);
  const playerIdx = players.findIndex(
    (currPlayer) => currPlayer._id === player._id
  );
  console.log("player idx", playerIdx);
  if (playerIdx) players[playerIdx] = player;
  console.log("players after update", players);
  storageService.save(STORAGE_KEY_PLAYERS, players);
  // console.log("updated user", player);
  return player;
};

export const playerService = {
  addFriend,
};
