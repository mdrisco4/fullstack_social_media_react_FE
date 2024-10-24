import axios from "axios";

const API_URL = "http://localhost:8800";

export const API = axios.create({
    baseURL: API_URL,
    responseType: "json",
});

export const apiRequest = async ({ url, token, data, method }) => {
    try {
        const result = await API(url, {
            method: method || "GET",
            data: data,
            headers: {
                "content-type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",
            }
        });

        return result?.data
    } catch (error) {
        const err = error.response.data;
        console.log(err);
        return { status: error.success, message: error.message };
    }
};

export const handleFileUpload = async (uploadFile) => {
    const formData = new formData();
    formData.append("file", uploadFile);
    formData.append("upload_preset", "socialmedia");

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_COUDINARY_ID}/image/upload/`,
            formData
        );
    } catch (error) {
        console.log(error);
    }
};