import Image from "next/image";
import Share from "@/components/share";

type Props = {
  princess: string;
};

const images: Record<string, string> = {
  Cinderella: "/cinderella.png",
  Ariel: "/ariel.png",
  Rapunzel: "/rapunzel.png",
  Belle: "/belle.png",
  Tiana: "/tiana.png",
};

export default function QuizResult({ princess }: Props) {
  const imageSrc = images[princess] || "/cinderella.png";
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">You are most like {princess}!</h2>
      <Image src={imageSrc} alt={princess} width={512} height={512} />
      <Share
        text={`I just took the Disney Princess Quiz and I am most like ${princess}! ${process.env.NEXT_PUBLIC_URL}`}
      />
    </div>
  );
}
