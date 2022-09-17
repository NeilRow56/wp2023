import nc from 'next-connect'
import dbConnect from '../../../lib/dbConnect'

import { getSingleFixedAsset, updateSingleFixedAsset, deleteSingleFixedAsset } from '../../../controllers/fixedAssetControllers'

import onError from '../../../middlewares/errors'

const handler = nc({ onError })

dbConnect()

handler.get(getSingleFixedAsset)

handler.put(updateSingleFixedAsset)

handler.delete(deleteSingleFixedAsset)



export default handler