interface Point {
    x: number
    y: number
}

class Particle {
    private position: Point
    private velocity: Point
    private radius: number;
    private ctx: CanvasRenderingContext2D;
    private color = "#" + ((1 << 24) * (Math.random() * .5 + .5) | 0).toString(16).padStart(6, "f");
    private width: number;
    private height: number;

    constructor(context: CanvasRenderingContext2D, position: Point, radius: number, width: number, heigt: number) {
        this.ctx = context
        this.position = position;
        this.radius = radius;
        this.width = width;
        this.height = heigt;
        this.velocity = {
            x: Math.random() * 2 - 1,
            y: Math.random() * 2 - 1
        }
    }

    public update() {
        if (this.position.x + this.velocity.x > this.width || this.position.x + this.velocity.x < 0) this.velocity.x *= -1;
        if (this.position.y + this.velocity.y > this.height || this.position.y + this.velocity.y < 0) this.velocity.y *= -1;
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }

    public render() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    }

    public setSize(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

}

export default class CanvasBackgroundAnimation {

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private width: number = innerWidth;
    private height: number = innerHeight;
    private particles: Particle[] = [];
    private requestAnimationId: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        for (let i = 0; i < 30; i++) {
            this.particles.push(new Particle(
                this.ctx,
                {
                    x: Math.random() * this.width,
                    y: Math.random() * this.height
                },
                Math.random() * Math.min(this.width, this.height) / 4,
                this.width,
                this.height
            ));
        }
    }

    private loop() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.particles.forEach(p => p.update());
        this.particles.forEach(p => p.render());
        this.requestAnimationId = requestAnimationFrame(this.loop.bind(this));
    }

    public start() {
        this.loop();
        // window.addEventListener('resize', 
    }

    public stop() {
        cancelAnimationFrame(this.requestAnimationId);
    }

}