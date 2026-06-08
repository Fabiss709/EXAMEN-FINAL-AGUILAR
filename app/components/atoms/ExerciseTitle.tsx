type Props = {
    title: string;
};

export default function ExerciseTitle({ title }: Props) {
    return (
        <h2 className="text-white text-2xl font-bold">
            {title}
        </h2>
    );
}
