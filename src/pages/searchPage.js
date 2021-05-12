import { observer } from "mobx-react";

const SearchPage = observer(() => {
  return (
    <>
      <input type="text" placeholder="movie search" value={query} />
    </>
  );
});

export default SearchPage;
