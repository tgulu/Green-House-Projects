import React, { useState, useEffect } from "react";

export const Card = ({ cover, tags, linkText, linkUrl, tagsSuffix }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-center items-center p-4 transition-transform duration-2000 ${
        isVisible
          ? "translate-y-[-85px] opacity-100"
          : "-translate-y-[-900px] opacity-0"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={cover}
          className="w-full h-full object-cover shadow-2xl shadow-black rounded-3xl"
        />
      </div>
      <div className="hidden md:flex absolute top-[420px] xl:top-[790px] items-center justify-center text-black p-1">
        <h3 className="text-lg text-gray-500 font-semibold bg-opacity-50 rounded-md p-2 uppercase">
          {tags}
          {linkText && linkUrl && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {linkText}
            </a>
          )}
          {tagsSuffix}
        </h3>
      </div>
    </div>
  );
};
