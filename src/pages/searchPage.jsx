import { observer } from "mobx-react";
import Store from "../store/moviesStore"

const SearchPage = observer(() => {
  return (
    <>
      <input type="text" placeholder="movie search" value={Store.setQuery.query} />
    </>
  );
})

export default SearchPage;
