import axios from "axios";

const uploaderInstance = axios.create({
    baseURL: "https://icontribute-api-dev-server.herokuapp.com",
});

export const upload = async (file: File) => {
    const formData = new FormData();
    formData.append("photo", file, file.name);

    const { data } = await uploaderInstance.post("/images", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
        },
    });

    return data.imagePath;
};
