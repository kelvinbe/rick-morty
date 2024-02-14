import Image from "next/image";
import Card from "@/components/atoms/cards/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card image='https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg' details="Testing details"/>
    </main>
  );
}
