import { BottomNavigation, SideMenu } from "@/shared"


interface Props {
  children: React.ReactNode
}

//RootLayout herada de children que es un componente de react
export default function RootLayout({children} : Props) {
  return (
    <div className="flex flex-col md:flex-row relative">
      <SideMenu/>
      <main className="w-full lg:10/12 h-screen md:overflow-y-scroll p-10">
        {children}
      </main>
      <BottomNavigation/>
    </div>
  )
}
