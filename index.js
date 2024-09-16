// dom listeners

window.onresize = () => window.location.href = "/"

// constants

const PI = Math.PI

const COLORS = {
    border: "#392749",
    layerOne: {
        yellow: "#CBB530",
        orange: "#C46315",
        red: "#A0374D",
        white: "#e1e1e1",
        green: "#2F331E"
    }
}

// utility functions

const getCenter = (canvas) => {
    return {
        x: canvas.width / 2,
        y: canvas.width / 2
    }
}

const getUnit = (canvas) => {
    return canvas.width
}

// class definitions

class Layer {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.unit = getUnit(canvas)
        this.center = getCenter(canvas)
    }
}

class LayerOne extends Layer {
    constructor(ctx, canvas) {
        super(ctx, canvas)
        this.sectionOneLastDescendFactor = 0;
        this.sectionOneLastRadius = 0;
    }
    sectionOne(start, end, isLine = false, color = "") {
        // boxy middle part

        if (this.unit >= 700) {
            var descendFactor = 11
        }
        else {
            var descendFactor = 5
        }


        // yellow line
        this.ctx.beginPath();
        this.ctx.strokeStyle = isLine ? color : COLORS.layerOne.yellow;
        this.ctx.lineWidth = isLine ? this.unit * 0.05 : this.unit * 0.05
        this.ctx.arc(center.x, center.y, (this.unit / 2) - (this.unit * 0.025) - descendFactor, start, end)
        this.ctx.stroke();
        this.ctx.closePath();


        // orange line
        this.ctx.beginPath();
        this.ctx.strokeStyle = isLine ? color : COLORS.layerOne.orange;
        this.ctx.lineWidth = isLine ? this.unit * 0.05 : this.unit * 0.05
        this.ctx.arc(center.x, center.y, (this.unit / 2) - (this.unit * 0.04) - descendFactor * 2.5, start, end)
        this.ctx.stroke();
        this.ctx.closePath();


        // red line
        this.ctx.beginPath();
        this.ctx.strokeStyle = isLine ? color : COLORS.layerOne.red;
        this.ctx.lineWidth = isLine ? this.unit * 0.05 : this.unit * 0.05
        this.ctx.arc(center.x, center.y, (this.unit / 2) - (this.unit * 0.04) - descendFactor * 5, start, end)
        this.ctx.stroke();
        this.ctx.closePath();


        // white line
        this.ctx.beginPath();
        this.ctx.strokeStyle = isLine ? color : COLORS.layerOne.white;
        this.ctx.lineWidth = isLine ? this.unit * 0.05 : this.unit * 0.05
        this.ctx.arc(center.x, center.y, (this.unit / 2) - (this.unit * 0.04) - descendFactor * 7.85, start, end)
        this.ctx.stroke();
        this.ctx.closePath();

        this.sectionOneLastRadius = (this.unit / 2) - (this.unit * 0.04) - descendFactor * 7.85
        this.sectionOneLastDescendRatio = 7.85
        this.sectionOneDescendFactor = descendFactor
    }

    sectionTwo(start, size,) {
    }

    circleOne() {


        if (this.unit >= 700) {
            var descendFactor = 15
        }
        else {
            var descendFactor = 10
        }

        var radius = this.sectionOneLastRadius - (this.sectionOneLastDescendFactor * this.sectionOneLastDescendRatio) - descendFactor
        this.ctx.beginPath();
        this.ctx.strokeStyle = COLORS.border
        this.ctx.lineWidth = this.unit * 0.015
        this.ctx.arc(center.x, center.y, radius, 0, 2 * PI)
        this.ctx.stroke();
        this.ctx.closePath();

    }

}

// plotter functions

const border = (ctx, canvas) => {

    center = getCenter(canvas)
    unit = getUnit(canvas)


    if (unit >= 700) {
        var descendFactor = 6;
    }
    else {
        var descendFactor = 3
    }

    ctx.beginPath()
    ctx.strokeStyle = COLORS.border
    ctx.lineWidth = unit * 0.015
    ctx.arc(center.x, center.y, unit / 2 - descendFactor, 0, 2 * PI)
    ctx.stroke()
    ctx.closePath()
}



