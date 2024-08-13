import "./findstoreButton.scss"

const FindStoreButton = ({ btn_text, OnClickSearch }) => {
  return (
    <button type="submit" className="yello_btn">
      <span className="button-content" onClick={OnClickSearch}>{btn_text} </span>
    </button>
  );
};
export default FindStoreButton;
