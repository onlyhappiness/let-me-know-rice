import Banner from "@/entities/home/ui/banner";
import OptionFilter from "@/entities/home/ui/option-filter";
import Icon from "@/shared/ui/icon";
import { Input } from "@/shared/ui/input";

const HomePage = () => {
  return (
    <div>
      <header>
        <Input
          placeholder="Search"
          rightIcon={
            <button className="pl-2">
              <Icon name="Search" size={20} />
            </button>
          }
        />
      </header>

      <OptionFilter />

      <Banner />

      <main></main>
    </div>
  );
};

export default HomePage;
