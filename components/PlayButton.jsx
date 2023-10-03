import {Button} from '@/components/ui/button'
import {PlayCircle, PauseCircle} from 'lucide-react'

export function PlayButton({isPlaying, setIsPlaying}) {
	return (
		<Button variant='ghost' size='icon' className='hover:bg-white'>
			{isPlaying ? (
				<PauseCircle
					onClick={() => setIsPlaying(false)}
					className='w-8 h-8 text-slate-500 hover:text-slate-800'
				/>
			) : (
				<PlayCircle
					onClick={() => setIsPlaying(true)}
					className='w-8 h-8 text-slate-500 hover:text-slate-800'
				/>
			)}
		</Button>
	)
}
