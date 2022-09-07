import { useContext } from "react";
import { TodoContext } from "../provider";

export default () => {
  const {
    page,
    setPage
  } = useContext(TodoContext);

  function PreviousPage() {
    if (page > 1) setPage(page - 1);
  }

  function nextPage() {
    if (page > 1) setPage(page - 1);
  }

  return (
    <div>
      <button>1</button>
      <button>Previous</button>
      <button>{page}</button>
      <button>Next</button>
    </div>
  );
}