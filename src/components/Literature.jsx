import Catalog from "./Catalogs";

function Literature() {
  return (
    <>
      <div style={{ marginBottom: "150px" }}>
        <Catalog
          api="https://gutendex.com/books?search=literature"
          catalog="Literature"
        />
      </div>
    </>
  );
}

export default Literature;
