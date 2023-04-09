import AtomRect from "./AtomRect";

const Atom = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <svg
        id="atom"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <>{children}</>
      </svg>
    </>
  );
};
export default Atom;

const SplashAtomGrid = () => {
  return (
    <div className="SplashAtomGrid">
      <AtomRect />
      <AtomRect />
      <AtomRect />
    </div>
  );
};

export const AtomTestbox = () => {
  return (
    <div className="AtomTestBox AtomTestBox-1">
      <SplashAtomGrid />
    </div>
  );
};
