interface Props extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'className'> {
	/** Props */
}

export function Button(props: Props) {
	return <button className="text-white text-sm px-3 py-1 rounded bg-lime-700" type="button" {...props} />
}
