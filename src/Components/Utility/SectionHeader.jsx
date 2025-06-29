import React from 'react'

const SectionHeader = ({serviceHeader, serviceSubTitle}) => {
  return (
    <div>
      <h2 className="text-3xl mt-5 md:text-4xl font-medium pb-1 lg:leading-14 font-Header ">
        {serviceHeader}
      </h2>
      <p className="text-lg font-medium text-slate-600 mx-auto">
        {serviceSubTitle}
      </p>
    </div>
  );
}

export default SectionHeader