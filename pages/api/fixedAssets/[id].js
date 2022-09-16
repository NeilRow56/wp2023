import nc from 'next-connect'
import dbConnect from '../../../lib/dbConnect'

import { getSingleFixedAsset, updateSingleFixedAsset, deleteSingleFixedAsset } from '../../../controllers/fixedAssetControllers'

const handler = nc()

dbConnect()

handler.get(getSingleFixedAsset)

handler.put(updateSingleFixedAsset)

handler.delete(deleteSingleFixedAsset)



export default handler