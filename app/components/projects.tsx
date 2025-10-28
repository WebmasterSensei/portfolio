import { BentoComponent } from "./partials/bento-grid";
import TextDividerComponent from "./partials/text-divider";

export default function Projects() {
    return (
        <>
            <div className="max-w-6xl w-full m-auto">
                <div className="mb-20 mt-52">
                    <TextDividerComponent title="Projects" sub="my projects" />
                </div>
                <BentoComponent />
            </div>
        </>
    )
}