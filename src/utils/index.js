import axios from "axios";
import { SetPosts } from "../redux/postSlice";

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
        return response.data.secure_url;
    } catch (error) {
        console.log(error);
    }
};

export const detchPosts = async (token, dispatch, url, data) => {
    try {
        const res = await apiRequest({
            url: url || "/posts",
            token: token,
            method: "POST",
            data: data || {},
        });

        dispatch(SetPosts(res?.data));
        return;
    } catch (error) {
        console.log(error);
    }
};

export const likePost = async ({ url, token }) => {
    try {
        const res = await apiRequest({
            url: url,
            token: token,
            method: "POST",
        })

        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = async (id, token) => {
    try {
        const res = await apiRequest({
            url: "/posts/" + id,
            token: token,
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
};

export const getUserInfo = async (id, token) => {
    try {
        const uri = id === undefined ? "/users/get-user" : "/users/get-user/" + id;

        const res = await apiRequest({
            url: uri,
            token: token,
            method: "POST",
        });

        if (res?.message === "Authentication failed") {
            localStorage.removeItem("user");
            window.alert("User session expired. Login again.");
            window.location.replace("/login");
        }
      
        return res?.user;
    } catch (error) {
        console.log(error);
    }
};

export const sendFriendRequest = async (id, token) => {
    try {
        const res = await apiRequest({
            url: "/users/friend-request",
            token: token,
            method: "POST",
            data: { requestTo: id },
        }); 
    } catch (error) {
        console.log(error); 
    }
};

export const viewUserProfile = async (id, token) => {
    try {
      const res = await apiRequest({
        url: "/users/profile-view",
        token: token,
        method: "POST",
        data: { id },
      });

      return;
    } catch (error) {
      console.log(error);
    }
  };