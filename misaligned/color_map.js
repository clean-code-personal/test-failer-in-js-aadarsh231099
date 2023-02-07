function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let map = [];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            map.push(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return map;
}

module.exports=print_color_map;