const draw = () => {

    /** @type {HTMLCanvasElement} */

    const canvas = document.getElementById("pookalam")
    var ctx = canvas.getContext("2d")


    // resize the pookalam according to viewport

    if (window.innerHeight < 700) {
        width = window.innerHeight - 200
        height = width
    }
    else if (window.innerWidth < 700) {
        height = window.innerWidth - 200
        width = height
    }
    else {
        width = height = 700
    }

    canvas.width = width
    canvas.height = height

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    layerOne = new LayerOne(ctx, canvas)

    border(ctx, canvas)

    // layer 1 arcs
    var borderStrokeGap = (PI / 6) / 3.8

    // var borderStrokeGap = 0
    var arcLength = borderStrokeGap + (PI / 3.5)

    layerOne.sectionOne(0 + borderStrokeGap, arcLength);
    layerOne.sectionOne((PI / 2) + borderStrokeGap, PI / 2 + arcLength);
    layerOne.sectionOne(PI + borderStrokeGap, PI + arcLength);
    layerOne.sectionOne(3 * (PI / 2) + borderStrokeGap, 3 * (PI / 2) + arcLength);

    layerOne.sectionOne(0, borderStrokeGap, true, COLORS.layerOne.white)
    layerOne.sectionOne(PI / 2, PI / 2 + borderStrokeGap, true, COLORS.layerOne.white)
    layerOne.sectionOne(PI, PI + borderStrokeGap, true, COLORS.layerOne.white)
    layerOne.sectionOne(3 * (PI / 2), 3 * (PI / 2) + borderStrokeGap, true, COLORS.layerOne.white)

    layerOne.sectionOne(arcLength, borderStrokeGap + arcLength, true, COLORS.layerOne.yellow)
    layerOne.sectionOne(PI / 2 + arcLength, PI / 2 + borderStrokeGap + arcLength, true, COLORS.layerOne.yellow)
    layerOne.sectionOne(PI + arcLength, PI + borderStrokeGap + arcLength, true, COLORS.layerOne.yellow)
    layerOne.sectionOne(3 * (PI / 2) + arcLength, 3 * (PI / 2) + borderStrokeGap + arcLength, true, COLORS.layerOne.yellow)


    layerOne.sectionOne(borderStrokeGap + arcLength, 2 * borderStrokeGap + arcLength, true, COLORS.layerOne.orange)
    layerOne.sectionOne(borderStrokeGap + PI / 2 + arcLength, PI / 2 + 2 * borderStrokeGap + arcLength, true, COLORS.layerOne.orange)
    layerOne.sectionOne(borderStrokeGap + PI + arcLength, PI + 2 * borderStrokeGap + arcLength, true, COLORS.layerOne.orange)
    layerOne.sectionOne(borderStrokeGap + 3 * (PI / 2) + arcLength, 3 * (PI / 2) + 2 * borderStrokeGap + arcLength, true, COLORS.layerOne.orange)

    layerOne.sectionOne(2 * borderStrokeGap + arcLength, 3 * borderStrokeGap + arcLength, true, COLORS.layerOne.red)
    layerOne.sectionOne(2 * borderStrokeGap + PI / 2 + arcLength, PI / 2 + 3 * borderStrokeGap + arcLength, true, COLORS.layerOne.red)
    layerOne.sectionOne(2 * borderStrokeGap + PI + arcLength, PI + 3 * borderStrokeGap + arcLength, true, COLORS.layerOne.red)
    layerOne.sectionOne(2 * borderStrokeGap + 3 * (PI / 2) + arcLength, 3 * (PI / 2) + 3 * borderStrokeGap + arcLength, true, COLORS.layerOne.red)

    layerOne.sectionOne(3 * borderStrokeGap + arcLength, 4 * borderStrokeGap + arcLength, true, COLORS.border)
    layerOne.sectionOne(3 * borderStrokeGap + PI / 2 + arcLength, PI / 2 + 4 * borderStrokeGap + arcLength, true, COLORS.layerOne.border)
    layerOne.sectionOne(3 * borderStrokeGap + PI + arcLength, PI + 4 * borderStrokeGap + arcLength, true, COLORS.layerOne.border)
    layerOne.sectionOne(3 * borderStrokeGap + 3 * (PI / 2) + arcLength, 3 * (PI / 2) + 4 * borderStrokeGap + arcLength, true, COLORS.layerOne.border)

    layerOne.circleOne()
}




