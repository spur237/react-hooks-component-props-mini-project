export default function Article({ title, date = "January 1, 1970", preview, minutes }) {
    let takes = ""
    let i = 0;
    if (minutes > 30) {
        while (i < minutes / 10) {
            takes = takes + " 🍱 ";
            i++;
        }
    }
    else{
        while (i < minutes / 5) {
            takes = takes + " ☕️ ";
            i++;
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {takes} {minutes} minutes min read</small>
            <p>{preview}</p>
        </article>
    )
}