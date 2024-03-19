import React from "react";

interface IEmpty {
  content?: string | React.ReactNode;
  className?: string;
}

export const Empty = (props: IEmpty) => {
  const { content = "No Data", className } = props;
  return (
    <div className={`w-full flex justify-center items-center text-primary ${className}`}>
      {typeof content === "string" || content === null ? (
        <div>
          <span className="text-muted-foreground">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
              className="arco-icon arco-icon-empty"
            >
              <path d="M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"></path>
            </svg>
          </span>
          <span className="text-muted-foreground">{content}</span>
        </div>
      ) : (
        content
      )}
    </div>
  );
};
