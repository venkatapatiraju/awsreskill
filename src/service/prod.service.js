import axios from "axios";

const BASE_REST_URL="http://tradereacteb-env.eba-crgyqcz2.us-west-1.elasticbeanstalk.com//api/v1";

class ProdService{

    getProdductList() {
        return axios.get(BASE_REST_URL+"/products");
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new  ProdService();