function App() {
  return (
    <>
      <div className="w-86 px-5 sm:w-full sm:max-w-xl mx-auto mt-20">
        <header>
          <h1 className="font-semibold text-3xl text-center border-b-2 pb-2">Weather App</h1>
        </header>
        <main>
          <input className="w-full mt-10 p-1.5 border rounded" name="city" type="search" placeholder="Search city" aria-label="Search for city weather" />
          <button className="block w-32 mx-auto mt-10 rounded-sm bg-sky-500 text-white font-medium">Search</button>
        </main>
        <footer>Nyx</footer>
      </div>
    </>
  );
}

export default App;
