class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const assetName = this.queryStr.assetName ? {
            description: {
                $regex: this.queryStr.assetName,
                $options: 'i'
            }
        } : {}

        this.query = this.query.find({ ...assetName })
        return this;
    }

    // Remove fields from query that are not fields in database i.e. assetName above is not a field in the Fixed Asset Model. These items are dealt with through the search section

    filter() {

        const queryCopy = { ...this.queryStr }

        // Remove fields from query
        const removeFields = ['location', 'page']
        removeFields.forEach(element => delete queryCopy[element]);


        // Advance filtering with gt, gte etc
        let filterQuery = {};
        const fieldsLength = Object.keys(queryCopy).length;

        for (let i = 0; i < fieldsLength; i++) {

            let queryStr = JSON.stringify(Object.keys(queryCopy)[i])
            const filterField = queryStr.substring(1, queryStr.indexOf('['))

            if (filterField.length > 1) {
                const fieldValue = Object.values(queryCopy)[0]

                const filterOperator = queryStr.substring(queryStr.indexOf('[') + 1, queryStr.indexOf(']'))

                filterQuery = { ...filterQuery, [filterField]: { [`$${filterOperator}`]: fieldValue } }

            } else {
                filterQuery = { ...filterQuery, [Object.keys(queryCopy)[i]]: Object.values(queryCopy)[i] }
            }

        }

        this.query = this.query.find(filterQuery);
        return this;
    }
  
    pagination(resultsPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultsPerPage * (currentPage - 1)

        this.query = this.query.limit(resultsPerPage).skip(skip)
        return this

    }

}
    export default APIFeatures;