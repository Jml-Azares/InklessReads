import Catalog from "./Catalogs";

function History() {
  return (
    <>
      <Catalog
        api="https://gutendex.com/books?search=history"
        catalog="History"
      />
    </>
  );
}

export default History;
