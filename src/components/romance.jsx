import Catalog from "./Catalogs";

function Romance() {
  return (
    <>
      <div style={{ marginBottom: "150px" }}>
        <Catalog
          api="https://gutendex.com/books/?page=2&topic=romance"
          catalog="Romance"
        />
      </div>
    </>
  );
}

export default Romance;
