import {Button} from '@/components/ui/button'
import {Slider} from '@/components/ui/slider'
import {ScrollArea} from '@/components/ui/scroll-area'
import {
	PlayCircle,
	PlayCircleIcon,
	Repeat,
	Repeat1,
	Shuffle,
	SkipBack,
	SkipForward,
} from 'lucide-react'

import data from './songlist.json'
import Image from 'next/image'

// songs contains an array of objects, each with a title, artist, duration in seconds. Refer to README for more details.

/*
{
    "title": "#40",
    "artist": "Dave Matthews",
    "duration": 35
}, 
*/

export default function Home() {
	return (
		<div className='flex items-center justify-center h-screen border-2 border-b-slate-500'>
			<div className='flex w-2/3 border-2 border-red-50 h-3/4'>
				<div className='flex flex-col justify-around w-4/6'>
					<div className='flex flex-col items-center gap-8 p-12'>
						<Image
							src='https://source.unsplash.com/random/400X400/?album'
							alt='album cover'
							width={'300px'}
							height={'300px'}
							className='rounded-xl max-w-[400px] max-h-[400px]'
						/>
						<p className='text-2xl font-semibold'>Song name</p>
						<p className='text-xl'>artist name</p>
					</div>
					<div className='p-12'>
						<Slider className='my-6' />
						<div className='flex'>
							<div className='flex flex-1 gap-10'>
								<Button variant='ghost' size='icon' className='hover:bg-white'>
									<SkipBack className='w-8 h-8 text-slate-500 hover:text-slate-800' />
								</Button>
								<Button variant='ghost' size='icon' className='hover:bg-white'>
									<PlayCircleIcon className='w-8 h-8 text-slate-500 hover:text-slate-800' />
								</Button>
								<Button variant='ghost' size='icon' className='hover:bg-white'>
									<SkipForward className='w-8 h-8 text-slate-500 hover:text-slate-800' />
								</Button>
							</div>
							<div className='flex justify-end flex-1 gap-10'>
								<Button variant='ghost' size='icon' className='hover:bg-white'>
									<Shuffle className='w-8 h-8 text-slate-500 hover:text-slate-800' />
								</Button>
								<Button variant='ghost' size='icon' className='hover:bg-white'>
									<Repeat1 className='w-8 h-8 text-slate-500 hover:text-slate-800' />
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className='box-border w-2/6'>
					<h2 className='py-4 text-4xl font-semibold text-center'>Playlists</h2>
					<ScrollArea className='h-[680px] border-l-2 border-slate-100 pb-2'>
						<div>
							{data.songs.map((song, i) => (
								<Button
									variant='ghost'
									className='flex-col items-start justify-center w-full px-6 py-10 flex-nowrap'
								>
									<p className='text-lg font-semibold'>{song.title}</p>
									<p className='italic'>by {song.artist}</p>
								</Button>
							))}
						</div>
					</ScrollArea>
				</div>
			</div>
		</div>
	)
}
