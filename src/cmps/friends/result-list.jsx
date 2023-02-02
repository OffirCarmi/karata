import { useState } from "react";
import ResultPreview from "./result-preview";

const ResultList = ({ result, onAddFriend }) => {
  // console.log(result);
  const [showMore, setShowMore] = useState(true);

  const renderResult = () => {
    if (result.length < 6)
      return result.map((res) => (
        <ResultPreview key={res._id} res={res} onAddFriend={onAddFriend} />
      ));
    else if (showMore) {
      return result.map((res) => (
        <ResultPreview key={res._id} res={res} onAddFriend={onAddFriend} />
      ));
    } else
      return result
        .slice(0, 5)
        .map((res) => (
          <ResultPreview key={res._id} res={res} onAddFriend={onAddFriend} />
        ));
  };

  return (
    <section
      className="result-list"
      style={{ display: result.length ? "" : "none" }}
    >
      {renderResult()}

      {/* {result.length < 6 &&
        result.map((res) => <ResultPreview key={res._id} res={res} />)} */}

      {/* {result.length > 5 && largeResult()} */}

      {/* {result.length > 5 && (
        <p className="toggle-show" onClick={setShowMore(true)}>
          תראה לי עוד
        </p>
      )} */}

      {/* {showMore &&
        result.map((res) => <ResultPreview key={res._id} res={res} />)} */}
      {/* {result.length > 5 && (
        <p className="toggle-show" onClick={setShowMore(true)}>
          תראה לי עוד
        </p>
      )} */}
      {/* {showMore && (
        <p className="toggle-show" onClick={setShowMore(false)}>
          תראה לי פחות
        </p>
      )} */}
    </section>
  );
  // return (
  //   <section
  //     className="result-list"
  //     style={{ display: result.length ? "" : "none" }}
  //   >
  //     {result.length < 6 &&
  //       result.map((res) => <ResultPreview key={res._id} res={res} />)}

  //     {result.length > 5 &&
  //       result
  //         .slice(0, 5)
  //         .map((res) => <ResultPreview key={res._id} res={res} />)}
  //     {/* {result.length > 5 && (
  //       <p className="toggle-show" onClick={setShowMore(true)}>
  //         תראה לי עוד
  //       </p>
  //     )} */}

  //     {showMore &&
  //       result.map((res) => <ResultPreview key={res._id} res={res} />)}
  //     {/* {showMore && (
  //       <p className="toggle-show" onClick={setShowMore(false)}>
  //         תראה לי פחות
  //       </p>
  //     )} */}
  //   </section>
  // );
};

export default ResultList;

// result.slice(0, 5).map((res) => <ResultPreview key={res._id} res={res} />) && (
//   <p className="toggle-show" onClick={setShowMore(true)}>
//     תראה לי עוד
//   </p>
// );
