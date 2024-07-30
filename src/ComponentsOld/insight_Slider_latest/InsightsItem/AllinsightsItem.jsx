import Image from "next/image";
const AllLaminatesItem = ({ image, alt, sale, text }) => {
  return (
    <div className="allLaminatesItem">
      <Image src={image} alt={alt} />
      <div className="LaminateTextOuter">
        <p className="LaminateText">{text}</p>
      </div>
      {sale && <div className="sale">Sale</div>}
    </div>
  );
};
export default AllLaminatesItem;
