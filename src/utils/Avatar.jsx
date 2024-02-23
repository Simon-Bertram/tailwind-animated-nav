import { getImageUrl } from "./imageUtil";

const Avatar = ({ person, size }) => {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
