import { BottomNavigation, SideMenu } from "@/shared"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


interface Props {
  children: React.ReactNode ;
}

//RootLayout herada de children que es un componente de react
export default async function RootLayout({children} : Props) {

  const session = await getServerSession(authOptions);
  // console.log(session)
  
  if(!session){
    redirect('/api/auth/signin')
  }

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
