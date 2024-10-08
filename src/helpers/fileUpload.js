import { getEnvironments } from './getEnvironments';

export const fileUpload = async (file) => {

    const {
        VITE_CLOUDINARY_CLOUD_NAME  
    } = getEnvironments();

    if(!file) {
        return null;
    }

    const cloudUrl = `https://api.cloudinary.com/v1_1/${VITE_CLOUDINARY_CLOUD_NAME}/upload`;

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(!response.ok) {
            throw new Error('Error uploading file');
        }

        const cloudResponse = await response.json();
        return cloudResponse.secure_url;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}