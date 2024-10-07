import { fileUpload } from '../../src/helpers/fileUpload';
import { v2 as cloudinary } from 'cloudinary';

//Put your cloudinary credentials here to run the test
cloudinary.config({
    cloud_name: "",
    api_key: "",
    api_secret: "",
    secure: true
});

describe('File Uploads', () => {

    test('Should upload the file correctly to cloudinary', async () => {

        //example img url
        const imageUrl = 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg';
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], 'image.jpg');
        
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        //delete image from cloudinary after test
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        await cloudinary.api.delete_resources([ 'journal/' + imageId], { resource_type: 'image' });
    });

    test('Should return an error', async () => {
        const file = new File([], 'image.jpg');
        const url = await fileUpload(file);
        
        expect(url).toBe(null);
    });
});