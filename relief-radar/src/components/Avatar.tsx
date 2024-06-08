import { IonAvatar } from "@ionic/react";
import avatarImage from "../assets/images/avatar1.jpg";

function HeaderAvatar() {
	return (
		<>
			<IonAvatar slot="end">
				<img alt="avatar" src={avatarImage} />
			</IonAvatar>
		</>
	);
}
export default HeaderAvatar;
