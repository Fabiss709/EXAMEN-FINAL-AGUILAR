import ExerciseImage from "../atoms/ExerciseImage";
import ExerciseInfo from "../molecules/ExerciseInfo";
import ArrowIcon from "../atoms/ArrowIcon";

type Props = {
    image: string;
    title: string;
    subtitle: string;
};

export default function ExerciseCard({
    image,
    title,
    subtitle,
}: Props) {
    return (
        <div className="
      bg-zinc-800
      rounded-2xl
      p-4
      flex
      items-center
      justify-between
      hover:bg-zinc-700
      transition
    ">
            <div className="flex items-center gap-4">
                <ExerciseImage
                    src={image}
                    alt={title}
                />

                <ExerciseInfo
                    title={title}
                    subtitle={subtitle}
                />
            </div>

            <ArrowIcon />
        </div>
    );
}
