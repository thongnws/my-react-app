import { nanoid } from 'nanoid';
import React, { useCallback } from 'react';

type StudentsPickerProps = {
  onPickHandler: (ids: string[]) => Promise<void>;
};

const StudentsPicker: React.FC<StudentsPickerProps> = ({ onPickHandler }) => {
  const handlePicker = useCallback(() => {
    const pickerIds = Array.from({ length: 5 }, () => nanoid());
    onPickHandler(pickerIds);
  }, [onPickHandler]);

  return (
    <div className="flex flex-row p-8">
      <span className="font-semibold text-lg">StudentsPicker Component</span>
      <button
        type="button"
        onClick={handlePicker}
        className="ml-10 items-center text-white bg-blue-500 focus:outline-none hover:bg-blue-500/90 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
      >
        picker
      </button>
    </div>
  );
};

export default StudentsPicker;
