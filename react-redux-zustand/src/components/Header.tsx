import { useCurrentLesson } from "../helper";

export function Header() {
	const { currentModule, currentLesson } = useCurrentLesson();

	return (
		<header className="flex flex-col gap-1">
			<h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
			<span className="text-sm text-zinc-400">
				Módulo: {currentModule?.title}
			</span>
		</header>
	);
}
