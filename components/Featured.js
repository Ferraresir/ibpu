import React from "react";

export default function Featured({ partners }) {
  return (
    <div className="bg-gray-100 w-full flex justify-center content-center">
      <h1>Featured</h1>
      {partners.map((course) => {
        return <div key={course.id}>{course.name}</div>;
      })}
    </div>
  );
}
