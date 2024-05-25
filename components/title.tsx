export default function Title({ idx, title }: { idx: string; title: string }) {
    return (
        <h2 className=" justify-center md:justify-start text-[20px] md:text-[28px] font-barlowcondensed uppercase flex items-center gap-4  ">
            <span className=" text-card ">{idx}</span>
            <span>{title}</span>
        </h2>
    );
}
