import Sidebar from "@components/sidebar/sidebar";

export default async function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full h-screen flex flex-row justify-center">
      <Sidebar />
      <div className="">{children}</div>
    </div>
  );
}
