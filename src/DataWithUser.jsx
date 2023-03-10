import React, { use } from "react";

const DataWithUser = ({ url }) => {
  const data = use(fetch(url).then((res) => res.json()));

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default DataWithUser;
