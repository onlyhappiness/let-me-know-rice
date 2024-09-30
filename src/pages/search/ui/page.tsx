import FilterList from "@/entities/search/ui/filter-list";
import Icon from "@/shared/ui/icon";
import { Input } from "@/shared/ui/input";

const SearchPage = () => {
  return (
    <div>
      <header>
        <Input
          placeholder="Search"
          rightIcon={
            <button>
              <Icon name="Search" size={20} />
            </button>
          }
        />
      </header>

      <main className="my-3">
        <FilterList />
      </main>
    </div>
  );
};

export default SearchPage;
