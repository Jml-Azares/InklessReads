import Catalog from "./Catalogs";

function Romance() {
  return (
    <>
      <Catalog
        api="https://gutendex.com/books/?page=2&topic=romance"
        catalog="Romance"
      />
    </>
  );
}

export default Romance;
