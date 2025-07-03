import Image from "next/image"

const tools = [
  { src: "/vscode.png", alt: "VS Code" },
  { src: "/react.png", alt: "React" },
  { src: "/firebase.png", alt: "Firebase" },
  { src: "/figma.png", alt: "Figma" },
  { src: "/java-script.png", alt: "JavaScript" },
  { src: "/html.png", alt: "HTML" },
  { src: "/typescript.png", alt: "TypeScript" },
  { src: "/css.png", alt: "CSS" },
]

export default function ResponsiveToolsSection() {
  return (
    <div className="w-full">
      <h4 className="mb-4 sm:mb-6 text-base sm:text-lg lg:text-[18px] text-gray-700 font-Ovo">Tools I use</h4>

      {/* Alternative: Flex with wrap for more dynamic layout */}
      <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 max-w-2xl">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 aspect-square border
              border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 
              hover:shadow-lg hover:border-gray-500 transition-all"
          >
            <Image src={tool.src || "/placeholder.svg"} alt={tool.alt} className="w-5 sm:w-7" width={24} height={24} />
          </div>
        ))}
      </div>
    </div>
  )
}
