import imagenHome from "../../../assets/home/desktop/image-hero.jpg";

const Home = () => {
  return (
    <div>
      <img
        src={imagenHome}
        style={{
          maxWidth: "50%",
          maxHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </div>
  );
};
export default Home;
