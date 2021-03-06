const customName = document.getElementById('customname')
const randomize = document.querySelector('.randomize')
const story = document.querySelector('.story')

const storyText =
	'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

const insertX = [ 'Willy the Goblin', 'Big Daddy', 'Father Christmas' ]
const insertY = [ 'the soup kitchen', 'Disneyland', 'the White House' ]
const insertZ = [
	'spontaneously combusted',
	'melted into a puddle on the sidewalk',
	'turned into a slug and crawled away',
]

function randomValueFromArray(array) {
	const random = Math.floor(Math.random() * array.length)
	return array[random]
}

randomize.addEventListener('click', result)

function result() {
	if (customName.value !== '') {
		var name = customName.value
	}

	if (document.getElementById('uk').checked) {
		var weight = Math.round(300)
		var temperature = Math.round(94)
		var weightUnit = 'stone'
		var temperatureUnit = 'centigrade'
	} else {
		var weight = Math.round(21)
		var temperature = Math.round(34)
		var weightUnit = 'pounds'
		var temperatureUnit = 'fahrenheit'
	}
	const xItem = randomValueFromArray(insertX)
	const yItem = randomValueFromArray(insertY)
	const zItem = randomValueFromArray(insertZ)

	var newStory = `It was ${temperature} ${temperatureUnit} outside, so ${yItem} went for a walk. 
    When they got to ${yItem}, they stared in horror for a few moments,
    then ${zItem}. ${name} saw the whole thing, but was not surprised — 
    ${xItem} weighs ${weight} ${weightUnit}, and it was a hot day.`

	story.textContent = newStory
	story.style.visibility = 'visible'
}
