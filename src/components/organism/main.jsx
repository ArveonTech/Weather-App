import FormSearch from "../molecules/formSearch";
import Card from "../molecules/card.jsx";
import { useState } from "react";

export default function MainElement() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  async function handleClick() {
    setError(false);
    setData(null);

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`);

      if (!response.ok) {
        setError(true);
        return;
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <main className="flex-1">
      <FormSearch onInput={setInputValue} click={handleClick} />
      <Card data={data} error={error} />
    </main>
  );
}
