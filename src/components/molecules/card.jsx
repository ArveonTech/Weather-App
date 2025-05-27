export default function Card({ data, error }) {
  if (error) {
    return (
      <div className="w-full h-20 flex items-center justify-center mt-10 bg-red-700 text-white rounded-2xl">
        <h1>Kota tidak ditemukan</h1>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  function handleBg(cuaca) {
    switch (cuaca.toLowerCase()) {
      case "clear":
        return "bg-yellow-400";
      case "clouds":
        return "bg-gray-400";
      case "rain":
        return "bg-blue-600";
      case "drizzle":
        return "bg-blue-300";
      case "thunderstorm":
        return "bg-purple-700";
      case "snow":
        return "bg-white";
      case "mist":
      case "fog":
        return "bg-gray-200";
      default:
        return "bg-gray-100";
    }
  }

  return (
    <div className={`w-full ${handleBg(data.weather[0].main)} p-3 rounded-2xl mt-10 text-white`}>
      <header className="flex justify-between items-center border-b-2 pb-2">
        <p>
          <span className="font-bold text-2xl">{data.name}</span>
        </p>
        <img className="w-20" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon" />
      </header>
      <p className="mt-2">
        Suhu : <span className="font-bold">{data.main.temp}°C</span>
      </p>
      <p>
        Deskripsi : <span className="font-bold">{data.weather[0].main}</span>
      </p>
      <p>
        Kelembapan : <span className="font-bold">{data.main.humidity}%</span>
      </p>
      <p>
        Kecepatan angin : <span className="font-bold">{data.wind.speed} km/jam</span>
      </p>
    </div>
  );
}
