import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "28px",
        marginTop: "20px",
      }}
    >
      <button onClick={() => router.push("/index")}>Home</button>
      <button onClick={() => router.push("/blog")}>Blog</button>
      <button onClick={() => router.push("/contact")}>Contact</button>
    </div>
  );
};

export default Navbar;
