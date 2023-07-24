import Catalog from "./Catalogs";

function History() {
  return (
    <>
      <div style={{ marginBottom: "150px" }}>
        <Catalog
          api="https://gutendex.com/books?search=history"
          catalog="History"
        />
      </div>
    </>
  );
}

export default History;
