function App() {
  return (
    <>
      <div className="w-86 px-5 sm:w-full sm:max-w-xl mx-auto mt-20">
        <header>
          <h1 className="font-semibold text-3xl text-center border-b-2 pb-2">Weather App</h1>
        </header>
        <main>
          <div>
            <input className="w-full mt-10 p-1.5 border rounded" name="city" type="search" placeholder="Search city" aria-label="Search for city weather" />
            <button className="block w-32 mx-auto mt-10 rounded-sm bg-sky-500 text-white font-medium">Search</button>
          </div>
          <div className="w-full bg-cyan-300 p-3 rounded-2xl mt-10">
            <header className="flex justify-between border-b-2 pb-2">
              <p>
                <span className="font-bold">Pekanbaru</span>
              </p>
              <p>Icon</p>
            </header>
            <p className="mt-2">
              Suhu : <span className="font-bold">28°C</span>
            </p>
            <p>
              Deskripsi : <span className="font-bold">Lorem ipsum dolor sit amet.</span>
            </p>
            <p>
              Kelembapan : <span className="font-bold">70%</span>
            </p>
            <p>
              Kecepatan angin : <span className="font-bold">5km/jam</span>
            </p>
          </div>
        </main>
      </div>
      <footer className="w-full absolute bottom-0">
        <h2 className="text-center h-10 font-semibold text-2xl">Created By : AshviaX</h2>
      </footer>
    </>
  );
}

export default App;
