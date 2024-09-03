import React, {ReactNode} from "react";

type CardContentProps = {
    children?: ReactNode;
    title: string;
    date: string;
    tag: string;
}

export default function CardContent({children, title, date, tag}: CardContentProps): React.JSX.Element {
    return (
        <section className='card__details'>
            <p className='card__details--tag'>{tag}</p>
            <p className='card__details--medium'>{date}</p>
            <h1 className='card__details--hover'>{title}</h1>
            <p className='card__details--gray'>{children}</p>
        </section>)
}