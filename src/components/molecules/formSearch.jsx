import SearchInput from "../atoms/input";
import ButtonSearch from "../atoms/buttonSearch";

export default function FormSearch({ onInput, click }) {
  return (
    <div>
      <SearchInput onInput={onInput} />
      <ButtonSearch click={click} />
    </div>
  );
}
