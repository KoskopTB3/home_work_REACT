import { Outlet } from "react-router";
import GoHomeButton from "../components/GoHomeButton";

function InfoLayout() {
	return (
		<div>
			<h2>Інформація</h2>
			<div>
				<Outlet/>
				<GoHomeButton/>
			</div>
		</div>
	  );
}

export default InfoLayout;