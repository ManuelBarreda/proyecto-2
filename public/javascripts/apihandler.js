class APIHandler {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `http://localhost:3000/api/travels`
        })
    }


    getTravelsList = () => this.axiosApp.get('/')
    getOneTravel = registerId => this.axiosApp.get(`/${registerId}`)
    updateOneTravel = (registerId, registerInfo) => this.axiosApp.put(`/${registerId}`, registerInfo)
    deleteOneTravel = registerId => this.axiosApp.delete(`/${registerId}`)
}