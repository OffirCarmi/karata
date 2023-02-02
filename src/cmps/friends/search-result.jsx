import ResultList from "./result-list";

const SearchResult = ({ result, searchBy, onAddFriend }) => {
  return (
    <section className="result">
      {!searchBy && <p>מחכה שתגיד.י לי את מי לחפש</p>}
      {searchBy && !result.length && <p>לא נמצאו תוצאות</p>}
      {!!result.length && (
        <ResultList result={result} onAddFriend={onAddFriend} />
      )}
    </section>
  );
};

export default SearchResult;
