import Catalog from "./Catalogs";

function ScienceFiction() {
  return (
    <>
      <Catalog
        api="https://gutendex.com/books?search=science%20fiction"
        catalog="ScienceFiction"
      />
    </>
  );
}

export default ScienceFiction;
