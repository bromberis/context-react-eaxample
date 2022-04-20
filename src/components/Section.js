import React, { useContext } from "react";
import { HeaderContext } from "../App";

export function Section() {
  const value = useContext(HeaderContext);

  return (
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">All likes on page {value.likes}</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla error,
        facilis iusto dolorem totam tempore, velit saepe odit dolore excepturi
        consequuntur ipsum inventore eaque quo sit, dicta voluptate maiores
        porro.
      </p>
    </div>
  );
}
