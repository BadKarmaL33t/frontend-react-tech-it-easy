function listAllTelevisions(tv) {
    return (
        <ul className="brands-list">
            {tv.map((tv, index) => (
                <li key={index}>
                    {tv.brand}
                </li>
            ))}
        </ul>
    )
}

export default listAllTelevisions;