import {ScrollArea} from '@/components/ui/scroll-area'
import {Button} from '@/components/ui/button'

export function Playlist({current, songs, onSelect}) {
	return (
		<ScrollArea className='h-[680px]  pb-2'>
			<div>
				{songs.map((song, i) => (
					<Button
						onClick={() => onSelect(i)}
						key={song.id}
						variant='ghost'
						className={
							'flex-col items-start justify-center p-6 w-full h-fit rounded-none' +
							(i === current ? ' bg-slate-100' : '')
						}
					>
						<p className='text-lg font-semibold truncate'>{song.title}</p>
						<p className='italic'>by {song.artist}</p>
					</Button>
				))}
			</div>
		</ScrollArea>
	)
}
