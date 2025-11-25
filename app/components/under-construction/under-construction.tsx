import imageUrl, {
  metadata,
} from "~/images/MoMotorCitySpeedway1656construct.gif";

export function UnderConstruction() {
  return (
    <img
      src={imageUrl}
      width={metadata.width}
      height={metadata.height}
      alt="This page is under construction"
    />
  );
}
