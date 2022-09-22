import React from 'react'
import AssetCard1 from './AssetCard1'

const AssetTable = ( { fixedAssets }) => {
  return (
    <div>
      <table className="table-auto">
  <thead>
    <tr className='text-sm text-center'>
      <th>ASSET</th>
      <th>
        <div>
          <h3>Date </h3>
          <h3>Acquired</h3>
        </div>
      </th>
      <th>
      
      <div>
          <h3>Cost/ </h3>
          <h3>Valuation</h3>
          <h3 className='w-[88px] text-right pt-2 pr-2'>£</h3>
        </div>
        
      </th>
      <th>
      <div>
          <h3>Revaluation/ </h3>
          <h3>Transfer</h3>
          <h3 className='w-[88px] text-right pt-2 pr-2'>£</h3>
        </div>
      </th>
      <th>
      <div>
          <h3>Additions </h3>
          <div className='h-[20px]'>

          </div>

          
          <h3 className='w-[88px] text-right pt-2 pr-2'>£</h3>
        </div>
      </th>
      <th>
      <div className='text-red-700'>
          <h3>Disposals </h3>
          <div className='h-[20px]'>

          </div>

          
          <h3 className='w-[88px] text-right pt-2 pr-2'>£</h3>
        </div>
        </th>
      <th>
      <div>
          <h3>Cost/Value </h3>
          <h3>C/Fwd</h3>
          <h3 className='w-[88px] text-right pt-2 pr-2'>£</h3>
        </div>
      </th>
      <th>
        <div>
        <h3 className='w-[88px] '>Acc. Dep&apos;n</h3>
                <h3 className='w-[88px] '>B/Fwd</h3>
                <h3 className='w-[88px] text-right pt-2 pr-2'>£</h3>
        </div>
      </th>
      <th>
      <div>
          <h3>Revaluation/ </h3>
          <h3>Transfer</h3>
          <h3 className='w-[88px] text-right pt-2 pr-2'>£</h3>
        </div>
      </th>
      <th>
      <div className=''>
          <h3>Charge for </h3>
          <h3>Period</h3>
          <h3 className='w-[88px] text-right pt-2 pr-2 '>£</h3>
        </div>
      </th>
      <th>
      <div className='text-red-700'>
          <h3>Eliminated on </h3>
          <h3>Disposals</h3>
          <h3 className='w-[88px] text-right pt-2 pr-2'>£</h3>
        </div>
      </th>
      <th>
      <div>
        <h3 className='w-[88px] '>Acc. Dep&apos;n</h3>
                <h3 className='w-[88px] '> C/Fwd</h3>
                <h3 className='w-[88px] text-right pt-2 pr-2'>£</h3>
        </div>
      </th>
      <th>
      <div className='text-blue-700'>
        <h3 className='w-[88px] '>Net Book  </h3>
                <h3 className='w-[88px] '>Value B/Fwd</h3>
                <h3 className='w-[88px] text-right pt-2 pr-2'>£</h3>
        </div>
      </th>
      <th>
      <div className=' text-blue-700'>
      <h3 className='w-[88px] '>Net Book  </h3>
                <h3 className='w-[88px] '>Value c/Fwd</h3>
                <h3 className='w-[88px] pt-2 pr-2 text-right'>£</h3>
        </div>
      </th>
      <th className='text-orange-600'>Action</th>
    </tr>
  </thead>
 <tbody>
  { fixedAssets && fixedAssets.map((fixedAsset) => (
    <AssetCard1 key={fixedAsset._id} fixedAsset={fixedAsset}/>
  ))}
    
      
    <tr className="border-2  border-gray-900 font-bold">
    <td className='min-w-[150px] text-left'>TOTALS </td>
      <td className='text-left'></td>
      <td>10,000,000</td>
      <td>10,000,000 </td>
      <td>10,000,000</td>
      <td className='text-red-700'>10,000,000</td>
      <td>10,000,000 </td>
      <td>4,000,000</td>
      <td>2,000,000</td>
      <td>1,000,000</td>
      <td className='text-red-700'>3,000,000</td>
      <td>4,000,000</td>
      <td className='text-blue-700'>4,000,000</td>
      <td className='text-blue-700'>3,000,000</td>
      <td>
        
      </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default AssetTable
