import React from "react";
import "./Faq.css";

function Faq() {
  return (
    <div className="py-5">
      <h1 className="text-center pb-4">Frequently Ask Questions</h1>
      <div
        className="accordion accordion-flush mx-auto ink-acc"
        id="ink-accordion"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acc-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h4>How do I create an account on Inkless Reads?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#ink-accordion"
          >
            <div className="accordion-body acc-body">
              To create an account on Inkless Reads, click on the "Sign Up"
              button located at the top right corner of the page. Fill in the
              required information, including your name, email address, and
              password. Once submitted, you will receive a confirmation email to
              verify your account.
            </div>
          </div>
        </div>
        <br />
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acc-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h4>How can I purchase an ebook?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#ink-accordion"
          >
            <div className="accordion-body acc-body">
              To purchase an ebook, browse through our collection and click on
              the desired book. On the book's page, you will find a "Buy Now"
              button. Clicking on it will take you to the checkout page where
              you can complete the purchase by providing your payment
              information. Once the transaction is successful, you will have
              access to download the ebook.
            </div>
          </div>
        </div>
        <br />
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acc-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h4>Can I access my purchased ebooks on multiple devices?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#ink-accordion"
          >
            <div className="accordion-body acc-body">
              Yes, you can access your purchased ebooks on multiple devices.
              Simply log in to your Inkless Reads account on the device you wish
              to use and navigate to your library. You will find all your
              purchased ebooks available for download and reading.
            </div>
          </div>
        </div>
        <br />
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acc-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <h4>How do I download an ebook?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#ink-accordion"
          >
            <div className="accordion-body acc-body">
              To download an ebook, go to your library where you can see the
              list of ebooks you've purchased. Click on the "Download" button
              next to the desired ebook, and it will be saved to your device for
              offline reading.
            </div>
          </div>
        </div>
        <br />
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acc-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <h4>What file formats are supported for the ebooks?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#ink-accordion"
          >
            <div className="accordion-body acc-body">
              Inkless Reads supports ebooks in PDF and EPUB formats. Most
              devices and ebook readers are compatible with these formats,
              allowing you to read the ebooks on various devices.
            </div>
          </div>
        </div>
        <br />
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acc-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <h4>Can I return or refund an ebook?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#ink-accordion"
          >
            <div className="accordion-body acc-body">
              Due to the nature of digital products, we do not offer returns or
              refunds for purchased ebooks. We encourage you to review the book
              details and sample chapters before making a purchase decision.
            </div>
          </div>
        </div>
        <br />
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acc-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              <h4>How can I contact customer support?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#ink-accordion"
          >
            <div className="accordion-body acc-body">
              If you have any questions, concerns, or need assistance, you can
              reach out to our customer support team by sending an email to
              ireads@aol.com. We strive to respond to all inquiries within 24
              hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
