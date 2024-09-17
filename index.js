// dom listeners

window.onresize = () => window.location.href = "/"

// constants

const PI = Math.PI

const COLORS = {
    border: "#44265A",
    layerOne: {
        yellow: "#CBB530",
        orange: "#C46315",
        red: "#A0374D",
        white: "#e1e1e1",
    },
    binaryLayer: {
        pink: "#C77590",
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

class LayerTwo extends Layer {
    constructor(ctx, canvas, lastDescendFactor, lastDescendRatio, lastRadius) {
        super(ctx, canvas)
        this.lastDescendFactor = lastDescendFactor
        this.lastDescendRatio = lastDescendRatio
        this.lastRadius = lastRadius
    }

    genBinaryArray(text) {
        var binaryArray = []

        for (var i = 0; i < text.length; i++) {
            binaryArray.push(text[i].charCodeAt(0).toString(2))
        }

        for (var i = 0; i < 5; i++) {
            var k = binaryArray[i]
            k = "0" + k
            binaryArray[i] = k
        }

        return binaryArray
    }
    drawBinary(binaryArray) {
        var binaryArray = this.genBinaryArray("Happy Onam")
        var bitAngleSize = 4 * (PI / 180)


        if (this.unit >= 450) {
            var descendFactor = 20.5
        }
        else {
            var descendFactor = 5
        }


        var shiftFactor = 0

        for (var charBinaryArray of binaryArray) {
            for (var i = 0; i < 8; i++) {

                var start = (PI + ((PI / 16) / 5 - 3.5 * ((PI / 6) / 6.2))) + bitAngleSize * shiftFactor
                var end = start + bitAngleSize

                if (Number(charBinaryArray[i]) == 0) {
                    var color = COLORS.binaryLayer.white;
                }
                else {
                    var color = COLORS.layerOne.orange
                }

                this.ctx.beginPath();
                this.ctx.strokeStyle = color;
                this.ctx.lineWidth = this.unit * 0.05
                var radius = this.lastRadius - this.lastDescendRatio * descendFactor
                this.ctx.arc(center.x, center.y, radius, start, end)
                this.ctx.stroke();
                this.ctx.closePath();
                shiftFactor += 1
            }

            var start = (PI + ((PI / 16) / 5 - 3.5 * ((PI / 6) / 6.2))) + (bitAngleSize) * shiftFactor
            var end = start + bitAngleSize

            this.ctx.beginPath();
            this.ctx.strokeStyle = COLORS.border;
            this.ctx.lineWidth = this.unit * 0.05
            var radius = this.lastRadius - this.lastDescendRatio * descendFactor
            this.ctx.arc(center.x, center.y, radius, start, end)
            this.ctx.stroke();
            this.ctx.closePath();
            shiftFactor += 1
        }

        this.lastRadius = radius
        this.lastDescendFactor = descendFactor
        this.lastDescendRatio = 1

    }

    circle() {

        if (this.unit >= 450) {
            var descendFactor = 1
        }
        else {
            var descendFactor = 1
        }

        var radius = this.lastRadius - this.lastDescendFactor * descendFactor
        this.ctx.beginPath();
        this.ctx.strokeStyle = COLORS.border
        this.ctx.lineWidth = this.unit * 0.01
        this.ctx.arc(center.x, center.y, radius, 0, 2 * PI)
        this.ctx.stroke();
        this.ctx.closePath();

        this.lastRadius = radius
        this.lastDescendFactor = descendFactor
        this.lastDescendRatio = 1


    }
}

class LayerOne extends Layer {
    constructor(ctx, canvas) {
        super(ctx, canvas)
        this.lastDescendFactor = 0;
        this.lastRadius = 0;
        this.lastDescendRatio = 0;
    }
    sectionOne(start, end, isLine = false, color = "") {
        // donot touch the code here pls pls
        // boxy middle part

        if (this.unit >= 450) {
            var descendFactor = 6
        }
        else {
            var descendFactor = 2.5
        }


        // yellow line
        this.ctx.beginPath();
        this.ctx.strokeStyle = isLine ? color : COLORS.layerOne.yellow;
        this.ctx.lineWidth = isLine ? this.unit * 0.07 : this.unit * 0.07
        this.ctx.arc(center.x, center.y, (this.unit / 2) - (this.unit * 0.035) - descendFactor, start, end)
        this.ctx.stroke();
        this.ctx.closePath();


        // orange line
        this.ctx.beginPath();
        this.ctx.strokeStyle = isLine ? color : COLORS.layerOne.orange;
        this.ctx.lineWidth = isLine ? this.unit * 0.05 : this.unit * 0.05
        this.ctx.arc(center.x, center.y, (this.unit / 2) - (this.unit * 0.045) - descendFactor * 2, start, end)
        this.ctx.stroke();
        this.ctx.closePath();


        // red line
        this.ctx.beginPath();
        this.ctx.strokeStyle = isLine ? color : COLORS.layerOne.red;
        this.ctx.lineWidth = isLine ? this.unit * 0.05 : this.unit * 0.05
        this.ctx.arc(center.x, center.y, (this.unit / 2) - (this.unit * 0.045) - descendFactor * 5.5, start, end)
        this.ctx.stroke();
        this.ctx.closePath();


        // white line
        this.ctx.beginPath();
        this.ctx.strokeStyle = isLine ? color : COLORS.layerOne.white;
        this.ctx.lineWidth = isLine ? this.unit * 0.03 : this.unit * 0.03
        this.ctx.arc(center.x, center.y, (this.unit / 2) - (this.unit * 0.045) - descendFactor * 8, start, end)
        this.ctx.stroke();
        this.ctx.closePath();

        this.lastRadius = (this.unit / 2) - (this.unit * 0.045) - descendFactor * 8
        this.lastDescendRatio = 8
        this.lastDescendFactor = descendFactor
    }

    circle() {

        if (this.unit >= 450) {
            var descendFactor = 2
        }
        else {
            var descendFactor = 1
        }

        var radius = this.lastRadius - this.lastDescendFactor * descendFactor
        this.ctx.beginPath();
        this.ctx.strokeStyle = COLORS.border
        this.ctx.lineWidth = this.unit * 0.01
        this.ctx.arc(center.x, center.y, radius, 0, 2 * PI)
        this.ctx.stroke();
        this.ctx.closePath();

        this.lastRadius = radius
        this.lastDescendFactor = descendFactor
        this.lastDescendRatio = 1


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

    if (window.innerHeight < 450) {
        width = window.innerHeight - 200
        height = width
    }
    else if (window.innerWidth < 450) {
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
    var borderStrokeGap = (PI / 6) / 6.2

    // var borderStrokeGap = 0
    var arcLength = borderStrokeGap + (PI / 3.5)

    layerOne.sectionOne(0 + borderStrokeGap, arcLength);
    layerOne.sectionOne((PI / 2) + borderStrokeGap, PI / 2 + arcLength);
    layerOne.sectionOne(PI + borderStrokeGap, PI + arcLength);
    layerOne.sectionOne(3 * (PI / 2) + borderStrokeGap, 3 * (PI / 2) + arcLength);

    // white and yellow lines
    layerOne.sectionOne(0, borderStrokeGap, true, COLORS.layerOne.white)
    layerOne.sectionOne(PI / 2, PI / 2 + borderStrokeGap, true, COLORS.layerOne.white)
    layerOne.sectionOne(PI, PI + borderStrokeGap, true, COLORS.layerOne.white)
    layerOne.sectionOne(3 * (PI / 2), 3 * (PI / 2) + borderStrokeGap, true, COLORS.layerOne.white)


    const coloredVerticalLayers = (factorRatio, color) => {
        layerOne.sectionOne(borderStrokeGap * factorRatio + arcLength, (factorRatio + 1) * borderStrokeGap + arcLength, true, color)
        layerOne.sectionOne(borderStrokeGap * factorRatio + PI / 2 + arcLength, PI / 2 + (factorRatio + 1) * borderStrokeGap + arcLength, true, color)
        layerOne.sectionOne(borderStrokeGap * factorRatio + PI + arcLength, PI + (factorRatio + 1) * borderStrokeGap + arcLength, true, color)
        layerOne.sectionOne(borderStrokeGap * factorRatio + 3 * (PI / 2) + arcLength, 3 * (PI / 2) + (factorRatio + 1) * borderStrokeGap + arcLength, true, color)
    }

    coloredVerticalLayers(0, COLORS.layerOne.yellow)
    coloredVerticalLayers(1, COLORS.layerOne.orange)
    coloredVerticalLayers(2, COLORS.layerOne.red)
    coloredVerticalLayers(3, COLORS.border)
    coloredVerticalLayers(4, COLORS.layerOne.red)
    coloredVerticalLayers(5, COLORS.layerOne.orange)
    coloredVerticalLayers(6, COLORS.layerOne.yellow)

    layerOne.circle()


    // binary layer
    layerTwo = new LayerTwo(ctx, canvas, layerOne.lastDescendFactor, layerOne.lastDescendRatio, layerOne.lastRadius)
    layerTwo.drawBinary()
    layerTwo.circle()
}
