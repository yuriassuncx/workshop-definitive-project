import { PulseLoader } from "react-spinners"

export function Spinner() {
    return (
        <div className="flex mx-auto inset-0 items-center justify-center sticky top-0 h-screen max-w-[1350px] px-8">
            <PulseLoader color="#36d7b7" />
        </div>
    )
}