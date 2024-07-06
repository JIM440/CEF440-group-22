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
  useIonRouter,
} from "@ionic/react";

import menuIcon from "../../../assets/icons/menu.svg";
import locationIcon from "../../../assets/icons/location.svg";
import { chevronDown } from "ionicons/icons";

import ChatBotButton from "../../../components/Buttons/Ai_bot";
import HeaderAvatar from "../../../components/Avatar";
import DisasterCard from "../../../components/Disaster_card/ongoing_disaster_card/DisasterCard";

import {
  errorWeatherValue,
  preferedLocations,
  getLocalDateTime,
  setUpLocation,
  fetchWeatherData,
} from "../../../modules/weather/weather";

import { FormattedMessage } from "react-intl";

import React, { useState, useEffect, useRef } from "react";
import AlertIcon from "../components/Alerts";

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

  const [currentSegment, setCurrentSegment] = useState<string>("ongoing");

  const [greetingText, setGreetingText] = useState<string>("Hello");
  const [weatherData, setWeatherData] = useState(errorWeatherValue);
  const [currentLocation, setCurrentLocation] = useState(0);

  const greeting = ["Hello", "Hi", "Hey"];

  const handleChangeLocation = (e: CustomEvent) => {
    setCurrentLocation(e.detail.value);
    localStorage.setItem("currentLocation", JSON.stringify(e.detail.value));
  };

  const customAlertOptions = {
    header: "Pick a location",
  };

  function handleSegment(event: CustomEvent) {
    setCurrentSegment(event.detail.value);
  }

  useEffect(() => {
    setGreetingText(greeting[Math.floor(Math.random() * 4)]);
  }, []);

  useEffect(() => {
    setUpLocation(setCurrentLocation);
    setWeatherData(JSON.parse(localStorage.getItem("current_weather")!));
    fetchWeatherData(
      preferedLocations[currentLocation],
      locale.locale.slice(0, 2),
      setWeatherData
    );

    const intervalId = setInterval(() => {
      fetchWeatherData(
        preferedLocations[currentLocation],
        locale.locale.slice(0, 2),
        setWeatherData
      );
    }, 15 * 60 * 1000); // Fetches every 15 minutes
    return () => clearInterval(intervalId);
  }, [locale.locale, currentLocation]);
  const router = useIonRouter();

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
          <AlertIcon />
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
                    interfaceOptions={customAlertOptions}
                    aria-label="Location"
                    value={currentLocation}
                    toggleIcon={chevronDown}
                    mode="md"
                    onIonChange={handleChangeLocation}
                  >
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

          <div
            className="weather-section"
            onClick={() => {
              router.push("/weather/detail");
            }}
          >
            <div className="weather-illustrator">
              <div className="weather-detail">
                <div className="date">
                  {getLocalDateTime(
                    weatherData.dt,
                    weatherData.timezone,
                    locale.locale
                  )}
                </div>
                <div className="location">
                  <IonIcon src={locationIcon}></IonIcon>
                  <IonLabel className="truncate-weather-location">
                    {weatherData.name}
                  </IonLabel>
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
              swipeGesture={true}
              mode="md"
            >
              <div></div>
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
              <div className="segment-container animate-swipe-right">
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
