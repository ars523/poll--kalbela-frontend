import React, { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  action?: ReactNode;
  icon?: ReactNode;
  headingLevel?: "h1" | "h2";
}

const SectionTitle = ({
  children,
  className = "",
  action,
  icon,
  headingLevel = "h2",
}: SectionTitleProps) => {
  const HeadingTag = headingLevel;

  return (
    <div
      className={`lg:px-6 px-4 py-4 flex gap-2 items-center ${
        action ? "justify-between" : ""
      } ${className}`}
    >
      <div className="flex gap-2 items-center justify-between">
        {icon && <div className="flex items-center">{icon}</div>}
        <HeadingTag className="text-xl font-bold text-gray-800">
          {children}
        </HeadingTag>
      </div>
      {action && (
        <div className="flex items-center gap-2 text-gray-400">{action}</div>
      )}
    </div>
  );
};

export default SectionTitle;
