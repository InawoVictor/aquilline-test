import axios from "axios";
// import store, { RootState } from "../store";
// import toast from "react-hot-toast";
// import { closeLoading } from "../features/dialogSlice";

export const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API || "https://picsum.photos";

const http = axios.create({
    baseURL: BACKEND_API ,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default http;