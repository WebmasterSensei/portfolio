import { VideoText } from "@/components/ui/video-text"

export function VideoTextComponent({ text }: { text: string }) {
    return (
        <div className="relative h-[100px] w-full overflow-hidden">
            <VideoText src="https://www.pexels.com/download/video/857018/">
                {text}
            </VideoText>
        </div>
    )
}
