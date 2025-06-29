import React from 'react'

const WorkInfo = ({cardHeader}) => {
  return (
    <div className="bg-white shadow-xl border border-gray-100 mx-5 py-10 px-5 rounded-xl">
      <h2 className="text-lg font-medium text-slate-600 text-center">
        {cardHeader}
      </h2>
    </div>
  );
}

export default WorkInfo