import { AxiosResponse } from "axios";
import http from "../http";

class GalleryService {
  resource = "/v2/list";

  async getImages(payload: string): Promise<AxiosResponse> {
    return await http.get(`${this.resource}/` + payload);
  }

  async getImageInfo(payload: string): Promise<AxiosResponse> {
    return await http.get(`/id/${payload}/info`);
  }
}

const galleryService = new GalleryService();
export default galleryService;
