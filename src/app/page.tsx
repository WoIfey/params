import Limit from '@/components/limit'
import Quotes from '@/components/quotes'
import { getData } from '@/utils/handleDatabase'

export default async function Home() {
	let data = await getData()
	data.sort((a, b) => a.id - b.id)
	return (
		<div className="bg-slate-950 min-h-dvh">
			<div className="divide-y divide-white/5">
				<div className="fixed bg-slate-900 py-5 px-8 z-30 w-full">
					<div className="md:col-span-4 text-white">
						<div className="text-center sm:text-left flex items-center justify-between sm:flex-row flex-col gap-4">
							<h2 className="text-3xl font-bold leading-7 tracking-widest italic">
								Params
							</h2>
							<Limit />
						</div>
					</div>
				</div>
				<div className="pt-40 sm:pt-28">
					<Quotes data={data} />
				</div>
			</div>
		</div>
	)
}
