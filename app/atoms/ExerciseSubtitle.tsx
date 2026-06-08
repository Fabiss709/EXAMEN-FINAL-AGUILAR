type Props = {
    subtitle: string;
};

export default function ExerciseSubtitle({ subtitle }: Props) {
    return (
        <p className="text-gray-400 text-lg">
            {subtitle}
        </p>
    );
}
