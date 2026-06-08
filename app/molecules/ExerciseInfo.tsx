import ExerciseTitle from "../atoms/ExerciseTitle";
import ExerciseSubtitle from "../atoms/ExerciseSubtitle";

type Props = {
    title: string;
    subtitle: string;
};

export default function ExerciseInfo({
    title,
    subtitle,
}: Props) {
    return (
        <div>
            <ExerciseTitle title={title} />
            <ExerciseSubtitle subtitle={subtitle} />
        </div>
    );
}
