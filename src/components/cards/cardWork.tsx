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
  const orangeTwo = 'text-blue-800';
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      key={id}
      className=" shadow shadow-blue-300 text-left rounded-lg px-5 py-2 border border-[#bdddfa] hover:bg-[#bdddfa] border-spacing-5 max-sm:pb-20 max-sm:gap-8 gap-28"
    >
      <div className="max-sm:w-full">
        <section className="flex justify-between w-full">
          <h2
            className={
              ' max-sm:text-center text-2xl  font-bold ' + orangeTwo
            }
          >
            <span className="text-blue-800">0{id} /</span>
            {title}
          </h2>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="fill-current text-blue-500 max-sm:hidden h-6 w-6"
          >
            <path d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
          </svg>
        </section>
        <div className="mb-5">
          {tags &&
            tags.map((tag, index) => {
              return (
                <span key={index} className="text-blue-800 font-light text-md mb-5">
                  {' '}
                  {tag} /
                </span>
              );
            })}
        </div>
        <p className="text-blue-950 font-light mb-7">{body}</p>
      </div>
    </button>
  );
};

export default CardWork;

