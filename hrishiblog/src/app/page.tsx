import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  const width = 320; 
  const height = 320;
  const src = "/globe.svg";
  return (
    <div>
      <Navbar />
      <div style={{ width: width, height: height, borderRadius: '50%', overflow: 'hidden' }}>
      <Image
        src={src}
        alt={"Profile Photo"}
        width={width}
        height={height}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
    </div>
  );
}
