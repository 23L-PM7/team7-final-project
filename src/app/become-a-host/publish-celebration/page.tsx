// import { Kitchen } from "@/components/icons/amenitiesIcons/Kitchen";

export default function PublishCelebration() {
  return (
    <div className="container ratio ratio-16x6 mx-auto  pt-32">
      <video className="h-full w-[] rounded-lg" controls autoPlay>
        <source
          className="z-10"
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
