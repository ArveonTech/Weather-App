import FooterElement from "../organism/footer";
import HeaderElement from "../organism/header";
import MainElement from "../organism/main";

export default function LayoutHome() {
  return (
    <div className="w-86 px-5 sm:w-full sm:max-w-xl mx-auto pt-20 min-h-screen flex flex-col">
      <HeaderElement />
      <MainElement />
      <FooterElement />
    </div>
  );
}
