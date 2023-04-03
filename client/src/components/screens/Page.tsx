export default function Page({
  hero,
  children,
}: {
  hero: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <>{!hero ? null : hero}</>
      <main className="PageContent" id="mainContent">
        <>{!children ? null : children}</>
      </main>
    </>
  );
}
