class APIHandler {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `http://localhost:3000/api/travels`
            // baseURL: `https://cityapp-project.herokuapp.com/api/travels`
        })
    }


    getTravelsList = () => this.axiosApp.get('/')

    getTravelbyDriver = () => this.axiosApp.get(`/user-travel`)

    deleteOneRegister = travelId => this.axiosApp.delete(`/${travelId}`)

    }


    // updateOneTravel = (registerId, registerInfo) => this.axiosApp.put(`/${registerId}`, registerInfo)
    // deleteOneTravel = registerId => this.axiosApp.delete(`/${registerId}`)
