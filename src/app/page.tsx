import Image from "next/image";
import Card from "@/components/atoms/cards/Card";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";

async function getData() {
  const res = await fetch('https://rickandmortyapi.com/api/location')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()

  console.log(data.results)

  return (
    <main className="flex flex-col py-20 px-20">
      <div className="pb-10">
    <SearchBar />

      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4  gap-4 px-10">
      {
        data.results.map((location) => {
          return <Card image='https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg' name={location.name} type={location.type} residents={location.residents}/>

        })
      }
      </div>
    </main>
  );
}
