import FormSearch from "../molecules/formSearch";
import Card from "../molecules/card.jsx";
import { useState } from "react";

export default function MainElement() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [inputValue, setInputValue] = useState("");

  async function handleClick() {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex-1">
      <FormSearch onInput={setInputValue} click={handleClick} />
      <Card />
    </main>
  );
}
