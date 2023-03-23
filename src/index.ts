const range = document.getElementById('range') as HTMLInputElement

range.addEventListener('input', (e) => {
    const value = (e.target as HTMLInputElement).value
    const label = <HTMLElement>( <HTMLElement>e.target ).nextElementSibling

    const range_width: string = getComputedStyle(e.target as HTMLInputElement).getPropertyValue('width')
    const label_width: string = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = +(e.target as HTMLInputElement).max
    const min = +(e.target as HTMLInputElement).min

    const left: number = +value * (num_width / max) - num_label_width / 2 + scale(+value, min, max, 10, -10)

    label.style.left = `${left}px`


    label.innerHTML = value

})

function scale (number: number, inMin: number, inMax: number, outMin: number, outMax: number) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}