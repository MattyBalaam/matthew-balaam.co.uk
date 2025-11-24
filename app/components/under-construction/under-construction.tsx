import imageUrl, {
  metadata,
} from "~/images/MoMotorCitySpeedway1656construct.gif";

console.log(imageUrl);

export const UnderConstruction = () => (
  <>
    <img
      src={imageUrl}
      width={metadata.width}
      height={metadata.height}
      alt="This page is under construction"
    />
  </>
);
