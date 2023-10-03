import {Button} from '@/components/ui/button'
import {SkipForward} from 'lucide-react'

export function NextButton({onClick}) {
	return (
		<Button
			onClick={onClick}
			variant='ghost'
			size='icon'
			className='hover:bg-white'
		>
			<SkipForward className='w-8 h-8 text-slate-500 hover:text-slate-800' />
		</Button>
	)
}
