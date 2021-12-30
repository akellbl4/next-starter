import Head from 'next/head'
import { useRef, useState } from 'react'

import { Button } from 'components/Button'

export default function Home() {
	const [message, setMessage] = useState<string>(null)
	const timerRef = useRef<number>()

	function handleClickButton() {
		clearTimeout(timerRef.current)
		setMessage('Hello, World!')

		timerRef.current = window.setTimeout(() => {
			setMessage(null)
		}, 3_000)
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Create Next App</title>
			</Head>
			<h1 className="text-4xl font-bold mb-4">Welcome to Next.js</h1>
			<form>
				<Button onClick={handleClickButton}>Button</Button>
				{message && (
					<p className="text-center text-slate-700" role="alert">
						{message}
					</p>
				)}
			</form>
		</div>
	)
}
