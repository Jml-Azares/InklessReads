import Catalog from "./Catalogs";

function Literature() {
  return (
    <>
      <Catalog
        api="https://gutendex.com/books?search=literature"
        catalog="Literature"
      />
    </>
  );
}

export default Literature;
