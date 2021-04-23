import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT_URL
})

class DataEndpoint {
    static async getWithParams(endpoint, params){
        try {
            const response = await axiosInstance.get(endpoint, {params:params})
            return Promise.resolve(response)
        }
        catch(e) {
            return Promise.reject(e)
        }
    }

    static async getAlerts(offset,limit,id){
        const idString = id.join(',');
        return this.getWithParams('/alerts',{offset,limit,id:idString});
    }
    static async getAgents(offset, limit){
        return this.getWithParams('/agents',{offset,limit});
    }
    static async getRules(offset, limit){
        return this.getWithParams('/rules',{offset,limit});
    }
    static async getAgent(id){
        return this.getWithParams(`/agents/:${id}`,{});
    }
    static async getRule(id){
        return this.getWithParams(`/rules/:${id}`,{});
    }
}
export default DataEndpoint