import {
	IonContent,
	IonPage,
	IonHeader,
	IonToolbar,
	IonMenuButton,
	IonButton,
	IonButtons,
	IonIcon,
	IonTitle,
	IonBadge,
	IonLabel,
	IonSegment,
	IonSegmentButton,
	IonSelectOption,
	IonSelect,
} from "@ionic/react";

import menuIcon from "../../assets/icons/menu.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import locationIcon from "../../assets/icons/location.svg";
import { chevronDown } from "ionicons/icons";

import ChatBotButton from "../../components/Buttons/Ai_bot";
import HeaderAvatar from "../../components/Avatar";
import DisasterCard from "../../components/Disaster_card/ongoing_disaster_card/DisasterCard";

import getImageFromString from "../../modules/weather/weather";
import { FormattedMessage } from "react-intl";

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

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

type location = {
	name: string;
	lon: string;
	lat: string;
};

interface ContainerProps {
	locale: string;
}

const HomePage: React.FC<ContainerProps> = (locale) => {
	const DisasterData: JsonObject[] = [
		{
			type: "Flood",
			location: "Buea, Cameroon",
			distanceAway: "10 km",
			time: "14:20",
			date: "May 12 2024",
			magnitude: 7.2,
			magnitudeScale: "Richter",
			scale: 3,
			mapViewPoint: "../images/DMS_sample.png",
		},
		{
			type: "Earthquake",
			location: "Tokyo, Japan",
			distanceAway: "15 km",
			time: "20:30",
			date: "Feb 20 2025",
			magnitude: 6.8,
			magnitudeScale: "Richter",
			scale: 4,
			mapViewPoint: "../images/GoogleMap_3.webp",
		},
		{
			type: "Fire",
			location: "Sydney, Australia",
			distanceAway: "20 km",
			time: "10:41",
			date: "Jan 01 2026",
			magnitude: 5.5,
			magnitudeScale: "Richter",
			scale: 2,
			mapViewPoint: "../images/GoogleMap.webp",
		},
	];

	const defaultWeatherValue = {
		coord: {
			lon: 0,
			lat: 0,
		},
		weather: [
			{
				id: 0,
				main: "",
				description: "",
				icon: "",
			},
		],
		base: "",
		main: {
			temp: 0,
			feels_like: 0,
			temp_min: 0,
			temp_max: 0,
			pressure: 0,
			humidity: 0,
			sea_level: 0,
			grnd_level: 0,
		},
		visibility: 0,
		wind: {
			speed: 0,
			deg: 0,
			gust: 0,
		},
		rain: {
			"1h": 0,
		},
		clouds: {
			all: 0,
		},
		dt: 0,
		sys: {
			country: "",
			sunrise: 0,
			sunset: 0,
		},
		timezone: 0,
		id: 0,
		name: "",
		cod: 0,
	};

	var preferedLocations: location[] = [
		{
			name: "Buea, Cameroon",
			lat: "4.1623",
			lon: "9.2588",
		},
		{
			name: "Yaounde, Cameroon",
			lat: "3.8617",
			lon: "11.5202",
		},
		{
			name: "Kumba, Cameroon",
			lat: "4.6333",
			lon: "9.4450",
		},
		{
			name: "Massachusetts, US",
			lat: "42.360001",
			lon: "-71.092003",
		},
		{
			name: "Nkongsamba, Cameroon",
			lat: "4.9741",
			lon: "9.9353",
		},
	];

	const [currentSegment, setCurrentSegment] = useState<string>("ongoing");
	const [greetingText, setGreetingText] = useState<string>("Hello");
	const [weatherData, setWeatherData] = useState(defaultWeatherValue);
	const [currentLocation, setCurrentLocation] = useState(0);
	const navigate = useHistory();

	const handleChangeLocation = (e: CustomEvent) => {
		setCurrentLocation(e.detail.value);
		localStorage.setItem("currentLocation", JSON.stringify(e.detail.value));
	};

	function handleSegment(event: CustomEvent) {
		setCurrentSegment(event.detail.value);
		console.log(event.detail.value);
	}

	function setUpLocation() {
		setCurrentLocation(
			localStorage.getItem("currentLocation")
				? JSON.parse(localStorage.getItem("currentLocation")!)
				: 0
		);
	}

	function getLocalDateTime(dt: number, timezone: number) {
		const utc_milliseconds = (dt + timezone) * 1000;
		const local_date = new Date(utc_milliseconds);
		const options: Intl.DateTimeFormatOptions = {
			weekday: "long",
			day: "2-digit",
			month: "long",
		};
		const formattedDate = local_date.toLocaleDateString(locale.locale, options);
		return formattedDate;
	}

	function navigateToWeatherDetail() {
		navigate.push('/tabs/home/weatherdetail')
	}

	useEffect(() => {
		setUpLocation();
		setWeatherData(JSON.parse(localStorage.getItem("current_weather")!));
		const fetchWeatherData = async (location: location, lang: string) => {
			const apiKey = "17c0ca1503c9a82af4b6be08659549df";
			let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&lang=${lang}`;

			if (lang == "en" || lang == "") {
				url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`;
			}

			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				localStorage.setItem("current_weather", JSON.stringify(data));
			} catch (error) {
				console.error("Error:", error);
			}
			setWeatherData(JSON.parse(localStorage.getItem("current_weather")!));
		};

		fetchWeatherData(
			preferedLocations[currentLocation],
			locale.locale.slice(0, 2)
		);

		const intervalId = setInterval(() => {
			fetchWeatherData(
				preferedLocations[currentLocation],
				locale.locale.slice(0, 2)
			);
		}, 20 * 60 * 1000); // Fetches every 10 minutes
		return () => clearInterval(intervalId);
	}, [locale.locale, currentLocation]);

	const greeting = ["Hello", "Hi", "Hey"];

	useEffect(() => {
		setGreetingText(greeting[Math.floor(Math.random() * 4)]);
	}, []);

	return (
		<IonPage>
			<IonHeader class="ion-no-border">
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton>
							<IonIcon src={menuIcon}></IonIcon>
						</IonMenuButton>
					</IonButtons>
					<IonTitle>Dashboard</IonTitle>
					<IonButtons slot="end" className="notification">
						<IonButton>
							<IonIcon src={notificationIcon}></IonIcon>
							<IonBadge class="dot-badge">.</IonBadge>
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className="home-content">
					<div className="dashboard-header-row">
						<div className="avatar-section">
							<HeaderAvatar />
						</div>
						<div className="welcome-location">
							<span className="salutation">
								<FormattedMessage id={greetingText} />,{" "}
								<IonLabel>Alexander</IonLabel>
							</span>
							<div className="location-changer">
								<div className="location-icon">
									<IonIcon src={locationIcon} />
								</div>
								<div>
									<span className="your-location">Your Location</span>
									<IonSelect
										aria-label="Location"
										value={currentLocation}
										toggleIcon={chevronDown}
										mode="md"
										onIonChange={handleChangeLocation}>
										{preferedLocations.map((location, index) => (
											<IonSelectOption key={index} value={index}>
												{location.name}
											</IonSelectOption>
										))}
									</IonSelect>
								</div>
							</div>
						</div>
					</div>

					<div className="weather-section" onClick={navigateToWeatherDetail}>
						<div className="weather-illustrator">
							<div className="weather-detail">
								<div className="date">
									{getLocalDateTime(weatherData.dt, weatherData.timezone)}
								</div>
								<div className="location">
									<IonIcon src={locationIcon}></IonIcon>
									<IonLabel>{weatherData.name}</IonLabel>
								</div>
								<div className="temperature">
									{Math.round(weatherData.main.temp - 273)}&deg;<span>C</span>
								</div>
							</div>
							<div className="weather-image">
								<img
									src={
										"Dynamic_assets/weather_resource/" +
										weatherData.weather[0].icon +
										".png"
									}
									alt="icon"
								/>
								<div className="weather-status">
									{weatherData.weather[0].description}
								</div>
							</div>
						</div>
					</div>

					<div className="disaster_alert_info">
						<IonSegment
							onIonChange={handleSegment}
							value={currentSegment}
							mode="md">
							<IonSegmentButton value="ongoing">
								<IonLabel>
									<FormattedMessage id="ongoing" />
								</IonLabel>
							</IonSegmentButton>
							<IonSegmentButton value="potential">
								<IonLabel>
									<FormattedMessage id="forecast" />
								</IonLabel>
							</IonSegmentButton>
						</IonSegment>
						{currentSegment === "ongoing" && (
							<div className="segment-container">
								<DisasterCard data={DisasterData[0]} />
							</div>
						)}
						{currentSegment === "potential" && (
							<div className="segment-container">
								<DisasterCard data={DisasterData[1]} />
								<DisasterCard data={DisasterData[2]} />
							</div>
						)}
					</div>
				</div>
				<ChatBotButton />
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
