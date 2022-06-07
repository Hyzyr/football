import React from "react";

export default function Loader() {
  return (
    <div className="spinner__outer">
      <Spinner />
    </div>
  );
}

export const Spinner = () => <div className="spinner">{spinnerSVG}</div>;

export const spinnerSVG = (
  <svg
    width="67"
    height="67"
    viewBox="0 0 67 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.875 6.4375L21 11.8484M33.5 2.25V8.5V2.25ZM49.125 6.4375L46 11.8484L49.125 6.4375ZM60.5625 17.875L55.15 21L60.5625 17.875ZM64.75 33.5H58.5H64.75ZM60.5625 49.125L55.15 46L60.5625 49.125ZM49.125 60.5625L46 55.15L49.125 60.5625ZM33.5 64.75V58.5V64.75ZM17.875 60.5625L21 55.15L17.875 60.5625ZM6.4375 49.125L11.8484 46L6.4375 49.125ZM2.25 33.5H8.5H2.25ZM6.4375 17.875L11.8484 21L6.4375 17.875Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
