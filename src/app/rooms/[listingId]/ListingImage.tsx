import { ImageList, ImageListItem } from "@mui/material";
import { images } from "@/lib/images";

export function ListingImage() {
    

    return (
        <div className="w-full h-[416px] rounded-xl">
            <ImageList
                sx={{ width: 500, height: 450 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {images.map((image, index) => (
                    <ImageListItem key={index} cols={image.cols || 1} rows={image.rows || 1}>
                        <img
                            {...srcset(v.img, 121, image.rows, image.cols)}
                            alt={image.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}