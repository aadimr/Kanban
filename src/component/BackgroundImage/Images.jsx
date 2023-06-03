
import styles from './Images.module.css';
import { images } from '../../asset/ImageData';

const Images = ({ handleSelectImage }) => {

    const images = [
        {
            id: 1,
            img: "https://e0.pxfuel.com/wallpapers/356/696/desktop-wallpaper-plain-background-awesome-black-windows-10.jpg"
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2017/08/07/22/10/lake-2608425_960_720.jpg"
        },
        {
            id: 3,
            img: "https://cdn.pixabay.com/photo/2018/04/28/18/55/marguerite-3357989_960_720.jpg"
        },
        {
            id: 4,
            img: "https://cdn.pixabay.com/photo/2023/01/29/21/18/lake-7754160_960_720.jpg"
        },
        {
            id: 5,
            img: 'https://cdn.pixabay.com/photo/2017/07/22/00/16/sunset-2527534_960_720.jpg'
        },
        {
            id: 6,
            img: "https://cdn.pixabay.com/photo/2018/09/15/16/25/sunset-3679736_960_720.jpg"
        },
        {
            id: 7,
            img: 'https://cdn.pixabay.com/photo/2023/05/13/16/40/landscape-7990899_960_720.jpg'
        },
        {
            id: 8,
            img: 'https://wallpaperset.com/w/full/0/f/9/416782.jpg'
        },
        {
            id: 9,
            img: 'https://cdn.pixabay.com/photo/2017/11/05/12/35/trees-2920264_960_720.jpg'
        },
        {
            id: 10,
            img: 'https://cdn.pixabay.com/photo/2020/05/24/02/35/grass-5212125_960_720.jpg'
        },
        {
            id: 11,
            img: 'https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525091_960_720.jpg'
        },
        {
            id: 12,
            img: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 13,
            img: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 14,
            img: 'https://images.pexels.com/photos/1174122/pexels-photo-1174122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 15,
            img: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 16,
            img: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 17,
            img: 'https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 18,
            img: 'https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
    ]

    const handleImageClick = (image) => {
        handleSelectImage(image);
    };

    return (
        <div className={styles.images}>
            {images.map((image) => (
                <div
                    key={image.id}
                    className={styles.img}
                    onClick={() => handleImageClick(image)}
                >
                    <img src={image.img} alt="images" />
                </div>
            ))}
        </div>
    );
};

export default Images;
