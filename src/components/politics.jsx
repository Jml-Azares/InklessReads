import Catalog from "./Catalogs";

function Politics() {
  return (
    <>
      <Catalog
        api="https://gutendex.com/books/?page=2&topic=politics"
        catalog="Politics"
      />
    </>
  );
}

export default Politics;
