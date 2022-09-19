import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-top py-3 py-lg-5">
      <div className="container px-4">
        <h6 className="fw-semibold">Quick Links</h6>
        <div className="footer-items d-flex flex-column">
          <Link href="#">
            <a className="footer-link">About Us</a>
          </Link>
          <Link href="#">
            <a className="footer-link">Our Charter</a>
          </Link>
          <Link href="#">
            <a className="footer-link">Stats</a>
          </Link>
          <Link href="#">
            <a className="footer-link">Press</a>
          </Link>
          <Link href="#">
            <a className="footer-link">Jobs</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
