import FixedAsset from "../models/FixedAsset"
import APIFeatures from "../utils/apiFeatures"

//GET all Fixed Assets
 
const allFixedAssets = async (req, res) => {

    

    try {

        const resultsperPage = 4
        const fixedAssetsCount = await FixedAsset.countDocuments()

        const apiFeatures = new APIFeatures(FixedAsset.find(), req.query)
        .search()
        .filter()

        let fixedAssets = await apiFeatures.query
        let filteredFixedAssetsCount = fixedAssets.length;

        apiFeatures.pagination(resultsperPage)
        fixedAssets = await apiFeatures.query.clone();
  
        res.status(200).json({
            success: true,
            fixedAssetsCount,
            resultsperPage,
            filteredFixedAssetsCount,
            fixedAssets
        })
  
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
        
 }
 
 //Create new fixed asset => api/fixedAssets

 const newFixedAsset = async (req, res) => {

    try {
        const fixedAsset = await FixedAsset.create(req.body)

        res.status(200).json({
            success: true,
            fixedAsset
        })
     
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        }) 
        
    }
   
 }

 //GET single fixed asset details => api/fixedAssets/:id

 const getSingleFixedAsset = async (req, res) => {
 
    try {
        const singleFixedAsset = await FixedAsset.findById(req.query.id);
  
        if(!singleFixedAsset) {
            return res.status(404).json({
                success: false,
                error: "Fixed Asset not found with this ID"
            })
  
        }
  
        res.status(200).json({
            success: true,
            singleFixedAsset
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 //UPDATE single fixed asset details => api/fixedAssets/:id

 const updateSingleFixedAsset = async (req, res) => {
    try {
        let singleFixedAsset = await FixedAsset.findById(req.query.id);
         if(!singleFixedAsset) {
            return res.status(404).json({
                success: false,
                error: "Fixed Asset not found with this ID"
            })
         }
  
        singleFixedAsset = await FixedAsset.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true
  
        })
         res.status(200).json({
            success: true,
            singleFixedAsset
        })
      
  
      
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
           
    }
 }
 
    
// DELETE images associated with fixed asset

 //DELETE single fixed asset details => api/fixedAssets/:id

 const deleteSingleFixedAsset = async (req, res) => {
 
    try {
        const singleFixedAsset = await FixedAsset.findById(req.query.id);
  
        if(!singleFixedAsset) {
            return res.status(404).json({
                success: false,
                error: "Fixed Asset not found with this ID"
            })
  
        }

        await singleFixedAsset.remove()
  
        res.status(200).json({
            success: true,
            message:'Room is deleted'
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 
 export {
    allFixedAssets,
    newFixedAsset,
    getSingleFixedAsset,
    updateSingleFixedAsset,
    deleteSingleFixedAsset
 }