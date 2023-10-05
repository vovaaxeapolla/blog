export default function Title({ text }) {
    return (
        <h1 className='title'>
            <div className='title__text'>{
                text.split('').map((l: string, i: number) => <span key={i} className={l === ' ' ? 'space' : ''}>{l}</span>)
            }</div>
            <div className='title__shadow'>{text}</div>
        </h1>
    );
}