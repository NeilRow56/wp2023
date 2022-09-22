import Head from 'next/head'
import React from 'react'
import FixedAsset from '../models/FixedAsset'
import AssetTable from '../components/fixedAssets/AssetTable'
import db from '../lib/dbConnect'



const TangibleFixedAssets = ({ fixedAssets }) => {
  
  return (
    <div>
      <Head>
        <title>Tangible Fixed Assets</title>
       
    </Head>
    <div className='w-full text-center'>
      <h2 className='text-3xl semibold underline pb-5'>Tangible Fixed Assets</h2>
    </div>
    <AssetTable fixedAssets={fixedAssets }/>
    </div>
  )
}

export async function getServerSideProps() {
  await db.dbConnect();
  const fixedAssets = await FixedAsset.find().lean();
  return {
    props: {
      fixedAssets: fixedAssets.map(db.convertDocToObj),
    },
  };
}

export default TangibleFixedAssets

