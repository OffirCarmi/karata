import IAdd from "../../assets/icons/i-add";

const ResultPreview = ({ res, onAddFriend }) => {
  return (
    <article className="result-preview">
      <IAdd action={onAddFriend} data={res._id}/>
      <h4 onClick={() => onAddFriend(res._id)}>{res.name}</h4>
    </article>
  );
};

export default ResultPreview;
