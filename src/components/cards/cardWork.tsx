import React from 'react';

interface CardWorkProps {
  tags: string[];
  id: string;
  title: string;
  body: string;
  image: string;
  url: string;
}

const CardWork: React.FC<CardWorkProps> = ({
  tags,
  id,
  title,
  body,
  image,
  url,
}) => {
  const orangeTwo = 'text-orange-500';
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      key={id}
      className=" text-left rounded-lg px-5 py-2 border border-gray-500 border-spacing-5 max-sm:pb-20 max-sm:gap-8 gap-28"
    >
      <div className="max-sm:w-full">
        <section className="flex justify-between w-full">
          <h2
            className={
              ' max-sm:text-center text-2xl  font-semibold ' + orangeTwo
            }
          >
            <span className="text-gray-300">0{id} /</span>
            {title}
          </h2>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="fill-current text-gray-300 max-sm:hidden h-6 w-6"
          >
            <path d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
          </svg>
        </section>
        <div className="mb-5">
          {tags &&
            tags.map((tag, index) => {
              return (
                <span key={index} className="text-gray-400 text-md mb-5">
                  {' '}
                  {tag} /
                </span>
              );
            })}
        </div>
        <p className="text-gray-300 mb-7">{body}</p>
      </div>
    </button>
  );
};

export default CardWork;

