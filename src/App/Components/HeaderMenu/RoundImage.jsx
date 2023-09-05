import './styles.css';

export const RoundImage = ({ src, size }) => {
  //   const { src } = props;
  //   const src2 = props.src;

  //   console.log(src, src2, props.src);
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url(${src})`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></div>
  );
};
