'use client'
import { useSearchParams } from 'next/navigation'

export default function Quotes({
	data,
	limit,
}: {
	data: any[]
	limit: number
}) {
	const searchParams = useSearchParams()
	const search = searchParams.get('limit')
	const limitValue = search ? parseInt(search) : limit
	const limitData = data.slice(0, limitValue)

	return (
		<>
			<div className="text-white sm:p-8 p-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{limitData.map(q => (
					<div
						key={q.id}
						className="relative flex flex-col bg-slate-800 rounded-lg p-4"
					>
						<div className="flex flex-col justify-between gap-1.5">
							<div className="text-lg break-all">{q.description}</div>
							<div className="text-base font-thin text-end break-all">— {q.item}</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
