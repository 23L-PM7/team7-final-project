import { Kitchen } from "@/components/icons/amenitiesIcons/Kitchen";

export default function PublishCelebration() {
  return (
    <div className="container mx-auto pt-32">
      <div className="border">
        <div>
          <h1>Review your listing</h1>
        </div>
        <div>
          <h1>An entire place</h1>
          <p>Guests have the whole place to themselves.</p>
          <div>
            <Kitchen />
          </div>
        </div>
      </div>
    </div>
  );
}
