import FormSearch from "../molecules/formSearch";
import Card from "../molecules/card.jsx";

export default function MainElement() {
  return (
    <main className="flex-1">
      <FormSearch />
      <Card />
    </main>
  );
}
