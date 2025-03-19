import React, { useState, useEffect } from "react";

export const Card = ({ cover, tags, linkText, linkUrl, tagsSuffix }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-center items-center p- transition-transform duration-2000 ${
        isVisible
          ? "lg:translate-y-[-118px] translate-y-[-100px] opacity-100"
          : "-translate-y-[-900px] opacity-0"
      }`}
    >
      {/* Image */}
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={cover}
          alt="Card Cover"
          className="w-full h-full object-cover shadow-2xl shadow-black rounded-xl"
        />
      </div>

      {/* Text Below Image */}
      <div className="flex items-center justify-center text-black text-center mt-4 md:mt-6 lg:mt-8">
        <h3 className="xl:text-lg text-sm text-gray-500 font-semibold uppercase">
          {tags}
          {linkText && linkUrl && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-1"
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
