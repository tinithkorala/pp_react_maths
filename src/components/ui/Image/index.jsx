import { useCallback } from "react";

const Container = ({ classes, src, onClick, style, alt = "" }) => {
  const backupContainerClick = useCallback(() => {
    console.log("Container clicked");
  }, []);

  return (
    <img
      className={classes}
      style={style}
      loading="lazy"
      alt={alt}
      src={src}
      onClick={onClick || backupContainerClick}
    />
  );
};

export default Container;
