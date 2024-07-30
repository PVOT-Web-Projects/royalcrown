import Image from "next/image";
const AllLaminatesItem = ({ image, alt, sale }) => {
  return (
    <div className="allLaminatesItem">
      <Image src={image} alt={alt} />
      {sale && <div className="sale">Sale</div>}
    </div>
  );
};
export default AllLaminatesItem;
