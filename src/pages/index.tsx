import Head from 'next/head'
import { Button } from 'components/Button'

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-4xl font-bold mb-4">Welcome to Next.js</h1>
			<form>
				<Button>Button</Button>
			</form>
		</div>
	)
}
