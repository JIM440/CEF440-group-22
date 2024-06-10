import { IonAvatar, useIonRouter } from "@ionic/react";
import avatarImage from "../assets/images/avatar1.jpg";

function HeaderAvatar() {
	const router = useIonRouter()
	return (
		<>
			<IonAvatar slot="end" onClick={()=>{
				router.push('/menu/profile')
			}}>
				<img alt="avatar" src={avatarImage} />
			</IonAvatar>
		</>
	);
}
export default HeaderAvatar;
