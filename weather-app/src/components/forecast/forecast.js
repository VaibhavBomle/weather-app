import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import './forecast.css';

const forecast = ({ data }) => {
    const WEEK_DAYS = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
   console.log("=forecast=")
    const dayInWeek = new Date().getDay();
    console.log("dayInWeek :", dayInWeek)
    const forecastDays = WEEK_DAYS.splice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));
    console.log("forecastDays =>", forecastDays);

    return (
        <>
            <label className="title"> Daily </label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                                    <label className="day">{forecastDays[index]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)} °C / {" "}{Math.round(item.main.temp_min)} °C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humdity</label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels Like</label>
                                    <label>{item.main.feels_like}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Temp</label>
                                    <label>{item.main.temp}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Temp max</label>
                                    <label>{item.main.temp_max}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Temp min</label>
                                    <label>{item.main.temp_min}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all} %</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default forecast;