export default function Home() {
  const didWeGetIt = false;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col gap-y-10 font-extrabold ">
        <div className="text-9xl text-neutral-800">Did we get a coat hanger yet?</div>
        <div className={`text-8xl ${didWeGetIt ? "text-blue-400" : "text-orange-400"}`}>
          {didWeGetIt ? "Yes." : "No."}
        </div>
      </div>
    </main>
  );
}
