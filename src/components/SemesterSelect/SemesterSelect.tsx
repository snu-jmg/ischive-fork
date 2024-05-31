import { useState, useRef, useEffect } from "react";
import { courses } from "@/api/courses";

export default function SemesterSelect({
  onSelectionChange,
}: {
  onSelectionChange?: (value: string) => void;
}) {
  const [semesterIndex, setSemesterIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const semesters: string[] = Object.keys(courses); // ["entire", "2023-2", "2023-1", ...]
  const parsedSemesters: string[] = semesters.map((semester, index) =>
    index === 0 ? "전체 학기" : semester,
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className="relative flex h-9 select-none items-center font-Pretendard text-2xl font-extrabold md:text-3xl"
    >
      <div
        className="w-56 cursor-pointer appearance-none border-r-2 border-solid border-black text-center"
        onClick={() => {
          setIsFocused(!isFocused);
        }}
      >
        <p>{parsedSemesters[semesterIndex]}</p>
      </div>
      {isFocused && (
        <div
          className="appearnce-none absolute left-0 cursor-pointer bg-white"
          style={{ top: "38px", zIndex: 9999 }}
        >
          {parsedSemesters.map((semester, index) => (
            <div
              className="w-56 border-b-2 border-r-2 border-solid border-black text-center hover:bg-black hover:text-white"
              key={index}
              onClick={() => {
                setSemesterIndex(index);
                setIsFocused(false);
                onSelectionChange?.(semesters[index]);
              }}
            >
              {semester}
            </div>
          ))}
        </div>
      )}
      <div
        className="flex h-full cursor-pointer appearance-none items-center justify-center border-r-2 border-solid border-black px-3 text-lg"
        onClick={() => {
          setIsFocused(!isFocused);
        }}
      >
        {isFocused ? "▲" : "▼"}
      </div>
    </div>
  );
}
