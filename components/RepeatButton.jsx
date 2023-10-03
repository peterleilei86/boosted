import {Button} from '@/components/ui/button'
import {Repeat1} from 'lucide-react'

export function RepeatButton({onRepeat, toggleOnRepeat}) {
	return (
		<Button
			onClick={toggleOnRepeat}
			variant='ghost'
			size='icon'
			className='hover:bg-white'
		>
			<Repeat1
				className={`w-8 h-8 text-slate-500 hover:text-slate-800 ${
					onRepeat ? 'text-slate-800' : ''
				}`}
			/>
		</Button>
	)
}
