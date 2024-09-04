import Tile from "../Tile";

const TileList = ({ list }) => {
  return (
    <>
      {list?.map((item, index) => (
        <Tile
          key={index}
          text={item?.text}
          icon={item?.icon}
          value={item?.value}
        />
      ))}
    </>
  );
};

export default TileList;
