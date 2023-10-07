import Typing from "./Typing";

export default function Start() {
    return (
        <section className='start'>
            <div className='start__content'>
                <h1>
                    <Typing text={["Hello, I'm Vladimir", "This is my blog", 'This is my portfolio']} delay={100} />
                    <span className='start__blinker' />
                </h1>
                <h3>I'm a software developer</h3>
            </div>
        </section>
    );
}