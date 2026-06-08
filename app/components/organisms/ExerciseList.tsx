import ExerciseCard from "./ExerciseCard";

export default function ExerciseList() {
    const exercises = [
        {
            image:
                "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
            title: "Puxada frontal",
            subtitle: "3 séries x 12 repetições",
        },
        {
            image:
                "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
            title: "Remada curvada",
            subtitle: "3 séries x 12 repetições",
        },
        {
            image:
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
            title: "Remada unilateral",
            subtitle: "3 séries x 12 repetições",
        },
        {
            image:
                "https://images.unsplash.com/photo-1518611012118-696072aa579a",
            title: "Levantamento terra",
            subtitle: "3 séries x 12 repetições",
        },
    ];

    return (
        <div className="space-y-4">
            {exercises.map((exercise, index) => (
                <ExerciseCard
                    key={index}
                    image={exercise.image}
                    title={exercise.title}
                    subtitle={exercise.subtitle}
                />
            ))}
        </div>
    );
}
