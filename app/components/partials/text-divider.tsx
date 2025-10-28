interface Type {
    title: string,
    sub: string,
}
export default function TextDividerComponent({title, sub}: Type) {
    return (
        <>
            <div className="text-center">
                <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-slate-600 to-gray-200/80 bg-clip-text text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    {title}
                </span>
                <p className="text-white/50 mt-4">{sub}</p>
            </div>
        </>
    )
}