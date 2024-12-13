import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Header = ({ darkTheme, toggleDarkTheme }) => {
	return (
		<header className="text-xl text-gray-300 flex justify-between mb-2">
			<span className="font-extrabold text-2xl">JUST-DO-IT</span>

			<div
				onClick={toggleDarkTheme}
				className="cursor-pointer hover:text-gray-400"
			>
				{darkTheme ? (
					<>
						<BsFillSunFill />
					</>
				) : (
					<>
						<BsFillMoonFill />
					</>
				)}
			</div>
		</header>
	);
};
export default Header;
