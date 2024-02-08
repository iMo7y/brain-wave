import { useState } from 'react';
import { exportToPdf } from "@/lib/utils";
import { Button } from "../ui/button";

const Export = () => {
  const [showGif, setShowGif] = useState(false);

  const handleClick = () => {
    setShowGif(true);
    // Perform export action
    exportToPdf();
    // Hide the GIF after 3 seconds
    setTimeout(() => {
      setShowGif(false);
    }, 1700);
  };

  return (
    <div className='flex flex-col gap-3 px-5 py-3'>
      <h3 className='text-[10px] uppercase'>Export</h3>
      {showGif ? (
        <img src="/assets/okk.gif" alt="Loading GIF" className="mx-auto mt-3" />
      ) : (
        <Button
          variant='outline'
          className='w-full border border-primary-grey-100 hover:bg-white hover:text-primary-black'
          onClick={handleClick}
        >
          Export to PDF
        </Button>
      )}
    </div>
  );
};

export default Export;
