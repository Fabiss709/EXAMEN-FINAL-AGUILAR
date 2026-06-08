type Props = {
    src: string;
    alt: string;
};

export default function ExerciseImage({ src, alt }: Props) {
    return (
        <img
            src={src}
            alt={alt}
            className="w-16 h-16 rounded-xl object-cover"
        />
    );
}