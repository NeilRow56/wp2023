import React from 'react'


const AssetCard1 = ({ fixedAsset }) => {
  return (
    <>
       <tr className='text-right '>
      <td className='min-w-[200px] text-left'>{fixedAsset.name} </td>
      <td className='text-left px-2'>22.12.2022</td>
      <td className="px-2">{fixedAsset.cost}</td>
      <td className="px-2">{fixedAsset.valuation}</td>     <td className="px-2">{fixedAsset.additionCost}</td>
      <td className="px-2 text-red-700">{fixedAsset.disposalCost}</td>
      <td className="px-2">10,000,000 </td>
      <td className="px-2">4,000,000</td>
      <td className="px-2">{fixedAsset.valuationDisposal}</td>
      <td className="px-2">1,000,000</td>
      <td className="px-2 text-red-700">{fixedAsset.disposalDepreciation}</td>
      <td className="px-2">4,000,000</td>
      <td className="px-2 text-blue-700">{fixedAsset.writtenDownValueBfwd}</td>
      <td className="px-2 text-blue-700">3,000,000</td>
      <td>
        <button className='rounded-lg bg-orange-800 text-white px-1 mx-4 my-1'>Details</button>
      </td>
    </tr>
    </>
  )
}

export default AssetCard1

