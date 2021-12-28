const Content = ({ urls, items}) => {

    const len = items.length;

    return (
        <section>
        <h1>Fetch Data Contents</h1> 
        <a href={urls}>{urls}</a>
        <p>Total Length: {len}</p>
            <div>
                <ul>
                    {items.map((item) => (
                    <li key={item.id}>
                        {JSON.stringify(item)}
                    </li>
                    ))}
                </ul>

            </div>

        </section>
    )
}

export default Content
