import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

function MultiSelect({
  options = [1, 2, 3],
  required = true,
}: {
  options?: Array<any>;
  required?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedIndices, setCheckedIndices] = useState<Set<number>>(new Set());

  const isChecked = (checkedIndex: number) => checkedIndices.has(checkedIndex);

  const handleToggle = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (!isChecked(index)) setCheckedIndices((p) => new Set(p).add(index));
    else setCheckedIndices((p) => new Set([...p].filter((el) => el !== index)));
  };

  const submitChecked = () => {
    if (required && checkedIndices.size === 0) return;
    console.log(options.filter((_, idx) => isChecked(idx)));
    return options.filter((_, idx) => isChecked(idx));
  };

  return (
    <>
      <div className="w-[500px]">
        <div
          className="flex cursor-pointer flex-row items-center justify-between rounded-lg border px-4 py-2 text-xl shadow"
          onClick={() => setIsOpen((p) => !p)}
        >
          <span>{checkedIndices.size} selected</span>
          <span>{isOpen === true ? <BiUpArrow /> : <BiDownArrow />}</span>
        </div>
        {isOpen && (
          <div className="mt-2 grid grid-cols-3 gap-2 border p-3 shadow">
            {options.map((el, idx) => (
              <div
                className={
                  (isChecked(idx) === true
                    ? "bg-blue-100 hover:bg-blue-100 "
                    : "") +
                  "flex cursor-pointer flex-row items-center gap-2 rounded border px-2 py-1 shadow-sm hover:bg-blue-50"
                }
                key={idx}
                onClick={(e) => handleToggle(idx, e)}
              >
                <input
                  type="checkbox"
                  onChange={() => {}}
                  checked={isChecked(idx)}
                />
                <span>{el}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={
          (required && checkedIndices.size === 0
            ? "cursor-default bg-gray-300 "
            : "") +
          "mt-2 cursor-pointer rounded bg-blue-400 p-4 text-xl shadow-xl"
        }
        onClick={submitChecked}
      >
        Sumbit
      </div>
    </>
  );
}

export default MultiSelect;
