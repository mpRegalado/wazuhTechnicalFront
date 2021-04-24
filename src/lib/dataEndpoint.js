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

    static async getAlerts(offset,limit,id = null){
        const query = {offset, limit}
        if (id){
            query.id = id.join(',');
        }
        return this.getWithParams('/alerts',query);
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