import Catalog from "./Catalogs";

function Politics() {
  return (
    <>
      <div style={{ marginBottom: "150px" }}>
        <Catalog
          api="https://gutendex.com/books/?page=2&topic=politics"
          catalog="Politics"
        />
      </div>
    </>
  );
}

export default Politics;
