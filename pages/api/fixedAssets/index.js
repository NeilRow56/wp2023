import nc from 'next-connect'
import db from '../../../lib/dbConnect'

import { allFixedAssets, newFixedAsset } from '../../../controllers/fixedAssetControllers'

import onError from '../../../middlewares/errors'

const handler = nc({ onError })

db.dbConnect()

handler.get(allFixedAssets)

handler.post(newFixedAsset)

export default handler