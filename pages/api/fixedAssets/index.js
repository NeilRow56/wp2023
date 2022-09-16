import nc from 'next-connect'
import dbConnect from '../../../lib/dbConnect'

import { allFixedAssets, newFixedAsset } from '../../../controllers/fixedAssetControllers'

const handler = nc()

dbConnect()

handler.get(allFixedAssets)

handler.post(newFixedAsset)

export default handler