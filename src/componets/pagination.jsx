import { useContext } from "react";
import { TodoContext } from "../provider";

export default () => {
  const {
    page,
    setPage
  } = useContext(TodoContext);

  function previousPage() {
    if (page > 1) setPage(page - 1);
  }


  return (
    <div>
      <button onClick={previousPage}>Previous</button>
      <span>{page}</span>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
