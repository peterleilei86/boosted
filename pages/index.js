import {useEffect, useState} from 'react'
import {Slider} from '@/components/ui/slider'
import Image from 'next/image'
import {RepeatButton} from '@/components/RepeatButton'
import {ShuffleButton} from '@/components/ShuffleButton'
import {Playlist} from '@/components/Playlist'
import {PlayButton} from '@/components/PlayButton'
import {BackButton} from '@/components/BackButton'
import {NextButton} from '@/components/NextButton'

import data from './songlist.json'

export default function Home() {
	const [playList, setPlayList] = useState(data.songs)
	const [current, setCurrent] = useState(0)
	const [isPlaying, setIsPlaying] = useState(false)
	const [progress, setProgress] = useState(0)
	const [onRepeat, setOnRepeat] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			if (isPlaying && progress < playList[current].duration) {
				setProgress((progress) => progress + 1)
			}
		}, 1000)
		return () => clearInterval(interval)
	}, [isPlaying, current, progress])

	useEffect(() => {
		if (progress === playList[current].duration) {
			setProgress(0)
			// auto play next song
			handleNext()
		}
	}, [progress])

	const handleNext = () => {
		if (onRepeat) {
			setProgress(0)
			return
		}

		if (current === playList.length - 1) {
			setCurrent(0)
		} else {
			setCurrent(current + 1)
		}
		setProgress(0)
	}

	const handleBackToStart = () => {
		setProgress(0)
	}

	const handlePrevious = () => {
		if (current === 0) {
			setCurrent(playList.length - 1)
		} else {
			setCurrent(current - 1)
		}
		setProgress(0)
	}

	const toggleOnRepeat = () => setOnRepeat((onRepeat) => !onRepeat)

	const shuffle = () => {
		const newList = playList.concat().sort(() => Math.random() - 0.5)
		setPlayList(newList)
	}

	const deShuffle = () => {
		setPlayList(data.songs)
	}

	const handleSelect = (index) => {
		setCurrent(index)
		setProgress(0)
	}

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
						<p className='text-2xl font-semibold'>{playList[current].title}</p>
						<p className='text-xl'>{playList[current].artist}</p>
					</div>
					<div className='p-12'>
						<Slider
							className='my-6'
							value={[progress]}
							onValueChange={(value) => setProgress(value[0])}
							max={playList[current].duration}
							step={1}
						/>
						<div className='flex'>
							<div className='flex flex-1 gap-10'>
								<BackButton
									onClick={handleBackToStart}
									onDoubleClick={handlePrevious}
								/>
								<PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
								<NextButton onClick={handleNext} />
							</div>
							<div className='flex justify-end flex-1 gap-10'>
								<ShuffleButton
									shuffle={shuffle}
									deShuffle={deShuffle}
									isPlaying={isPlaying}
									progress={progress}
								/>
								<RepeatButton
									onRepeat={onRepeat}
									toggleOnRepeat={toggleOnRepeat}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='w-2/6 border-l-2 border-slate-100'>
					<h2 className='py-4 text-4xl font-semibold text-center'>Playlists</h2>
					<Playlist
						songs={playList}
						onSelect={handleSelect}
						current={current}
					/>
				</div>
			</div>
		</div>
	)
}
