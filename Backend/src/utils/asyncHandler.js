const asyncHandler = (Handler) => async (req, res, next) => {
    try{
        await Handler(req, res, next);
    }
     catch(error){
            res.status(error.statusCode || 500).json({
                success : false,
                message : error.message || "some error occurred"
            })
        } 

}


export { asyncHandler };