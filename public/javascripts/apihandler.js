class APIHandler {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `http://localhost:3000/api/travels`
            // baseURL: `https://cityapp-project.herokuapp.com/api/travels`
        })
    }


    getTravelsList = () => this.axiosApp.get('/')

    getTravelbyDriver = () => this.axiosApp.get(`/user-travel`)

    }

