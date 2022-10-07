const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const computerHTMLMaker = (computerObject) => {
    const computerHTMLSection = `<section id="computer--${computer.id}">\n<h1>${computer.manufacturer} ${computer.make}</h1>\n<div>Model: ${computer.model}</div>\n<div>Memory: ${computer.specs.memory} GB</div>\n<div>Hard drive space: ${computer.specs.hardDrive}</div>\n<div>Processor speed: ${computer.specs.processor} Ghz</div>\n</section>`

    return computerHTMLSection
}

const HTMLRepresentationOfComputerObject = computerHTMLMaker(computer)
console.log(HTMLRepresentationOfComputerObject)
