import Logo from "@/components/logo";

const Header = () => {
    return (
        <header className="bg-slate-800">
            <div className="flex h-24 shrink-0 items-center md:h-52 p-4 w-4/5 mx-auto">
                <Logo />
            </div>
        </header>
    )
}
export default Header;