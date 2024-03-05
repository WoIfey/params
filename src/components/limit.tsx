'use client'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Limit() {
	const params = useSearchParams()
	const [limit, setLimit] = useState(params.get('limit') || '1')

	const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newLimit = e.target.value
		setLimit(newLimit)
		const newParams = new URLSearchParams(params)
		newParams.set('limit', newLimit)
		window.history.replaceState({}, '', `?${newParams.toString()}`)
	}

	return (
		<div>
			<label htmlFor="limit" className="leading-6 text-white">
				Limit
			</label>
			<div className="mt-2">
				<input
					type="number"
					id="limit"
					name="limit"
					placeholder="1"
					min={0}
					max={10000}
					value={limit}
					onChange={handleLimitChange}
					className={`outline-none block w-32 rounded-md border-0 bg-white/5 p-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6`}
				/>
			</div>
		</div>
	)
}
