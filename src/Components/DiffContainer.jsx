import React from 'react'
import Diff from './Diff'
import one from '../assets/bFive.jpg'
import two from '../assets/bOne.jpg'
const DiffContainer = () => {
  return (
    <div className="max-w-7xl mx-auto ">
        <div className="mockup-code w-full">
            <Diff beforeImage={one} afterImage={two} />
        </div>
    </div>
  );
}

export default DiffContainer