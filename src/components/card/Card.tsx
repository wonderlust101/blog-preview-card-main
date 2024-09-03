import React, {ReactNode} from "react";
import CardContent from "./CardContent.tsx";

type CardProps = {
    children?: ReactNode;
    title: string;
    date: string;
    tag: string;
    author: string;
}

export default function Card({children, title, date, tag, author}: CardProps): React.JSX.Element {
    return (
        <section className='card'>
            <img className="card__image" src='/images/illustration-article.svg' alt="" aria-hidden={true}/>
            <CardContent title={title} date={date} tag={tag}>
                {children}
            </CardContent>
            <div className="card__author">
                <img className="card__author-image" src='/images/image-avatar.webp' alt=""/>
                <p className="card__author--bold">{author}</p>
            </div>
        </section>)
}