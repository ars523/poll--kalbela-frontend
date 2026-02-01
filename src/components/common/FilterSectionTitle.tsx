"use client";
import React, { ReactNode } from "react";
import { cn } from "@/assets/lib/cn";

interface FilterSectionTitleProps {
  children: ReactNode;
  className?: string;
  action?: ReactNode;
  icon?: ReactNode;
  headingLevel?: "h1" | "h2";
  headingClassName?: string;
}

const FilterSectionTitle = ({
  children,
  className = "",
  action,
  icon,
  headingLevel = "h2",
  headingClassName = "",
}: FilterSectionTitleProps) => {
  const HeadingTag = headingLevel;

  return (
    <div
      className={cn(
        "lg:px-6 px-4 py-4 flex flex-col lg:flex-row gap-3 lg:gap-2 items-start lg:items-center",
        action ? "lg:justify-between" : "",
        className
      )}
    >
      <div className="flex gap-2 items-center justify-start">
        {icon && <div className="flex items-center">{icon}</div>}
        <HeadingTag
          className={cn(
            "text-xl font-bold text-gray-800 text-left",
            headingClassName
          )}
        >
          {children}
        </HeadingTag>
      </div>
      {action && (
        <div className="flex items-center gap-2 w-full lg:w-auto">{action}</div>
      )}
    </div>
  );
};

export default FilterSectionTitle;
