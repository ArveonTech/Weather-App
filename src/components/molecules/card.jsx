export default function Card() {
  return (
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
  );
}
