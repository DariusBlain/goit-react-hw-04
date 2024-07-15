import { RotatingTriangles } from "react-loader-spinner";

const Loader = () => {
  return (
    <RotatingTriangles
      visible={true}
      height="120"
      width="120"
      color="#4fa94d"
      ariaLabel="rotating-triangles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
