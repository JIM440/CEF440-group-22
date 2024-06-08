import React, { useEffect } from "react";
import {
	IonFab,
	IonFabButton,
	IonIcon,
	IonLabel,
	IonButton,
} from "@ionic/react";

import measureIcon from "../../../assets/icons/GisMeasure.svg";
import earthquakeIcon from "../../../assets/icons/earthquake.svg";
import fireIcon from "../../../assets/icons/fire.svg";
import floodIcon from "../../../assets/icons/flood.svg";
import hurricaneIcon from "../../../assets/icons/hurricane.svg";
import landSlideIcon from "../../../assets/icons/landslide.svg";
import volcanoIcon from "../../../assets/icons/volcano.svg";
import locationIcon from "../../../assets/icons/location.svg";
import { timeOutline} from "ionicons/icons";
import map from "../../../assets/images/DMS_sample.png";

import "./disasterCard.css";

import { FormattedMessage } from "react-intl";

type JsonObject = {
	type: string;
	location: string;
	distanceAway: string;
	time: string;
	date: string;
	magnitude: number;
	magnitudeScale: string;
	scale: number;
	mapViewPoint: string;
};

interface ContainerProps {
	data: JsonObject;
}

const DisasterCard: React.FC<ContainerProps> = ({ data }) => {
	const {
		type,
		location,
		distanceAway,
		time,
		date,
		magnitude,
		magnitudeScale,
		scale,
		mapViewPoint,
	} = data;

	let DisasterIcon:string;

	function IconDeterminer():string{
		switch (type) {
			case "Earthquake":
				DisasterIcon = earthquakeIcon;
				break;
			case "Fire":
				DisasterIcon = fireIcon;
				break;
			case "Flood":
				DisasterIcon = floodIcon;
				break;
			case "Hurricane":
				DisasterIcon = hurricaneIcon;
				break;
			case "Landslide":
				DisasterIcon = landSlideIcon;
				break;
			case "Volcano":
				DisasterIcon = volcanoIcon;
				break;
		}
		return DisasterIcon;
	};

	return (
		<div>
			<div className="disaster-card">
				<div className="disaster-map-point">
					<img src={map} alt="maps" />
				</div>
				<div className="brief-disaster-info">
					<div className="info-division">
						<IonIcon src={timeOutline} className="time"></IonIcon>
						<span className="value">{time}</span>
						<span className="data-type">{date}</span>
					</div>
					<div className="info-division">
						<IonIcon src={IconDeterminer()} className="intensity"></IonIcon>
						<span className="value">
							{magnitude.toString()}&nbsp;
							{magnitudeScale}
						</span>
						<span className="data-type">Magnitude</span>
					</div>
					<div className="info-division">
						<IonIcon src={measureIcon} className="distance"></IonIcon>
						<span className="value">{scale.toString()}km</span>
						<span className="data-type">Scale</span>
					</div>
				</div>
				<div className="disaster-type-location">
					<div className="disaster-type">
						<IonIcon src={IconDeterminer()}></IonIcon>
						<IonLabel><FormattedMessage id={type}/></IonLabel>
					</div>
					<div className="disaster-location">
						<IonIcon src={locationIcon}></IonIcon>
						<IonLabel>{location}</IonLabel>
					</div>
					<div className="disaster-distance-away">
						<IonLabel>{distanceAway} away from you</IonLabel>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DisasterCard;
