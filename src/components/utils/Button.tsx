
export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="button hover:btn-hover active:btn-active">{children}</button>
    )
}
