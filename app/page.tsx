import ExerciseList from "./components/organisms/ExerciseList";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-zinc-950
        flex
        justify-center
        py-10
      "
    >
      <div className="w-full max-w-3xl">
        <div className="flex justify-between mb-6">
          <h1 className="text-white text-4xl font-bold">
            Exercícios
          </h1>

          <span className="text-white text-3xl">
            4
          </span>
        </div>

        <ExerciseList />
      </div>
    </main>
  );
}
