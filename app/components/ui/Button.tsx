import clsx from "clsx";
export default function Button({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <button className={clsx("bg-primary text-white px-4 py-2 rounded-md", className)}>
            {children}
        </button>
    )   
}