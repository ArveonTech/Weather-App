export default function ButtonSearch({ click }) {
  return (
    <button className="block w-32 mx-auto mt-10 rounded-2xl p-2 bg-sky-500 text-white font-medium" onClick={() => click()}>
      Search
    </button>
  );
}
