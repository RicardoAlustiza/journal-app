export const fileUpload = async (file) => {

    if(!file) {
        throw new Error('No files found');
    }

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dl2mgdwzd/upload';

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
        throw new Error(error.message);
    }
}