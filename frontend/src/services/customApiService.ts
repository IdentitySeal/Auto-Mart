import { makeRequest } from "./makeRequest";

export interface ICarAdvert {
    _id?: string;
    brand: string;
    description: string;
    cost: number
    year: number
    model: string
    color: string
    image: string

}
class CustomApiService {
    static baseUrl = 'http://localhost:4000/api'
    static createAdvert_url = `${this.baseUrl}/car-advert/post`;
    static listAdvert_url = `${this.baseUrl}/car-advert/all`;
    static viewAdvert_url = (id:string) => `${this.baseUrl}/car-advert/view/${id}`;
    static deleteAdvert_url = `${this.baseUrl}/car-advert/delete`;

    static async postCarAdvert(data:ICarAdvert) {
        try {
            const res  = await makeRequest({url: this.createAdvert_url,method:'POST',data:data});
            return res;
        } catch (error) {
            throw error
        }
    }
    static async viewCarAdvertById(carAdvertId:string) {
        try {
            const res  = await makeRequest({url: this.viewAdvert_url(carAdvertId)});
            return res;
        } catch (error) {
            throw error
        }
    }
    static async deleteCarAdvertPosts() {
        try {
            const res  = await makeRequest({url: this.deleteAdvert_url,method:'DELETE'});
            return res;
        } catch (error) {
            throw error
        }
    }
    static async getCarAdvertPosts() {
        try {
            const res  = await makeRequest({url: this.listAdvert_url});
            return res?.data;
        } catch (error) {
            throw error
        }
    }
}

export default CustomApiService;