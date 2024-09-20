/*

!! This file is a copy of /index.js, made to adhere to the submission rules.

*/


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
    },
    maveli: {
        black: "#000000",
        brown: "#A5521C",
        gold: "gold",
        face: "#ECB98A"
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
        this.ctx.lineWidth = this.unit * 0.015
        this.ctx.arc(center.x, center.y, radius, 0, 2 * PI)
        this.ctx.stroke();
        this.ctx.closePath();

        this.lastRadius = radius
        this.lastDescendFactor = descendFactor
        this.lastDescendRatio = 1


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

        for (var i = 0; i < 10; i++) {

            var k = binaryArray[i]
            k = "0" + k

            if (i == 5) {
                k = "00100000"
            }

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
                    var color = COLORS.layerOne.yellow
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

class LayerThree extends Layer {
    constructor(ctx, canvas, lastDescendFactor, lastDescendRatio, lastRadius) {
        super(ctx, canvas)
        this.lastDescendFactor = lastDescendFactor
        this.lastDescendRatio = lastDescendRatio
        this.lastRadius = lastRadius


    }

    sectionThree() {

        if (this.unit >= 450) {
            var descendFactor = 13
        }
        else {
            var descendFactor = 4
        }

        var shiftFactor = 0
        var shiftAngle = PI / 5
        var stripSize = ((4 * PI) / 180) * 8
        var radius = this.lastRadius - this.lastDescendFactor * descendFactor

        for (var i = 0; i < 10; i++) {


            var start = 0 - (4 * PI / 180) * 3.7 + (shiftFactor * shiftAngle)
            var end = start + stripSize

            this.ctx.beginPath();
            this.ctx.strokeStyle = COLORS.border
            this.ctx.lineWidth = this.unit * 0.03
            this.ctx.arc(this.center.x, this.center.y, radius, start, end)
            this.ctx.stroke();
            this.ctx.closePath();

            shiftFactor += 1
        }

        var shiftFactor = 0
        var shiftAngle = PI / 5
        var stripSize = ((4 * PI) / 180) * 7
        var radius = this.lastRadius - this.lastDescendFactor * descendFactor * 2.5

        for (var i = 0; i < 10; i++) {


            var start = 0 - (4 * PI / 180) * 3.2 + (shiftFactor * shiftAngle)
            var end = start + stripSize

            this.ctx.beginPath();
            this.ctx.strokeStyle = COLORS.layerOne.red
            this.ctx.lineWidth = this.unit * 0.03
            this.ctx.arc(this.center.x, this.center.y, radius, start, end)
            this.ctx.stroke();
            this.ctx.closePath();

            shiftFactor += 1
        }

        var shiftFactor = 0
        var shiftAngle = PI / 5
        var stripSize = ((4 * PI) / 180) * 6
        var radius = this.lastRadius - this.lastDescendFactor * descendFactor * 4

        for (var i = 0; i < 10; i++) {


            var start = 0 - (4 * PI / 180) * 2.7 + (shiftFactor * shiftAngle)
            var end = start + stripSize

            this.ctx.beginPath();
            this.ctx.strokeStyle = COLORS.layerOne.orange
            this.ctx.lineWidth = this.unit * 0.03
            this.ctx.arc(this.center.x, this.center.y, radius, start, end)
            this.ctx.stroke();
            this.ctx.closePath();

            shiftFactor += 1
        }


        var shiftFactor = 0
        var shiftAngle = PI / 5
        var stripSize = ((4 * PI) / 180) * 5
        var radius = this.lastRadius - this.lastDescendFactor * descendFactor * 5.5

        for (var i = 0; i < 10; i++) {


            var start = 0 - (4 * PI / 180) * 2.3 + (shiftFactor * shiftAngle)
            var end = start + stripSize

            this.ctx.beginPath();
            this.ctx.strokeStyle = COLORS.layerOne.yellow
            this.ctx.lineWidth = this.unit * 0.03
            this.ctx.arc(this.center.x, this.center.y, radius, start, end)
            this.ctx.stroke();
            this.ctx.closePath();

            shiftFactor += 1
        }


        var shiftFactor = 0
        var shiftAngle = PI / 5
        var stripSize = ((4 * PI) / 180) * 4
        var radius = this.lastRadius - this.lastDescendFactor * descendFactor * 7

        for (var i = 0; i < 10; i++) {


            var start = 0 - (4 * PI / 180) * 1.9 + (shiftFactor * shiftAngle)
            var end = start + stripSize

            this.ctx.beginPath();
            this.ctx.strokeStyle = COLORS.layerOne.white
            this.ctx.lineWidth = this.unit * 0.03
            this.ctx.arc(this.center.x, this.center.y, radius, start, end)
            this.ctx.stroke();
            this.ctx.closePath();

            shiftFactor += 1
        }

    }

    circle() {
        var descendFactor = 3.25


        this.ctx.beginPath();
        this.ctx.fillStyle = COLORS.binaryLayer.green
        this.ctx.arc(this.center.x, this.center.y, this.unit / descendFactor, 0, 2 * PI)
        this.ctx.fill();
        this.ctx.closePath();


    }
}

class LayerFour extends Layer {
    constructor(ctx, canvas) {
        super(ctx, canvas)
    }

    drawMaveli() {

        if (this.unit >= 450) {
            var descendFactor = 6
            var crownDescentFactorY = 30
            var crownDescentFactorX = 10
            var stacheDescentFactorX = -25
            var stacheDescentFactorY = 40
            var stacheWidth = 100
            var stacheHeight = 80

        }
        else {
            var descendFactor = 5
            var crownDescentFactorY = 15
            var crownDescentFactorX = 5
            var stacheDescentFactorX = -13
            var stacheDescentFactorY = 20

            var stacheWidth = 50
            var stacheHeight = 30
        }

        var radius = this.unit / (descendFactor * 1.5)

        var rotateAngle = -(PI / 10)

        this.ctx.beginPath()
        this.ctx.fillStyle = COLORS.maveli.gold
        this.ctx.arc(this.center.x + crownDescentFactorX, this.center.y + crownDescentFactorY, radius, 0 + rotateAngle, PI + rotateAngle, true)
        this.ctx.fill()
        this.ctx.closePath();

        this.ctx.beginPath()
        this.ctx.fillStyle = COLORS.maveli.face
        this.ctx.arc(this.center.x + crownDescentFactorX, this.center.y + crownDescentFactorY, radius * 0.8, 0 + rotateAngle, PI + rotateAngle)
        this.ctx.fill()
        this.ctx.closePath();

        this.ctx.beginPath()
        this.ctx.strokeStyle = COLORS.maveli.gold
        this.ctx.lineWidth = this.unit * 0.03
        this.ctx.arc(this.center.x - crownDescentFactorX, this.center.y - crownDescentFactorY, radius * 0.8, PI / 2 + PI / 4 + rotateAngle, 2 * PI + PI / 4 + rotateAngle)
        this.ctx.stroke()
        this.ctx.closePath();


        const stache = new Image()
        stache.src = window.location.origin + "/stache.png"

        stache.onload = () => this.ctx.drawImage(stache, this.center.x + stacheDescentFactorX, this.center.y + stacheDescentFactorY, stacheWidth, stacheHeight)


    }

    background() {
        if (this.unit >= 450) {
            var descendFactor = 6
        }
        else {
            var descendFactor = 5
        }

        this.ctx.beginPath();
        this.ctx.fillStyle = COLORS.layerOne.orange
        this.ctx.arc(this.center.x, this.center.y, this.unit / descendFactor, 0, 2 * PI)
        this.ctx.fill()
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.strokeStyle = COLORS.binaryLayer.green
        this.ctx.lineWidth = this.unit * 0.01
        this.ctx.arc(this.center.x, this.center.y, this.unit / descendFactor, 0, 2 * PI)
        this.ctx.stroke();
        this.ctx.closePath();

    }
}

class LayerFive extends Layer {
    constructor(ctx, canvas) {
        super(ctx, canvas);
        this.mousePos = { x: canvas.width / 2, y: canvas.height / 2 };

        canvas.addEventListener('mousemove', (event) => {
            this.mousePos = this.getMousePos(canvas, event);
        });

        this.animate();
    }

    getMousePos(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    drawEyes() {
        if (this.unit >= 450) {

            var radius = 15

            var leftEyeDescentFactorY = 60
            var leftEyeDescentFactorX = -10

            var rightEyeDescentFactorY = 44
            var rightEyeDescentFactorX = +40

            var crownDescentFactorY = 40
            var crownDescentFactorX = 10
        }
        else {

            var radius = 6

            var leftEyeDescentFactorY = 26
            var leftEyeDescentFactorX = -5

            var rightEyeDescentFactorY = 20
            var rightEyeDescentFactorX = 18

            var crownDescentFactorY = 15
            var crownDescentFactorX = 5
        }

        let eyeColor = "#fff";

        var leftEyeX = this.center.x + leftEyeDescentFactorX;
        var leftEyeY = this.center.y + leftEyeDescentFactorY;
        var rightEyeX = this.center.x + rightEyeDescentFactorX;
        var rightEyeY = this.center.y + rightEyeDescentFactorY;
        var rotateAngle = -PI / 6

        this.ctx.beginPath()
        this.ctx.fillStyle = COLORS.maveli.face
        this.ctx.arc(this.center.x + crownDescentFactorX, this.center.y + crownDescentFactorY, radius * 0.8, 0 + rotateAngle, PI + rotateAngle)
        this.ctx.fill()
        this.ctx.closePath();


        this.drawCircle(leftEyeX, leftEyeY, radius, eyeColor);
        this.drawCircle(rightEyeX, rightEyeY, radius, eyeColor);

        let maxPupilOffset = radius * 0.5;

        let leftPupilOffset = this.getPupilOffset(leftEyeX, leftEyeY, maxPupilOffset);
        let rightPupilOffset = this.getPupilOffset(rightEyeX, rightEyeY, maxPupilOffset);

        this.drawCircle(leftEyeX + leftPupilOffset.x, leftEyeY + leftPupilOffset.y, radius * 0.5, "black");
        this.drawCircle(rightEyeX + rightPupilOffset.x, rightEyeY + rightPupilOffset.y, radius * 0.5, "black");
    }

    getPupilOffset(eyeX, eyeY, maxOffset) {
        let dx = this.mousePos.x - eyeX;
        let dy = this.mousePos.y - eyeY;
        let distance = Math.sqrt(dx * dx + dy * dy);

        let maxDistance = Math.min(distance, maxOffset);
        let angle = Math.atan2(dy, dx);

        return {
            x: Math.cos(angle) * maxDistance,
            y: Math.sin(angle) * maxDistance
        };
    }

    drawCircle(x, y, radius, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    animate() {
        this.drawEyes();
        requestAnimationFrame(() => this.animate());
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

// root function
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

    // layerThree = new LayerThree(ctx, canvas, layerTwo.lastDescendFactor, layerTwo.lastDescendRatio, layerTwo.lastRadius)
    layerThree = new LayerThree(ctx, canvas, layerTwo.lastDescendFactor, layerTwo.lastDescendRatio, layerTwo.lastRadius)
    layerThree.circle()
    layerThree.sectionThree()

    // maveli layer
    layerFour = new LayerFour(ctx, canvas)
    layerFour.background()
    layerFour.drawMaveli()

    // moving eyes


    layerFive = new LayerFive(ctx, canvas)
}
