import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
          <div className="w-full border-b border-dashed border-gray-700">
          <div className="mx-auto py-12 max-w-7xl border-l border-r border-dashed border-gray-700">
            <div className="lg:grid lg:grid-cols-12 items-stretch">
              
              {/* Profile Picture */}
              <div className="px-8 lg:col-span-4 flex justify-end">
                <Image
                  width={260}
                  height={260}
                  src="/profile_photo.jpeg"
                  alt="Profile"
                  className="rounded-full border-5 border-blue-300 object-cover"
                />
              </div>
              {/* Personal Introduction */}
              <div className="px-5 lg:col-span-7 mt-10 lg:mt-0 text-center lg:text-left ">
                <h1 className="text-3xl font-bold text-white my-4">hi im hrishi <span className="ml-1 waving-hand">👋</span></h1>
                <p className="text-lg text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et quia nemo hic sapiente sunt quibusdam officia sequi sit fuga alias aliquid voluptatum vitae vel, eos nulla necessitatibus! Officiis, facilis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut fuga labore, dignissimos corporis tenetur, facere minima nemo dolorem qui quibusdam consequatur officia iure, alias voluptatum! Magni deserunt incidunt ullam.
                </p>
              </div>
            </div>
          </div>
          </div>
          <div></div>
      </main>
    </div>

  );
}
