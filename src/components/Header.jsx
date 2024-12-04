import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Header = () => {
	return (
		<header className="text-xl text-gray-300 flex justify-between mb-2">
			<span className="font-extrabold text-2xl">TODO</span>
			<BsFillSunFill />
            {/* <BsFillMoonFill /> */}
		</header>
	);
};
export default Header;
