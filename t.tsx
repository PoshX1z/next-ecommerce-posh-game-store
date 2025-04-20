import React from "react";

const t = ({ title, small }: { title: string; small?: boolean }) => {
  return (
    <div>{small ? <div>{title}small</div> : <div>{title} large</div>}</div>
  );
};

export default t;
