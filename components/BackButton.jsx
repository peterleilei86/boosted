import {Button} from '@/components/ui/button'
import {SkipBack} from 'lucide-react'

export function BackButton({onClick, onDoubleClick}) {
	return (
		<Button
			variant='ghost'
			size='icon'
			className='hover:bg-white'
			onClick={onClick}
			onDoubleClick={onDoubleClick}
		>
			<SkipBack className='w-8 h-8 text-slate-500 hover:text-slate-800' />
		</Button>
	)
}
