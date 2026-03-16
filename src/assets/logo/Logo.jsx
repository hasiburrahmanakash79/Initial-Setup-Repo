import logo from "./logo.svg";

const Logo = () => {
  return (
      <div className="flex items-center justify-center gap-x-4 px-8 py-5 mt-3">
        <img
          src={logo}
          alt=""
          className="w-2/3 select-none pointer-events-none"
        />
      </div>
  );
};

export default Logo;
