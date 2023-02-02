import { useEffect } from "react";
import { useState } from "react";
import { authService } from "../../services/auth.service";
import SearchResult from "./search-result";

const SearchFriends = ({ onAddFriend }) => {
  const [searchBy, setSearchBy] = useState("");
  const [result, setResult] = useState([]);

  const player = authService.getLoggedinUser();

  const onSearch = (e) => {
    if (e.target.value === "") setResult([]);
    setSearchBy(e.target.value);
  };

  useEffect(() => {
    if (searchBy) searchFriends();
  }, [searchBy]);

  const searchFriends = async () => {
    const res = await authService.searchFriends(searchBy, player._id);
    setResult(res);
  };

  return (
    <section className="search">
      <span>חיפוש חברים חדשים לפי כינוי</span>
      <input
        type="text"
        placeholder="את מי לחפש?"
        value={searchBy}
        onChange={(e) => onSearch(e)}
      />
      <SearchResult
        result={result}
        searchBy={searchBy}
        onAddFriend={onAddFriend}
      />
    </section>
  );
};

export default SearchFriends;
