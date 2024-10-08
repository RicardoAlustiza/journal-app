import { getEnvironments } from '../../src/helpers/getEnvironments';
import { fileUpload } from '../../src/helpers/fileUpload';
import cloudinary from 'cloudinary';

const {
    VITE_CLOUDINARY_CLOUD_NAME,
    VITE_CLOUDINARY_API_KEY,
    VITE_CLOUDINARY_API_SECRET
} = getEnvironments();

//Put your cloudinary credentials here to run the test
cloudinary.config({
    cloud_name: VITE_CLOUDINARY_CLOUD_NAME,
    api_key: VITE_CLOUDINARY_API_KEY,
    api_secret: VITE_CLOUDINARY_API_SECRET
});

describe('File Uploads', () => {

    test('Should upload the file correctly to cloudinary', async () => {

        //example img url
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        // Borrar imagen por ID
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.png','');

        cloudinary.v2.api.delete_resources( imageId, {});
    });

    test('Should return an error', async () => {
        const file = new File([], 'image.jpg');
        const url = await fileUpload(file);
        
        expect(url).toBe(null);
    });
});