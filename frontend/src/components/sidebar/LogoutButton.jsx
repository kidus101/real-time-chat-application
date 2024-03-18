import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <BiLogOut className="w-8  h-8 text-black cursor-pointer" />
      {/* <span className="loading loading-spinner"></span> */}
    </div>
  );
};
export default LogoutButton;
