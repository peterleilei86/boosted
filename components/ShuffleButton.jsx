import {useState} from 'react'
import {Button} from '@/components/ui/button'
import {Shuffle} from 'lucide-react'

export function ShuffleButton({shuffle, deShuffle, isPlaying, progress}) {
	const [onShuffle, setOnShuffle] = useState(false)

	const toggleOnShuffle = () => {
		// do not allow shuffling if the song is playing
		if (isPlaying || progress > 0) {
			return
		}

		setOnShuffle((onShuffle) => !onShuffle)
		if (!onShuffle) {
			shuffle()
		} else {
			deShuffle()
		}
	}

	return (
		<Button
			onClick={toggleOnShuffle}
			variant='ghost'
			size='icon'
			className='hover:bg-white'
		>
			<Shuffle
				className={`w-8 h-8 text-slate-500 hover:text-slate-800 ${
					onShuffle ? 'text-slate-800' : ''
				}`}
			/>
		</Button>
	)
}
