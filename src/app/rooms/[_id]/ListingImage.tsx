import { ImageList, ImageListItem } from "@mui/material";
import { Stack } from "@mui/system";
import { TbUvIndex } from "react-icons/tb";
import { useListingDetails } from "../../globals";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function ListingImage() {
  const { listingDetails }: any = useListingDetails();

  console.log(listingDetails);

  return (
    <Stack spacing={4} className="w-full h-[560px] rounded-xl">
      <ImageList
        sx={{ borderRadius: "16px" }}
        variant="quilted"
        cols={3}
        rowHeight={270}
      >
        {listingDetails.images.map((image: string, index: number) => (
          <ImageListItem key={index}>
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}
