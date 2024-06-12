import React from 'react'
import './WeatherDetail.css'
import { IonPage, IonContent, IonIcon } from '@ionic/react'

import rain from '../../assets/icons/Rain.svg'
import wind from '../../assets/icons/Wind.svg'
import humidity from '../../assets/icons/humidity.svg'


function WeatherDetailPage() {
    const testdata: object = JSON.parse(localStorage.getItem("current_weather")!);
  return (
   <IonPage>
		
          <IonContent>
              <div className="top-blue-section">
                  <div className="place-detail">
                      Buea, Molyko
                  </div>
                  <div className="date-details">
                      Today, 10 June 2024
                  </div>
                 	<div className="weather-image">
								<img
									src={
										"Dynamic_assets/weather_resource/" +
										testdata.weather[0].icon +
										".png"
									}
									alt="icon"
								/>
							</div>
                  <div className="temperature-detail">
                     <div className="temperature">
									{Math.round(testdata.main.temp - 273)}&deg;<span>C</span>
								</div>
                      <div className="temp-short-description">
                          {testdata.weather[0].description}
                      </div>
                  </div>
                  <div className="other-climate-details">
                      <div className="weather-details">
                          <IonIcon src={wind} className='icon'/>
                          <div className="actual-value">
                              35 km/h
                          </div>
                          <div className="weather-type">
                              wind Speed
                          </div>
                      </div>
                      <div className="weather-details">
                          <IonIcon className={humidity}  />
                          <div className="actual-value">
                              60%
                          </div>
                          <div className="weather-type">
                              Humidity
                          </div>
                      </div>
                      <div className="weather-details">
                          <IonIcon src={rain} className='icon' />
                          <div className="actual-value">
                              0%
                          </div>
                          <div className="weather-type">
                              Precipitation
                          </div>
                      </div>
                  </div>
              </div>
		
              <div className="time-icon-part">
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
                  <div className="time-icon">
                      <IonIcon src={rain} className='icon' />
                      11:00
                  </div>
            </div>
		</IonContent>
	</IonPage>
  )
}

export default WeatherDetailPage
