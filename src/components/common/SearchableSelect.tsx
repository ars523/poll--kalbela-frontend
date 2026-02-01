"use client";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/assets/lib/cn";

interface SearchableSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchableSelect({
  options,
  value,
  onChange,
  placeholder = "সকল আসন",
  className = "",
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredOptions(options);
    } else {
      const query = searchQuery.trim().toLowerCase();
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(query)
      );
      setFilteredOptions(filtered);
    }
    setHighlightedIndex(-1);
  }, [searchQuery, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery("");
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (highlightedIndex >= 0 && optionRefs.current[highlightedIndex]) {
      optionRefs.current[highlightedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [highlightedIndex]);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue.trim());
    setIsOpen(false);
    setSearchQuery("");
    setHighlightedIndex(-1);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("all");
    setIsOpen(false);
    setSearchQuery("");
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
      return;
    }

    const allOptions = ["all", ...filteredOptions];
    const maxIndex = allOptions.length - 1;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelect(allOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setSearchQuery("");
        setHighlightedIndex(-1);
        break;
    }
  };

  const displayValue = value === "all" ? placeholder : value;
  const allOptions = ["all", ...filteredOptions];

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-PurpleDark focus-within:border-transparent cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-PurpleDark"
      >
        {isOpen ? (
          <div className="flex items-center justify-between w-full">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="আসন খুঁজুন..."
              className="flex-1 outline-none bg-transparent"
              onClick={(e) => e.stopPropagation()}
              autoComplete="off"
            />
            <svg
              className="w-5 h-5 text-gray-400 transition-transform rotate-180 flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <span className={value === "all" ? "text-gray-500" : ""}>
              {displayValue}
            </span>
            {value !== "all" ? (
              <button
                onClick={handleClear}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Clear filter"
                title="Clear filter"
              >
                <svg
                  className="w-4 h-4 text-gray-500 hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <svg
                className="w-5 h-5 text-gray-400 transition-transform flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        )}
      </div>

      {isOpen && (
        <div
          className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto custom-scrollbar"
          role="listbox"
        >
          {allOptions.map((option, index) => {
            const displayText = option === "all" ? placeholder : option;
            const isHighlighted = highlightedIndex === index;
            const isSelected = value === option;

            return (
              <div
                key={option}
                ref={(el) => {
                  optionRefs.current[index] = el;
                }}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
                role="option"
                aria-selected={isSelected}
                className={`px-4 py-2 cursor-pointer transition-colors ${
                  isHighlighted || isSelected
                    ? "bg-PurpleLight text-PurpleDark"
                    : "hover:bg-gray-100"
                }`}
              >
                {displayText}
              </div>
            );
          })}
          {filteredOptions.length === 0 && searchQuery.trim() !== "" && (
            <div className="px-4 py-2 text-gray-500 text-center">
              কোন আসন পাওয়া যায়নি
            </div>
          )}
        </div>
      )}
    </div>
  );
}
