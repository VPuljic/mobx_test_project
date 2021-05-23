import { observer } from "mobx-react";
import Store from "../store/moviesStore"

const SearchPage = observer(() => {
  
  const onChange = (e) => {
    const query = e.target.value;
    Store.setQuery(query);
  }
  return (
    <>
      <input type="text" placeholder="movie search" value={value} onChange={onChange} />
    </>
  );
})

export default SearchPage;
