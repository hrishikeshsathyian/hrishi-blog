import Image from "next/image";

export default function Home() {
  const width = 200; 
  const height = 200;
  const src = "/profile_photo.jpeg";
  return (
    <div>
      <div style={{ width: width, height: height, borderRadius: '50%', overflow: 'hidden' }}>
      <Image
        src={src}
        alt={"Photo of Myself :p"}
        width={width}
        height={height}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Make the image fill the circle
      />
    </div>
    </div>
  );
}
