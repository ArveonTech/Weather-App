export default function SearchInput({ onInput }) {
  return <input className="w-full mt-10 p-1.5 border rounded" name="kota" type="search" placeholder="Search kota" aria-label="Mencari cuaca berdasarkan nama kota" onChange={(e) => onInput(e.target.value)} />;
}
