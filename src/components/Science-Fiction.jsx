import Catalog from "./Catalogs";

function ScienceFiction() {
  return (
    <>
      <div style={{ marginBottom: "100px" }}>
        <Catalog
          api="https://gutendex.com/books?search=science%20fiction"
          catalog="ScienceFiction"
        />
      </div>
    </>
  );
}

export default ScienceFiction;
