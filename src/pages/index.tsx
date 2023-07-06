import Head from "next/head";
import React from "react";
import config from "../../config.json";
import { Input } from "../components/input";
import { useHistory } from "../components/history/hook";
import { History } from "../components/history/History";
import { banner } from "../utils/bin";

interface IndexPageProps {
	inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
	const containerRef = React.useRef(null);
	<div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow"></div>;
	const {
		history,
		command,
		lastCommandIndex,
		setCommand,
		setHistory,
		clearHistory,
		setLastCommandIndex,
	} = useHistory([]);

	const init = React.useCallback(() => setHistory(banner()), []);

	React.useEffect(() => {
		init();
	}, [init]);

	React.useEffect(() => {
		if (inputRef.current) {
			inputRef.current.scrollIntoView();
			inputRef.current.focus({ preventScroll: true });
		}
	}, [history]);

	return (
		<>
			<Head>
				<title>{config.title}</title>
			</Head>
			{/* <video
				id="background-video"
				autoPlay
				loop
				muted
				// poster="https://assets.codepen.io/6093409/river.jpg"
			>
				
				<source src="https://i.gifer.com/3OYz2.mp4" type="video/mp4"></source>
				
				Your browser does not support the video tag.
			</video> */}
			<iframe src="https://i.ibb.co/zbMNvkf/image.png"></iframe>
			{/* <iframe src="https://www.youtube.com/embed/0JsDSxAQNOo?rel=0&amp;autoplay=1&mute=1&controls=0&modestbranding=1&playlist=0JsDSxAQNOo&loop=1"></iframe> */}
			<div className="p-8 overflow-hidden h-full border-2 rounded border-light-white">
				<div ref={containerRef} className="overflow-y-auto h-full">
					<History history={history} />

					<Input
						inputRef={inputRef}
						containerRef={containerRef}
						command={command}
						history={history}
						lastCommandIndex={lastCommandIndex}
						setCommand={setCommand}
						setHistory={setHistory}
						setLastCommandIndex={setLastCommandIndex}
						clearHistory={clearHistory}
					/>
				</div>
			</div>
		</>
	);
};

export default IndexPage;
